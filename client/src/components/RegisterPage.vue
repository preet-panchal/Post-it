<template>
  <div class="form-wrap">
    <transition name="error">
      <ErrorPopup v-if="failure" :msg="errorMsg"/>
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
            <i class="fas fa-birthday-cake"></i>
            <input v-model="dateOfBirth" type="date">
        </div>
        <div class="input">
            <i class="fas fa-user"></i>
            <input v-model="userName" type="text" placeholder="Username" />
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
      userName: "",
      dateOfBirth: "",
      email: "",
      password: "",
      success: false,
      failure: false,
      error: null,
      errorMsg: "",
      users: []
    };
  },
  methods: {
    registerUser: async function() {
      var payload = {firstName: this.firstName, lastName: this.lastName, userName: this.userName, dateOfBirth: this.dateOfBirth, email: this.email, password: this.password};
      try {
        await api.createUser(payload);
        this.firstName = "";
        this.lastName = "";
        this.userName = "";
        this.dateOfBirth= "";
        this.email = "";
        this.password = "";
        this.$router.push({ path: '/login' });
        this.success = true;
        setTimeout(() => this.success = false, 2000);
      } catch (e) {
        this.errorMsg = 'ERROR: ' + e.response.data.error + '!';
        this.failure = true;
        setTimeout(() => this.failure = false, 2000);
      }
    }
  },
  async mounted() {
    this.users = await api.getUsers();
  }
};
</script>

<style scoped lang="scss">
input {
  &:focus {
    transition: all 0.3s ease-out;
    box-shadow: 3px 3px 2rem rgba(54, 71, 107, 0.5);
  }
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