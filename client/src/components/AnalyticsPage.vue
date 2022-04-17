<template>
    <div>
        <h1>Anayltics</h1>
        <strong>Here are your analytics.</strong>
        <p>{{this.upvotes}}</p>
        <p>{{this.downvotes}}</p>
    </div>
    
</template>

<script>

export default {
    name: 'AnalyticsPage',
    props: {
        upvotes: Number,
        downvotes: Number
    }
}
</script>

<style scoped lang="scss">

</style>