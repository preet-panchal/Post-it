<template>
  <div class="form-wrap">
    <form class="register">
        <p class="login-register">
            Already have an account?
            <router-link class="router-link forgot-password" to="/login">Login</router-link>
        </p>
        <h2>Create Your Post-It Account</h2>
        <div class="input">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="First Name"/>
        </div>
        <div class="input">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Last Name" />
        </div>
        <div class="input">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Username"/>
        </div>
        <div class="input">
            <i class="fas fa-envelope"></i>
            <input type="text" placeholder="Email"/>
        </div>
        <div class="input">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
        </div>
        <!-- <div v-show="error" class="error">{{ this.errorMsg }}</div> -->
        <button class="button" @click.prevent="register">Sign Up</button>
        <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
/* import email from "../assets/icons/envelope-regular.svg";
import password from "../assets/icons/lock-alt-solid.svg";
import user from "../assets/icons/user-alt-light.svg"; */

export default {
  name: "RegisterView",
};
</script>

<style lang="scss" scoped>
.register {
  h2 {
    max-width: 350px;
  }
}
</style>