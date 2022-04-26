<template>
    <div class="content">
        <h1>Anayltics</h1>
        <h6>Here are your analytics.</h6>

        <div class="post-card">
            <div class="wrapper">
                <div class="blog_post">
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
                    <D3BarChart>
                    </D3BarChart>
                </div>
            </div>
        </div>

        <div class="post-card">
            <div class="wrapper">
                <div class="blog_post">
                  <div id="chart">
                    <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>
                  </div>
                </div>
            </div>
        </div>

    </div> 

</template>

<script>
import * as d3 from "d3";
import { api } from '../apis/api';
import { useCookies } from "vue3-cookies";
import VueApexCharts from "vue3-apexcharts";

export default {
  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },
  name: 'AnalyticsPage',
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      totalVotes: [
        {type: "UpVotes", value: 0},
        {type: "DownVotes", value: 0}
      ],
      usersPosts: [],
      totalUpVotes: 0,
      totalDownVotes: 0,


      series: [{
            name: 'UpVotes',
            data: [31, 40, 28, 51, 42, 109, 100]
          }, {
            name: 'DownVotes',
            data: [11, 32, 45, 32, 34, 52, 41]
          }
      ],
      chartOptions: {
        colors: ['#36476b', '#fbd758'],
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      },
    };
  },
   async mounted() {
    this.usersPosts = await api.getPostsByUser(this.cookies.get('userid'));
    for (var i = 0; i < this.usersPosts.length; i++) {
      //console.log(this.usersPosts[i].upvotes);
      this.totalUpVotes += this.usersPosts[i].upvotes;
      this.totalDownVotes += this.usersPosts[i].downvotes;
    }
    console.log(this.totalUpVotes)
    console.log(this.totalDownVotes)
    this.totalVotes[0].value = this.totalUpVotes;
    this.totalVotes[1].value = this.totalDownVotes;
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

      const sortedtotalVotes = this.totalVotes.sort((a, b) => (a.value > b.value ? 1 : -1));
      const color = d3.scaleOrdinal()
            .domain(d3.range(2))
            .range(['#fbd758', '#36476b']);

      const max_totalVotes = d3.max(sortedtotalVotes, o => o.value);

      const angleScale = d3
        .scaleLinear()
        .domain([0, max_totalVotes])
        .range([0, 1.5 * Math.PI]);

      const arc = d3
        .arc()
        .innerRadius((d, i) => (i + 1) * 60)
        .outerRadius((d, i) => (i + 2) * 60)
        .startAngle(angleScale(0))
        .endAngle(d => angleScale(d.value));

      const g = svg.append("g");

      g.selectAll("path")
        .data(sortedtotalVotes)
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
        .data(this.totalVotes)
        .enter()
        .append("text")
        .text(d => `${d.type}: ${d.value}`)
        .attr("x", -150)
        .attr("dy", -8)
        .attr("y", (d, i) => -(i + 1) * 70);

      g.attr("transform", "translate(260,200)");
  }
}
    
}
    

</script>
    
<style scoped lang="scss">

.content h1 {
  padding-left: 14px;
}

.post-card {
  padding: 30px 0px;
  margin: 20px auto;
  max-width: 900px;
}

.wrapper {
  height: 100%;
  width: 100%;

  &:hover {
    transition: all 0.3s ease-out;
    box-shadow: 3px 3px 2rem rgba(54, 71, 107, 0.5);
  }
}

.blog_post {
  position: relative;
  padding: 3rem 4rem 2rem 4rem;
  background: rgb(245, 245, 245);
  width: 900px;
  border-radius: 10px;
  box-shadow: 1px 1px 2rem rgba(54, 71, 107, 0.5);
}


</style>