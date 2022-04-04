<template>
  <div class="form-wrap">
    <form class="login">
      <p class="login-register">
        Don't have an account?
        <router-link class="router-link forgot-password" to="/register">Register</router-link>
      </p>
      <h2>Login to Post-It</h2>
      <div class="input">
        <i class="fas fa-envelope"></i>
        <input type="text" placeholder="Email"/>
      </div>
      <div class="input">
        <i class="fas fa-lock"></i>
        <input type="text" placeholder="Password"/>
      </div>
      <div v-show="error" class="error">{{ this.errorMsg }}</div>
      <router-link class="forgot-password" to="/reset-password">Forgot your password?</router-link>
      <button class="button is-medium" @click.prevent="signIn">Sign In</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      error: null,
      errorMsg: "",
    };
  }
};
</script>
