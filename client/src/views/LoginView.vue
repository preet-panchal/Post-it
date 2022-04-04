<template>
  <div class="form-wrap">
    <form class="login">
      <p class="login-register">
        Don't have an account?
        <router-link class="router-link forgot-password" to="/register">Register</router-link>
      </p>
      <h2>Login to FireBlogs</h2>
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
      <button class="button" @click.prevent="signIn">Sign In</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>

export default {
  name: "LoginView",
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

<style lang="scss">
.form-wrap {
  overflow: hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 900px) {
    width: 100%;
  }
  .login-register {
    margin-bottom: 32px;
    .router-link {
      color: #000;
    }
  }
  form {
    padding: 0 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    @media (min-width: 900px) {
      padding: 0 50px;
    }
    h2 {
      text-align: center;
      font-size: 32px;
      color: #303030;
      margin-bottom: 40px;
      @media (min-width: 900px) {
        font-size: 40px;
      }
    }
    .forgot-password {
      text-decoration: none;
      color: #000;
      cursor: pointer;
      font-size: 16px;
      margin: 16px 0 32px;
      border-bottom: 1px solid transparent;
      transition: 0.5s ease all;
      &:hover {
        border-color: #303030;
      }
    }
    .angle {
      display: none;
      position: absolute;
      background-color: #fff;
      transform: rotateZ(3deg);
      width: 60px;
      right: -30px;
      height: 101%;
      @media (min-width: 900px) {
        display: initial;
      }
    }
  }
  .background {
    display: none;
    flex: 2;
    background-size: cover;
    background-image: url("../assets/background.png");
    width: 100%;
    height: 100%;
    @media (min-width: 900px) {
      display: initial;
    }
  }
}

.input {
    width: 100%;
    max-width: 350px;
    padding: 15px;
    background-color: #f2f7f6;
    margin-bottom: 10px;
    input {
        margin-left: 5px;
        width: 90%;
        border: none;
        background-color: #f2f7f6;
        &:focus {
            outline: none;
        }
    }
}

.button {
    background-color: #fbd758;
    color: #36476b;
    &:hover {
        background-color: #36476b;
        color: #fbd758;
    }
}
</style>