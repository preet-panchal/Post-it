<template>
  <div class="home">
    <div class="header">
      <h1>Trending Posts <i class="fa-solid fa-arrow-trend-up fa-md"></i></h1>    
    </div>
    <div v-for="user in getPosts" :key="user.userid">
      <div v-for="post in user.posts" :key="post.postid" class="post-card">
        <div class="title">
          <p>{{post.title}}</p>
        </div>
        <hr>
        <div class="author">
          <p>{{user.firstName}} {{user.lastName}}</p>
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
  </div>
</template>

<script>
//import axios from 'axios';

export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  data() {
    return {
      users: [
        {
          userid: "1",
          firstName: "first1",
          lastName: "last1",
          email: "first@gmail.com",
          posts: [
            {
              postid: "11",
              title: "post1",
              body: "post1",
              upvotes: 500,
              downvotes: 2
            }
          ]
        },
        {
          userid: "2",
          firstName: "first2",
          lastName: "last2",
          email: "second@gmail.com",
          posts: [
            {
              postid: "21",
              title: "post2",
              body: "post2",
              upvotes: 10,
              downvotes: 0
            },
            {
              postid: "22",
              title: "post22",
              body: "post22",
              upvotes: 5,
              downvotes: 20
            }
          ]
        },
        {
          userid: "3",
          firstName: "first3",
          lastName: "last3",
          email: "third@gmail.com",
          posts: [
            
          ]
        }
      ]
    }
  },
  computed: {
    getPosts: function () {
      var temp = [];
      for(var i=0; i<this.users.length; i++) {
        if(this.users[i].posts.length > 0) {
          temp.push(this.users[i]);
        }
      }
      return temp;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.post-card {
  border: solid 1px black;
  width: 900px;
  margin: auto;
}

.post-card {
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

</style>
