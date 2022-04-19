<template>
  <div class="form-wrap">
    <transition name="error">
      <ErrorPopup v-if="failure" msg="Error: FirstName and LastName must be alphabets, Password must be minimum 8 characters and Email must be valid!"/>
    </transition>
    <transition name="success">
      <SuccessPopup v-if="success" msg="Success: Your account is registered!"/>
    </transition>
    <form class="register">
        <p class="login-register">
            Already have an account?
            <router-link class="router-link forgot-password" to="/login">Login</router-link>
        </p>
        <h2>Create Your Post-It Account</h2>
        <div class="input">
            <i class="fas fa-user"></i>
            <input v-model="firstName" type="text" placeholder="First Name"/>
        </div>
        <div class="input">
            <i class="fas fa-user"></i>
            <input v-model="lastName" type="text" placeholder="Last Name" />
        </div>
        <div class="input">
            <i class="fas fa-envelope"></i>
            <input v-model="email" type="text" placeholder="Email"/>
        </div>
        <div class="input">
            <i class="fas fa-lock"></i>
            <input v-model="password" type="password" placeholder="Password" />
        </div>
        <!-- <div v-show="error" class="error">{{ this.errorMsg }}</div> -->
        <button class="button is-medium" @click.prevent="registerUser">Sign Up</button>
        <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import ErrorPopup from './ErrorPopup.vue'
import SuccessPopup from './SuccessPopup.vue'
import { api } from '../apis/api';

export default {
  name: "RegisterPage",
  components: {
    ErrorPopup,
    SuccessPopup
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      success: false,
      failure: false,
      users: []
    };
  },
  methods: {
    registerUser: async function() {
      var payload = {firstName: this.firstName, lastName: this.lastName, email: this.email, password: this.password};
      try {
        await api.createUser(payload);
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.password = "";
        this.success = true;
        setTimeout(() => this.success = false, 2000);
      } catch (e) {
        console.log(e);
        this.failure = true;
        setTimeout(() => this.failure = false, 10000);
      }
    }
  },
  async mounted() {
    this.users = await api.getUsers();
  }
};
</script>

<style scoped lang="scss">
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