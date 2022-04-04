<template>
  <div class="home">
<!--     <BlogPost v-if="!user" :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in blogPostsFeed" :key="index" /> -->
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
<!--           <BlogCard :post="post" v-for="(post, index) in blogPostsCards" :key="index" /> -->
        </div>
      </div>
    </div>
    <div v-if="!user" class="updates">
      <div class="container">
        <h2>never miss a post. Register for your free account today!</h2>
        <!-- <router-link class="router-button" to="#"> Register for FireBlogs <Arrow class="arrow arrow-light" /> </router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
/* import BlogPost from "../components/BlogPost";
import BlogCard from "../components/BlogCard";
import Arrow from "../assets/Icons/arrow-right-light.svg"; */
export default {
  name: "AboutView",
  //components: { BlogPost, BlogCard, Arrow },
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
</style>