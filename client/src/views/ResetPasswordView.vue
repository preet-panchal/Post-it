<template>
  <div class="reset-password">
<!--     <Modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal" />
    <Loading v-if="loading" /> -->
    <div class="form-wrap">
      <form class="reset">
        <p class="login-register">
          Back to
          <router-link class="router-link forgot-password" to="/login">Login</router-link>
        </p>
        <h2>Reset Password</h2>
        <p>Forgot your passowrd? Enter your email to reset it</p>
        <div class="input">
            <i class="fas fa-envelope"></i>
            <input type="text" placeholder="Email"/>
        </div>
        <button class="button" @click.prevent="resetPassword">Reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
    <span class="icon">
        <i class="fas fa-home"></i>
    </span>
  </div>
</template>

<script>
import email from "../assets/icons/envelope-regular.svg";
/* import Modal from "../components/Modal";
import Loading from "../components/Loading"; */
export default {
  name: "ResetPasswordView",
  componenets: {
      email
  },
  data() {
    return {
      email: "",
      modalActive: false,
      modalMessage: "",
      loading: null,
    };
  }
};
</script>

<style lang="scss" scoped>
.reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        margin-bottom: 20px;
      }
    }
  }
}

</style>