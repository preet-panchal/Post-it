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
    <div v-for="post in posts" :key="post.postid" class="post-card">
        <div class="title">
          <p>{{post.title}}</p>
        </div>
        <hr>
        <div class="author">
          <p>{{post.author}}</p>
        </div>
        <hr>
        <div class="body">
          <p>{{post.body}}</p>
        </div>
        <hr>
        <div class="interact">
          <button><i class="fa-solid fa-chevron-up btn"></i></button>
          <p class="views">{{post.upvotes}}</p>
          <button><i class="fa-solid fa-chevron-down btn"></i></button>
          <p class="views">{{post.downvotes}}</p>
        </div>
      </div>
  </div>
</template>

<script>
// import axios from 'axios';
// import { api } from '../apis/api';

export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  data() {
    return {
      posts: [
                {
                    "_id": "6258a6f7303e638a4ec62df9",
                    "title": "Test1",
                    "body": "dfsdf",
                    "upvotes": 0,
                    "downvotes": 0,
                    "author": "Preet Panchal",
                    "userid": "6257397b5d0e39067499ad30",
                    "v": 0
                },
                {
                    "_id": "62599885fd0c40f912299d70",
                    "title": "sdf",
                    "body": "sdf",
                    "upvotes": 0,
                    "downvotes": 0,
                    "author": "Preet Panchal",
                    "userid": "6257397b5d0e39067499ad30",
                    "v": 0
                }
            ]
    }
  },
  computed: {
  },
  // async mounted() {
  //   this.posts = await api.getPosts();
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.post-card {
  border: solid 1px black;
  width: 900px;
  margin: auto;
  background: #ffffff;
  padding: 10px;
  border-radius: 10px;
  margin: 20px auto;
  max-width: 800px;
  color: #444;
}

.interact {
  display: inline-flex;
  margin-right: 100%;
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
  opacity: 0.9;
  &:hover {
    opacity: 1.0;
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

  background: 50% 100% / 50% 50% no-repeat
              radial-gradient(ellipse at bottom, #fff, transparent, transparent);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: reveal 4.0s ease-in-out forwards 0.2s,
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
</style>
