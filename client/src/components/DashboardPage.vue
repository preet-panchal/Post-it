<template>
    <div>
        <h1>Your Bio</h1>
        <strong>Your posts show up here.</strong>
        <div v-for="post in user" :key="post._id" class="post-card">
          <div class="wrapper">
              <div class="blog_post">
                <div class="container_copy">
                  <p>{{post.firstName}}</p>
                  <p>{{post.lastName}}</p>
                </div>
              </div>
          </div>
        </div>
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