<template>
    <div>
        <transition name="error">
            <ErrorPopup v-if="failure" msg="Error: Title must be unique and body cannot be empty!"/>
        </transition>
        <transition name="success">
            <SuccessPopup v-if="success" msg="Success: Your post went through!"/>
        </transition>
        <h1>Log in to see your posts and to create new posts!</h1>
        <!-- <div class="dashboard">
            <h3 v-on:click="showDashboard" :class="{ active: isDashboardHidden }" class="option">Dashboard</h3> |
            <h3 v-on:click="showCreate" :class="{ active: isCreateHidden }" class="option">Create</h3> |
            <h3 v-on:click="showAnalytics" :class="{ active: isAnalyticsHidden }" class="option">Analytics</h3>
        </div> -->
        <div class="dashboard tabs is-toggle is is-centered is-halfwidth is-large">
            <ul>
                <li>
                <a>
                    <span class="icon"><i class="fas fa-user" aria-hidden="true"></i></span>
                    <span v-on:click="showDashboard" :class="{ active: isDashboardHidden }" class="option">Dashboard</span>
                </a>
                </li>
                <li>
                <a>
                    <span class="icon"><i class="fas fa-pen-to-square" aria-hidden="true"></i></span>
                    <span v-on:click="showCreate" :class="{ active: isCreateHidden }" class="option">Create</span>
                </a>
                </li>
                <li>
                <a>
                    <span class="icon"><i class="fas fa-chart-line" aria-hidden="true"></i></span>
                    <span v-on:click="showAnalytics" :class="{ active: isAnalyticsHidden }" class="option">Analytics</span>
                </a>
                </li>
            </ul>
        </div>
  
        <div v-if="isDashboardHidden" class="content">
            <h1>Dashboard</h1>
            <strong>Your posts show up here.</strong>
            <div v-for="post in usersPosts" :key="post.postid" class="post-card">
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
                    <button><i class="fa-solid fa-x x"></i></button>
                </div>
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
// import { api } from '../apis/api';

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
            usersPosts: [],
            title: "",
            body: "",
            user: [],
            success: false,
            failure: false
        }
    },
    methods: {
        async showDashboard() {
            this.isDashboardHidden = true;
            this.isCreateHidden = false;
            this.isAnalyticsHidden = false;
            // this.usersPosts = await api.getPostsByUser('6257397b5d0e39067499ad30');
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
        /*async createPost() {
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
        }*/
    },
    /*async mounted() {
        this.usersPosts = await api.getPostsByUser('6257397b5d0e39067499ad30');
        this.user = await api.getUserById('6257397b5d0e39067499ad30');
    }*/
};
</script>


<style lang="scss" scoped>

.dashboard {
    display: inline-flex;
    font-size: 20px;
}

.option {
    padding-right: 20px;
    padding-left: 20px;
    cursor: pointer;
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
    color: #fbd758;
}

.x {
  color: red;
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