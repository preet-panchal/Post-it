<template>
  <div class="app-wrapper">
    <div class="app" >
      <AppNavigation/>
      <router-view />
      <AppFooter/>
    </div>
  </div>
</template>

<script>
import AppNavigation from './components/AppNavigation.vue'
import AppFooter from './components/AppFooter.vue'
//import createStore from './store/index'

export default {
  name: 'App',
  components: {
    AppNavigation,
    AppFooter
  }
}
</script>

<style lang="scss">
* {
    scroll-behavior: smooth;
}

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

h1 {
    text-align: center;
    font-size: 32px;
    color: #303030;
    margin-bottom: 30px;
    margin-right: 20px;
    margin-top: 3rem;
    @media (min-width: 900px) {
        font-size: 40px;
    }
}
</style>
