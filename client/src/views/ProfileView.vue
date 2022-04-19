<template>
    <div class="profile">
        <transition name="error">
            <ErrorPopup v-if="failure" msg="Error: Title must be unique and body cannot be empty!"/>
        </transition>
        <transition name="success">
            <SuccessPopup v-if="success" msg="Success: Your post went through!"/>
        </transition>
        <h1>Log in to see your posts and to create new posts!</h1>
        <div class="dashboard tabs is-toggle is is-centered is-halfwidth is-large">
            <ul>
                <li :class="{ active: isDashboardShown }">
                <a v-on:click="showDashboard" class="option">
                    <span class="icon"><i class="fas fa-user" aria-hidden="true"></i></span>
                    <span class="option">Dashboard</span>
                </a>
                </li>
                <li :class="{ active: isCreateShown }">
                <a v-on:click="showCreate" class="option">
                    <span class="icon"><i class="fas fa-pen-to-square" aria-hidden="true"></i></span>
                    <span class="option">Create</span>
                </a>
                </li>
                <li :class="{ active: isMyPostsShown }">
                <a v-on:click="showMyPosts" class="option">
                    <span class="icon"><i class="fa-solid fa-table-cells" aria-hidden="true"></i></span>
                    <span class="option">My Posts</span>
                </a>
                </li>
                <li :class="{ active: isAnalyticsShown }">
                <a v-on:click="showAnalytics" class="option">
                    <span class="icon"><i class="fas fa-chart-line" aria-hidden="true"></i></span>
                    <span class="option">Analytics</span>
                </a>
                </li>
            </ul>
        </div>
  
        <div v-if="isDashboardShown" class="content">
            <DashboardPage :user="user"/>
        </div>

        <form v-if="isCreateShown" class="content">
            <h1>Create Post</h1>
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

        <div v-if="isMyPostsShown" class="content">
            <MyPostsPage/>
        </div>

        <div v-if="isAnalyticsShown" class="content">
            <AnalyticsPage :upvotes="0" :downvotes="0"/>
        </div>
    </div>
</template>

<script>
import ErrorPopup from '../components/ErrorPopup.vue'
import SuccessPopup from '../components/SuccessPopup.vue'
import AnalyticsPage from '../components/AnalyticsPage.vue'
import DashboardPage from '../components/DashboardPage.vue'
import MyPostsPage from '../components/MyPostsPage.vue'
import { api } from '../apis/api';

export default {
    name: "ProfileView",
    components: {
        ErrorPopup,
        SuccessPopup,
        AnalyticsPage,
        DashboardPage,
        MyPostsPage
    },
    data() {
        return {
            isMyPostsShown: false,
            isDashboardShown: true,
            isCreateShown: false,
            isAnalyticsShown: false,
            title: "",
            body: "",
            user: [],
            datePosted: "",
            success: false,
            failure: false,
            postDeleted: false
        }
    },
    methods: {
        showDashboard() {
            /* let date = new Date().toLocaleString(); */
            this.isDashboardShown = true;
            this.isCreateShown = false;
            this.isAnalyticsShown = false;
            this.isMyPostsShown = false;
        },
        showCreate() {
            this.isDashboardShown = false;
            this.isCreateShown = true;
            this.isAnalyticsShown = false;
            this.isMyPostsShown = false;
        },
        showAnalytics() {
            this.isDashboardShown = false;
            this.isCreateShown = false
            this.isAnalyticsShown = true;
            this.isMyPostsShown = false;
        },
        async showMyPosts() {
          this.isDashboardShown = false;
          this.isCreateShown = false
          this.isAnalyticsShown = false;
          this.isMyPostsShown = true;
          this.usersPosts = await api.getPostsByUser('625ee1fba09885857b2f8517');
        },
        async createPost() {
            var dateObj = new Date();
            var month = dateObj.getUTCMonth() + 1;
            var day = dateObj.getUTCDate();
            var year = dateObj.getUTCFullYear();
            this.datePosted = month + "/" + day + "/" + year;
            console.log(this.datePosted);
            var payload = {
              title: this.title, 
              body: this.body, 
              datePosted: this.datePosted,
              upvotes: 0, 
              downvotes: 0, 
              author: this.user[0].firstName + " " + this.user[0].lastName, 
              userid: '625ee1fba09885857b2f8517'
            };
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
          this.usersPosts = await api.getPostsByUser('625ee1fba09885857b2f8517');
        }
    },
    async mounted() {
        this.user = await api.getUserById('625ee1fba09885857b2f8517');
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
  color: #36476b;
}

.content {
  margin-top: 50px;
}

.content h1 {
  padding-left: 17px;
}

.textArea, .button {
  font-weight: bold;
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

.btn, .views {
  padding: 0px 5px;
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