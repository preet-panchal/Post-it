<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link class="navbar-item header" to="/"><img src="../assets/logo.png">/Post-It</router-link>

            <a role="button" class="navbar-burger" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start navbar-item">
                <router-link class="route" to="/">Home</router-link>
                <router-link class="route" to="/profile">Profile</router-link>
                <router-link class="route" to="/about">About</router-link>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <button class="button is-medium" @click="redirectToRegister()">Sign Up</button>
                        <button class="button is-medium" @click="redirectToLogIn()">Log In</button>
                        <button class="button is-medium" @click="redirectToLogIn()">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    name: 'AppNavigation',
    methods: {
        redirectToRegister() {
            this.$router.push({ path: '/register' });
        },
        redirectToLogIn() {
            this.$router.push({ path: '/login' });
        }
    }
}
</script>


<style scoped lang="scss">
.navbar, .navbar-menu {
    background-color: #36476b;
    z-index: 4;
}
.navbar-item, .navbar-burger {
    color: #fbd758;
    font-size: 20px;
    &:hover {
        color: #ffffff;
    }
}

.route {
    padding: 0px 20px;
    &:hover {
        color: #ffffff;
    }
}

.button {
    transition: 0.5s;
    background-size: 200% auto;
    /* background-color: #fbd758;
    color: #36476b; */
    background-image: linear-gradient(to right, #fbd758 0%, #36476b 100%, #fbd758 0%);
    &:hover {
        /* background-color: #ffffff;
        color: #36476b; */
        background-position: right center;
    }
}

.header {
    font-weight: 600;
    font-size: 32px;
    text-decoration: none;
}

img {
    max-height: 100%;
    width: 75px;
}
</style>