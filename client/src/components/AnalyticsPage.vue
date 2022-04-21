<template>
    <div>
        <h1>Anayltics</h1>
        

        <v-app>
        <v-container>
        <v-row>
            <v-col cols="2" class="d-flex justify-center align-center">
            </v-col>
            <v-col id="arc" />
        </v-row>
        </v-container>
    </v-app>
        <!-- chart -->
    <D3BarChart
      :config="chart_config"
      :datum="chart_data"
    ></D3BarChart>

    </div> 

</template>

<script>
import * as d3 from "d3";

export default {
    name: 'AnalyticsPage',
    props: {
        upvotes: Number,
        downvotes: Number
    },
  data() {
    return {
      gdp: [
        {country: "UpVotes", value: 10},
        {country: "DownVotes", value: 13.4 }
      ]
    };
  },

   mounted() {
    this.generateArc();
  },
  methods: {
    generateArc() {
      const w = 500;
      const h = 500;

      const svg = d3
        .select("#arc")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

      const sortedGDP = this.gdp.sort((a, b) => (a.value > b.value ? 1 : -1));
      const color = d3.scaleOrdinal(d3.schemeDark2);

      const max_gdp = d3.max(sortedGDP, o => o.value);

      const angleScale = d3
        .scaleLinear()
        .domain([0, max_gdp])
        .range([0, 1.5 * Math.PI]);

      const arc = d3
        .arc()
        .innerRadius((d, i) => (i + 1) * 50)
        .outerRadius((d, i) => (i + 2) * 50)
        .startAngle(angleScale(0))
        .endAngle(d => angleScale(d.value));

      const g = svg.append("g");
      g.selectAll("path")
        .data(sortedGDP)
        .enter()
        .append("path")
        .attr("d", arc)
        .attr("fill", (d, i) => color(i))
        .attr("stroke", "#FFF")
        .attr("stroke-width", "1px")
        .on("mouseenter", function() {
          d3.select(this)
            .transition()
            .duration(200)
            .attr("opacity", 0.5);
        })
        .on("mouseout", function() {
          d3.select(this)
            .transition()
            .duration(200)
            .attr("opacity", 1);
        });

      g.selectAll("text")
        .data(this.gdp)
        .enter()
        .append("text")
        .text(d => `${d.country} -  ${d.value}`)
        .attr("x", -150)
        .attr("dy", -8)
        .attr("y", (d, i) => -(i + 1) * 70);

      g.attr("transform", "translate(300,200)");
  }
}
    
}
    

</script>
    
<style scoped lang="scss">

</style>