<template>
    <ResetPasswordPage />
</template>

<script>
import ResetPasswordPage from '@/components/ResetPasswordPage.vue'
export default {
  name: "ResetPasswordView",
  components: {
      ResetPasswordPage
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