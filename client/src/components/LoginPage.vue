<template>
  <div class="form-wrap">
    <transition name="error">
      <ErrorPopup v-if="failure" :msg="errorMsg"/>
    </transition>
    <transition name="success">
      <SuccessPopup v-if="success" msg="Success: Your account is logged in!"/>
    </transition>
    <form class="login">
      <p class="login-register">
        Don't have an account?
        <router-link class="router-link forgot-password" to="/register">Register</router-link>
      </p>
      <h2>Login to Post-It</h2>
      <div class="input">
        <i class="fas fa-envelope"></i>
        <input v-model="email"  type="text" placeholder="Email"/>
      </div>
      <div class="input">
        <i class="fas fa-lock"></i>
        <input v-model="password" type="text" placeholder="Password"/>
      </div>
      <div v-show="error" class="error">{{ this.errorMsg }}</div>
      <router-link class="forgot-password" to="/reset-password">Forgot your password?</router-link>
      <button class="button is-medium" @click.prevent="loginUser">Log In</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import ErrorPopup from './ErrorPopup.vue'
import SuccessPopup from './SuccessPopup.vue'
import { api } from '../apis/api';
// preet@panchal.com
// 12345678

export default {
  name: "LoginPage",
  components: {
    ErrorPopup,
    SuccessPopup
  },
  data() {
    return {
      email: "",
      password: "",
      error: null,
      errorMsg: "",
      success: false,
      failure: false,
      users: []
    };
  },
  methods: {
    loginUser: async function() {
      var payload = {email: this.email, password: this.password};
      try {
        await api.loginUser(payload);
/*         this.email = "";
        this.password = ""; */
        this.success = true;
        setTimeout(() => this.success = false, 2000);
      } catch (e) {
        //console.log(e.response.data.error);
        this.errorMsg = 'ERROR: ' + e.response.data.error + '!';
        this.failure = true;
        setTimeout(() => this.failure = false, 2000);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.button {
    transition: 0.5s;
    background-size: 200% auto;
    background-image: linear-gradient(to right, #fbd758 0%, #36476b 100%, #fbd758 0%);
    &:hover {
        background-position: right center;
        color: #ffffff;
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