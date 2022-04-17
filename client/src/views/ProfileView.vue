<template>
    <div class="profile">
        <transition name="error">
            <ErrorPopup v-if="failure" msg="Error: Title must be unique and body cannot be empty!"/>
        </transition>
        <transition name="success">
            <SuccessPopup v-if="success" msg="Success: Your post went through!"/>
        </transition>
        <transition name="success">
            <SuccessPopup v-if="postDeleted" msg="Success: Your post has been deleted!"/>
        </transition>
        <h1>Log in to see your posts and to create new posts!</h1>
        <div class="dashboard tabs is-toggle is is-centered is-halfwidth is-large">
            <ul>
                <li :class="{ active: isDashboardHidden }">
                <a v-on:click="showDashboard" class="option">
                    <span class="icon"><i class="fas fa-user" aria-hidden="true"></i></span>
                    <span class="option">Dashboard</span>
                </a>
                </li>
                <li :class="{ active: isCreateHidden }">
                <a v-on:click="showCreate" class="option">
                    <span class="icon"><i class="fas fa-pen-to-square" aria-hidden="true"></i></span>
                    <span class="option">Create</span>
                </a>
                </li>
                <li :class="{ active: isMyPosts }">
                <a v-on:click="showCreate" class="option">
                    <span class="icon"><i class="fa-solid fa-table-cells" aria-hidden="true"></i></span>
                    <span class="option">My Posts</span>
                </a>
                </li>
                <li :class="{ active: isAnalyticsHidden }">
                <a v-on:click="showAnalytics" class="option">
                    <span class="icon"><i class="fas fa-chart-line" aria-hidden="true"></i></span>
                    <span class="option">Analytics</span>
                </a>
                </li>
            </ul>
        </div>
  
        <div v-if="isDashboardHidden" class="content">
            <h1>Dashboard</h1>
            <strong>Your posts show up here.</strong>
            <!-- <div v-for="post in usersPosts" :key="post.postid" class="post-card">
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
                    <i class="fa-solid fa-chevron-up upvote"></i>
                    <p class="views">{{post.upvotes}}</p>
                    <button><i class="fa-solid fa-chevron-down btn"></i></button>
                    <p class="views">{{post.downvotes}}</p>
                    <button @click.prevent="deletePost(post._id)"><i class="fa-solid fa-x x"></i></button>
                </div>
            </div> -->
            <div v-for="post in usersPosts" :key="post._id" class="post-card">
              <div class="wrapper">
                <div class="blog_post">
                  <div class="container_copy">
                    <h3>post.date • {{post.author}}</h3>
                    <h1>{{post.title}}</h1>
                    <p>{{post.body}}</p>
                  </div>
                  <div class="interact">
                    <i class="fa-solid fa-chevron-up vote"></i>
                    <p class="views">{{post.upvotes}}</p>
                    <i class="fa-solid fa-chevron-down vote"></i>
                    <p class="views">{{post.downvotes}}</p>
                    <i class="fa-solid fa-trash trash"></i>
                  </div>
                </div>
              </div>
              <!-- <div class="wrapper">
                <div class="blog_post">
                  <div class="container_copy">
                    <h3>12 January 2019</h3>
                    <h1>CSS Positioning</h1>
                    <p>The position property specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky).</p>
                  </div>
                </div>
              </div> -->
            </div>

        </div>
        <form v-if="isCreateHidden" class="content">
            <strong>You can create posts here.</strong>
            <div class="title">
                <p>Post Title:</p>
                <input id="post-title" v-model="title" placeholder="Title">
            </div>
            <div class="textArea">
                <p>Post Body:</p>
                <textarea id="post-body" v-model="body" placeholder="Post Body"></textarea>
            </div>
            <button class="button" @click.prevent="createPost">Post-It!</button>
        </form>
        <div v-if="isAnalyticsHidden" class="content">
            <h1>Anayltics</h1>
            <strong>Here are your analytics.</strong>
        </div>
    </div>
</template>

<script>
import ErrorPopup from '../components/ErrorPopup.vue'
import SuccessPopup from '../components/SuccessPopup.vue'
import { api } from '../apis/api';

export default {
    name: "ProfileView",
    components: {
        ErrorPopup,
        SuccessPopup
    },
    data() {
        return {
            isHidden: false,
            isDashboardHidden: true,
            isCreateHidden: false,
            isAnalyticsHidden: false,
            usersPosts: [
                            {
                                "_id": "6258a6f7303e638a4ec62df9",
                                "title": "Test1",
                                "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
                        ],
            title: "",
            body: "",
            user: [],
            success: false,
            failure: false,
            postDeleted: false
        }
    },
    methods: {
        async showDashboard() {
            this.isDashboardHidden = true;
            this.isCreateHidden = false;
            this.isAnalyticsHidden = false;
            this.usersPosts = await api.getPostsByUser('6257397b5d0e39067499ad30');
        },
        showCreate() {
            this.isDashboardHidden = false;
            this.isCreateHidden = true;
            this.isAnalyticsHidden = false;
        },
        showAnalytics() {
            this.isDashboardHidden = false;
            this.isCreateHidden = false
            this.isAnalyticsHidden = true;
        },
        async createPost() {
            var payload = {title: this.title, body: this.body, upvotes: 0, downvotes: 0, author: this.user[0].firstName + " " + this.user[0].lastName, userid: '6257397b5d0e39067499ad30'};
            try {
                await api.createPost(payload);
                this.title = "";
                this.body = "";
                this.success = true;
                setTimeout(() => this.success = false, 2000);
            } catch (e) {
                console.log(e);
                this.failure = true;
                setTimeout(() => this.failure = false, 2000);
            }
        },
        async deletePost(postid) {
            try {
                await api.deletePost(postid);
                this.postDeleted = true;
                setTimeout(() => this.postDeleted = false, 2000);
            } catch (e) {
                console.log(e);
            }
            this.usersPosts = await api.getPostsByUser('6257397b5d0e39067499ad30');
        }
    },
    async mounted() {
        this.usersPosts = await api.getPostsByUser('6257397b5d0e39067499ad30');
        this.user = await api.getUserById('6257397b5d0e39067499ad30');
    }
};
</script>


<style lang="scss" scoped>

.profile {
  margin-bottom: 50px;
}

.dashboard {
  display: inline-flex;
  font-size: 20px;
}

.option {
  padding-right: 20px;
  padding-left: 20px;
}

.content {
  margin-top: 50px;
}

.textArea {
  padding-bottom: 20px;
  font-size: 25px;
}

textarea {
  width: 800px;
  height: 300px;
}

input {
  width: 400px;
  height: 30px;
}

.post-card {
  // border: solid 1px black;
  // width: 900px;
  margin: auto;
  // background: #ffffff;
  padding: 30px 0px;
  // border-radius: 10px;
  margin: 20px auto;
  margin: auto;
  // max-width: 800px;
  max-width: 900px;
  // color: #444;
}

// ----- testing new postcard

.wrapper {
  height: 100%;
  width: 100%;
}

.blog_post {
  position: relative;
  padding: 3rem 4rem 2rem 4rem;
  background: rgb(245, 245, 245);
  width: 900px;
  border-radius: 10px;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  box-shadow: 1px 1px 2rem rgba(54, 71, 107, 0.5);
}

.container_copy h3 {
  margin: 0 0 1.0rem 0;
  color: rgb(122, 122, 122);
  font-size: 1.25rem;
}

.container_copy h1 {
  margin: 0 0 1rem 0;
  font-size: 2.5rem;
  letter-spacing: 0.5px;
  color: #36476b;
}

.container_copy p {
  margin: 0 0 2.5rem 0;
  font-size: 1.5rem;
  color: #333;
}


// ----

.interact {
  display: inline-flex;
  margin-right: 100%;
}

.interact i {
  padding: 0px 10px 0px 20px;
}

.btn, .views {
  padding: 0px 5px;
}

hr {
  height: 3px;
  background-color: #ccc;
}

.title {
  font-size: 25px;
  padding-top: 15px;
}

.author {
  font-size: 20px;
}

.active {
  background-color: #fbd758;
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


/* enter transitions */
  .error-enter-from {
    opacity: 0;
    transform: translateY(-400px);
  }
  /* .error-enter-to {
    opacity: 1;
    transform: translateY(0);
  } */
  .error-enter-active {
    transition: all 1s ease;
  }
  /* leave transitions */
  /* .error-leave-from {
    opacity: 1;
    transform: translateY(0);
  } */
  .error-leave-to {
    opacity: 0;
    transform: translateY(-400px);
  }
  .error-leave-active {
    transition: all 0.5s ease;
  }


  /* enter transitions */
  .success-enter-from {
    opacity: 0;
    transform: translateY(-400px);
  }
  /* .success-enter-to {
    opacity: 1;
    transform: translateY(0);
  } */
  .success-enter-active {
    transition: all 1s ease;
  }
  /* leave transitions */
  /* .success-leave-from {
    opacity: 1;
    transform: translateY(0);
  } */
  .success-leave-to {
    opacity: 0;
    transform: translateY(-400px);
  }
  .success-leave-active {
    transition: all 0.5s ease;
  }
</style>