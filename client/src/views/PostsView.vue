<template>
    <div>
        <h1>Log in to create a post!</h1>
        <div class="header">
            <h1>Trending Posts</h1>
            <i class="fa-solid fa-arrow-trend-up fa-2xl"></i>
        </div>
    </div>
</template>

<script>

export default {
    name: "PostsView"
};
</script>


<style lang="scss">
h1 {
    display: inline-block;
    text-align: center;
    font-size: 32px;
    color: #303030;
    margin-bottom: 30px;
    margin-right: 20px;
    margin-top: 3rem;
    @media (min-width: 900px) {
        font-size: 40px;
    }
}

</style>