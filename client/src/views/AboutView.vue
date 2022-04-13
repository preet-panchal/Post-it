<template>
  <!-- <div class="home">
    <BlogPost v-if="!user" :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in blogPostsFeed" :key="index" />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCard :post="post" v-for="(post, index) in blogPostsCards" :key="index" />
        </div>
      </div>
    </div>
    <div v-if="!user" class="updates">
      <div class="container">
        <h2>never miss a post. Register for your free account today!</h2>
        <router-link class="router-button" to="#"> Register for FireBlogs <Arrow class="arrow arrow-light" /> </router-link>
      </div>
    </div>
  </div> -->
  <section class="hero is-danger is-fullheight">
  <div class="hero-body">
    <div class="has-text-centered">
      <h1 class="title">
        Have something on your mind?
      </h1>
      <h2 class="subtitle has-text-warning animate-character">
        /Post-It. 
      </h2>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "coding",
      },
    };
  },
  computed: {
    blogPostsFeed() {
      return this.$store.getters.blogPostsFeed;
    },
    blogPostsCards() {
      return this.$store.getters.blogPostsCards;
    },
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss" scoped>
.hero {
  background-image: url("../assets/about-cover.jpeg");
  background-size: cover; 
  text-align: center;
}
.title {
  font-size: 85px;
}
.subtitle {
  font-weight: bolder;
  float: left;
}
.animate-character
{
  
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 4s linear infinite;
  display: inline-block;
      font-size: 190px;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
</style>