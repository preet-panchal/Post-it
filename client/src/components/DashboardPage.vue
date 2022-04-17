<template>
    <div>
        <h1>Your Bio</h1>
        <strong>Your posts show up here.</strong>
        <p>{{this.upvotes}}</p>
        <p>{{this.downvotes}}</p>
    </div>
    
</template>

<script>

export default {
    name: 'DashboardPage',
    props: {
        user: Array
    }
}
</script>

<style scoped lang="scss">

</style>