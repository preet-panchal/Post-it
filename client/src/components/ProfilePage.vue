<template>
    <div class="profile">
        <transition name="error">
            <ErrorPopup v-if="failure" msg="Error: Title must be unique and body cannot be empty!"/>
        </transition>
        <transition name="success">
            <SuccessPopup v-if="success" msg="Success: Your post went through!"/>
        </transition>
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
                <li>
                <a @click="logoutUser()" class="option">
                    <span class="icon"><i class="fa-solid fa-arrow-right-to-bracket"></i></span>
                    <span class="option">Logout</span>
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
              <div class="post-card">
                <div class="wrapper">
                  <div class="blog_post">
                    <div class="title">
                        <p>Post Title:</p>
                        <input id="post-title" v-model="title" placeholder=" Post Title: ">
                    </div>
                    <div class="textArea">
                        <p>Post Body:</p>
                        <textarea id="post-body" v-model="body" placeholder=" Post Body: "></textarea>
                    </div>
                    <button class="button" @click.prevent="createPost">Post-It!</button>
                  </div>
                </div>
              </div>
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
import createStore from '../store/index'
import { useCookies } from "vue3-cookies";

export default {
    setup() {
      const { cookies } = useCookies();
      return { cookies };
    },
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
          this.usersPosts = await api.getPostsByUser(this.cookies.get('userid'));
          //this.usersPosts = await api.getPostsByUser('625f0ce7a146284f3bdb0209');
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
              userid: this.cookies.get('userid')
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
        async logoutUser() {
            try {
                await api.logoutUser();
                createStore.commit('change')
                this.$router.push({ path: '/login' });
            } catch (err) {
                console.log(err);
            }
        }
    },
    async mounted() {
        this.user = await api.getUserById(this.cookies.get('userid'));
        console.log(this.cookies.get('userid'));
    }
};
</script>

<style lang="scss" scoped>
.profile {
  margin-top: 50px;
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

.post-card {
  padding: 30px 0px;
  margin: 20px auto;
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

.content {
  margin-top: 50px;
}

.content h1 {
  padding-left: 17px;
}

.content p {
  color: #36476b;
}

input {
  font-family:'Poppins';
  font-size: 18px; 
  width: 800px;
  height: 40px;

  &:focus {
    transition: all 0.3s ease-out;
    box-shadow: 3px 3px 2rem rgba(54, 71, 107, 0.5);
  }
}

.textArea, .button {
  font-weight: bold;
}

.textArea {
  padding-bottom: 20px;
  font-size: 25px;
}

textarea {
  font-family:'Poppins';
  font-size: 18px; 
  width: 800px;
  height: 300px;

  &:focus {
    transition: all 0.3s ease-out;
    box-shadow: 3px 3px 2rem rgba(54, 71, 107, 0.5);
  }
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

  .error-enter-active {
    transition: all 1s ease;
  }

  /* leave transitions */
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

  .success-enter-active {
    transition: all 1s ease;
  }

  /* leave transitions */
  .success-leave-to {
    opacity: 0;
    transform: translateY(-400px);
  }
  
  .success-leave-active {
    transition: all 0.5s ease;
  }
</style>