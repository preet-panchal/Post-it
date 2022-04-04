<template>
  <div class="app-wrapper">
    <div class="app" >
      <AppNavigation/>
      <router-view />
      <!-- <Footer v-if="!navigation" /> -->
    </div>
  </div>
</template>

<script>
import AppNavigation from './components/AppNavigation.vue'

export default {
  name: 'App',
  components: {
    AppNavigation
  }
}
</script>

<style lang="scss">
#app {
  font-family:'Poppins', 'Open Sans', sans-serif, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #fbd758;

    &.router-link-exact-active {
      color: #ffffff;
      background-color: #36476b;
    }
  }
}
</style>
