<template>
  <div class="home">

    <div class="video is-fullheight">
        <video muted autoplay loop id="background-video">
          <source src="../assets/earth.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <div class="home-header overlay">
          <div>
            <p>Stay connected to the world.</p>
            <p>Scroll down to see trending posts!</p>
            <br>
            <div class="container">
              <div class="chevron"></div>
              <div class="chevron"></div>
              <div class="chevron"></div>
            </div>
          </div>
          
        </div>
    </div>

    <div class="header">
      <h1>Trending Posts <i class="fa-solid fa-arrow-trend-up fa-md"></i></h1>    
    </div>

    <div v-for="post in posts" :key="post._id" class="post-card">
      <div class="wrapper">
        <div class="blog_post">
          <div class="container_copy">
            <h3>{{post.datePosted}} • {{post.author}}</h3>
            <h1>{{post.title}}</h1>
            <p>{{post.body}}</p>
          </div>
          <div class="interact">
            <i @click.prevent="this.cookies.get('userid') ? (post.upvotes++, updatePost(post._id, 'upVote')) : null" class="fa-solid fa-chevron-up vote"></i>
            <p class="views">{{post.upvotes}}</p>
            <i @click.prevent="this.cookies.get('userid') ? (post.downvotes++, updatePost(post._id, 'downVote')) : null" class="fa-solid fa-chevron-down vote"></i>
            <p class="views">{{post.downvotes}}</p>
            <i class="fa-solid fa-trash trash"></i>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { api } from '../apis/api';
import { useCookies } from "vue3-cookies";

export default {
  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },
  name: 'HomePage',
  props: {
    msg: String
  },
  data() {
    return {
      posts: []
    }
  },
  methods: {
    async updatePost(postid, type) {
      var payload = {
          postid: postid,
          type: type
        };
      try {
        await api.updatePost(payload);
      } catch (e) {
        console.log(e);
      }
      this.posts = await api.getPosts();
    }
  },
  async mounted() {
    this.posts = await api.getPosts();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.interact {
  display: inline-flex;
  margin-right: 100%;
}

.interact i {
  padding: 0px 10px 0px 20px;
}

.btn, .views {
  padding: 5px;
}

hr {
  height: 3px;
  background-color: #ccc;
}

.title {
  font-size: 25px;
}

.author {
  font-size: 20px;
}

.x {
  color: red;
}

.video {
  opacity: 1.0;
  &:hover {
    opacity: 0.9;
  }
}

.home-header {
  font-size: 80px;
  font-weight: bolder;
  color: #fff;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;

  background: 100% 100% / 50% 50% no-repeat
              radial-gradient(ellipse at bottom, #fff, transparent, transparent);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: reveal 5.0s ease-in-out forwards 0.2s,
             glow 2.5s linear infinite 2.0s;

  @keyframes reveal {
    100% {
      background-size: 300% 300%;
      color: #fff;
    }
  }
}

$base: 0.6rem;

.container {
  display: flex;
  flex: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 0; 
}

.chevron {
  position: absolute;
  width: $base * 6.5;
  height: $base * 0.8;
  opacity: 0;
  transform: scale(0.3);
  animation: move-chevron 3s ease-out infinite;
}

.chevron:first-child {
  animation: move-chevron 3s ease-out 1s infinite;
}

.chevron:nth-child(2) {
  animation: move-chevron 3s ease-out 2s infinite;
}

.chevron:before,
.chevron:after {
  content: '';
  position: absolute;
  top: 0;
  height: 100%;
  width: 50%;
  background: #fff  ;
}

.chevron:before {
  left: 0;
  transform: skewY(30deg);
}

.chevron:after {
  right: 0;
  width: 50%;
  transform: skewY(-30deg);
}

@keyframes move-chevron {
  25% {
    opacity: 1;
  }
  33.3% {
    opacity: 1;
    transform: translateY($base * 3.8);
  }
  66.6% {
    opacity: 1;
    transform: translateY($base * 5.2);
  }
  100% {
    opacity: 0;
    transform: translateY($base * 8) scale(0.5);
  }
}

.post-card {
  margin: auto;
  padding: 30px 0px;
  margin: 20px auto;
  margin: auto;
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

.container_copy h3 {
  margin: 0 0 1.0rem 0;
  color: rgb(122, 122, 122);
  font-weight: bold;
  font-size: 1.25rem;
}

.container_copy h1 {
  margin: 0 0 1rem 0;
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 0.5px;
  color: #36476b;
}

.container_copy p {
  margin: 0 0 2.5rem 0;
  font-size: 1.5rem;
  color: #333;
}

.vote {
  font-size: 30px;
  &:hover {
    color: rgb(0, 115, 255); 
    cursor: pointer;
  }
}

.trash {
  font-size: 25px;
  &:hover {
    color: red; 
    cursor: pointer;
  }
}
</style>
