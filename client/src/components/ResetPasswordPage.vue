<template>
  <div class="reset-password">
    <transition name="error">
      <ErrorPopup v-if="failure" msg="Error: Email is not associated with an account. Please create an account!"/>
    </transition>
    <transition name="success">
      <SuccessPopup v-if="success" msg="Success: An email was sent to your account to reset your password!"/>
    </transition>
    <div class="form-wrap">
      <form class="reset">
        <p class="login-register">
          Back to
          <router-link class="router-link forgot-password" to="/login">Login</router-link>
        </p>
        <h2>Reset Password</h2>
        <p class="reset-message">Enter your email to reset your password</p>
        <div class="input">
            <i class="fas fa-envelope"></i>
            <input v-model="email" type="text" placeholder="Email"/>
        </div>
        <button class="button is-medium" @click.prevent="resetPassword">Reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import ErrorPopup from './ErrorPopup.vue'
import SuccessPopup from './SuccessPopup.vue'
import { api } from '../apis/api';

export default {
  name: "ResetPasswordPage",
  components: {
    ErrorPopup,
    SuccessPopup
  },
  data() {
    return {
      users: [],
      email: "",
      success: false,
      failure: false
    };
  },
  methods: {
    resetPassword: function() {
      for(var i=0; i < this.users.length; i++) {
        if(this.users[i].email == this.email) {
          this.success = true;
          return setTimeout(() => this.success = false, 2000);
        }
      }
      this.failure = true;
      setTimeout(() => this.failure = false, 2000);
    }
  },
  async mounted() {
    this.users = await api.getUsers();
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