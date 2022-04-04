<template>
  <LoginPage />
</template>

<script>
import LoginPage from '@/components/LoginPage.vue'

export default {
  name: "LoginView",
  components: {
    LoginPage
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
    margin-bottom: 20px;
    .router-link {
      color: #000;
    }
  }
  form {
    font-size: 20px;
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
      margin-bottom: 20px;
      @media (min-width: 900px) {
        font-size: 40px;
      }
    }
    .forgot-password {
      text-decoration: none;
      color: #000;
      cursor: pointer;
      font-size: 20px;
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
    background-image: url("../assets/test.jpg");
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
    margin-bottom: 15px;
    max-height: 50px;
    height: 100%;
    input {
        margin-left: 5px;
        font-size: 20px;
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