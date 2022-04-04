<template>
  <div class="form-wrap">
    <form class="register">
      <p class="login-register">
        Already have an account?
        <router-link class="router-link" to="/login">Login</router-link>
      </p>
      <h2>Create Your FireBlog Account</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="First Name" v-model="firstName" />
        </div>
        <div class="input">
          <input type="text" placeholder="Last Name" v-model="lastName" />
        </div>
        <div class="input">
          <input type="text" placeholder="Username" v-model="username" />
        </div>
        <div class="input">
          <input type="text" placeholder="Email" v-model="email" />
          <email class="icon" />
        </div>
        <div class="input">
          <input type="password" placeholder="Password" v-model="password" />
          <password class="icon" />
        </div>
        <!-- <div v-show="error" class="error">{{ this.errorMsg }}</div> -->
      </div>
      <!-- <button @click.prevent="register">Sign Up</button> -->
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>

export default {
  name: "RegisterView",
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      error: null,
      errorMsg: "",
    };
  }
};
</script>

<style lang="scss" scoped>
.register {
  h2 {
    max-width: 350px;
  }
}
</style>