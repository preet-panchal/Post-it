<template>
    <div class="content">
        <transition name="success">
            <SuccessPopup v-if="postDeleted" msg="Success: Your post has been deleted!"/>
        </transition>
        <h1>My Posts</h1>
        <strong>Here are your posts.</strong>
        <div v-for="post in usersPosts" :key="post._id" class="post-card">
          <div class="wrapper">
              <div class="blog_post">
                <div class="container_copy">
                  <h3>{{post.datePosted}} • {{post.author}}</h3>
                  <h1>{{post.title}}</h1>
                  <p>{{post.body}}</p>
                </div>
                <div class="interact">
                  <i @click.prevent="this.isUpVoted ? post.upvotes++ : post.upvotes--; updatePost(post._id, 'upVote')" class="fa-solid fa-chevron-up vote"></i>
                  <p class="views">{{post.upvotes}}</p>
                  <i @click.prevent="this.isDownVoted ? post.downvotes++ : post.downvotes--; updatePost(post._id, 'downVote')" class="fa-solid fa-chevron-down vote"></i>
                  <p class="views">{{post.downvotes}}</p>
                  <i @click.prevent="deletePost(post._id)" class="fa-solid fa-trash trash"></i>
                </div>
            </div>
          </div>
        </div>
    </div>
    
</template>

<script>
import SuccessPopup from '../components/SuccessPopup.vue'
import { api } from '../apis/api';
import { useCookies } from "vue3-cookies";

export default {
    setup() {
      const { cookies } = useCookies();
      return { cookies };
    },
    name: 'MyPostsPage',
    components: {
        SuccessPopup
    },
    props: {
        userPosts: Array
    },
    data() {
        return {
            postDeleted: false,
            isUpVoted: false,
            isDownVoted: false,
            upVotes: 0,
            downVotes: 0,
            usersPosts: [
                            /* {
                                "_id": "6258a6f7303e638a4ec62df9",
                                "title": "Test1",
                                "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                "upvotes": 0,
                                "downvotes": 0,
                                "author": "Preet Panchal",
                                "userid": "6257397b5d0e39067499ad30",
                                "v": 0
                            } */
                        ]
        }
    },
    methods: {
        async deletePost(postid) {
          try {
            await api.deletePost(postid);
            this.postDeleted = true;
            setTimeout(() => this.postDeleted = false, 2000);
          } catch (e) {
            console.log(e);
          }
          this.usersPosts = await api.getPostsByUser(this.cookies.get('userid'));
        },
        async updatePost(postid, type) {
          var payload = {
              postid: postid,
              type: type,
              isUpVoted: this.isUpVoted,
              isDownVoted: this.isDownVoted
            };
          if (type === 'upVote') {
            this.isUpVoted = !this.isUpVoted;
            this.isDownVoted = !this.isDownVoted;
          } else if (type === 'downVote') {
            this.isUpVoted = !this.isUpVoted;
            this.isDownVoted = !this.isDownVoted;
          }
          try {
            await api.updatePost(payload);
          } catch (e) {
            console.log(e);
          }
          //this.usersPosts = await api.getPostsByUser('625f0ce7a146284f3bdb0209');
        }
    },
    async mounted() {
        this.usersPosts = await api.getPostsByUser(this.cookies.get('userid'));
    }
}
</script>

<style scoped lang="scss">
.content h1 {
  padding-left: 17px;
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

.interact {
  display: inline-flex;
  margin-right: 100%;
}

.interact i {
  padding: 0px 10px 0px 20px;
}

.vote {
  font-size: 30px;
  &:hover {
    color: rgb(0, 115, 255); 
    cursor: pointer;
  }

  &:focus {
    color: aqua;
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