<template>
    <div class="profile">
        <h1 v-if="!this.cookies.get('userid')">Log in to see your posts and to create new posts!</h1>
        <div v-if="!this.cookies.get('userid')" class="buttons">
            <button class="button is-medium" @click="redirectToRegister()">Sign Up</button>
            <button class="button is-medium" @click="redirectToLogIn()">Log In</button>
        </div>
        <ProfilePage v-if="this.cookies.get('userid')"/>
    </div>
</template>

<script>
import ProfilePage from '../components/ProfilePage.vue';
import { useCookies } from "vue3-cookies";

export default {
    setup() {
      const { cookies } = useCookies();
      return { cookies };
    },
    name: "ProfileView",
    components: {
      ProfilePage
    },
    data() {
        return {
        }
    },
    methods: {
        redirectToRegister() {
            this.$router.push({ path: '/register' });
        },
        redirectToLogIn() {
            this.$router.push({ path: '/login' });
        },
    },
    async mounted() {
    }
};
</script>


<style lang="scss" scoped>

.profile {
  margin-bottom: 50px;
}
.buttons {
  margin: auto;
}
</style>