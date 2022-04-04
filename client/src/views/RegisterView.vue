<template>
    <RegisterPage />
</template>

<script>
import RegisterPage from '@/components/RegisterPage.vue'

export default {
  name: "RegisterView",
  components: {
      RegisterPage
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