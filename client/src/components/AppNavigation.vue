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
            <div class="navbar-end navbar-item">
                <router-link class="route" to="/">/Home</router-link>
                <router-link class="route" to="/profile">/Profile</router-link>
                <router-link class="route" to="/about">/About</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
import { useCookies } from "vue3-cookies";
import { api } from '../apis/api';
import createStore from '../store/index';

export default {
    setup() {
        const { cookies } = useCookies();
/*         createStore.subscribe((mutation, state) => {
            if (mutation.type == "change") {
                this.testing = true;
            }
            console.log(mutation)
            console.log(state)
        }) */
        return { cookies };
        },
    name: 'AppNavigation',
    data() {
        return {
            isLoggedIn: createStore.state.isLoggedIn,
            testing: false
        };
    },
    methods: {
        redirectToRegister() {
            this.$router.push({ path: '/register' });
        },
        redirectToLogIn() {
            this.$router.push({ path: '/login' });
        },
        async logoutUser() {
            try {
                await api.logoutUser();
                createStore.commit('change')
                this.$router.go();
                this.$router.push({ path: '/login' });
            } catch (err) {
                console.log(err);
            }
        }
    },
    mounted() {
        /* if (createStore.state.isLoggedIn == false) {
            this.$router.push({ path: '/login' });
        } */
        console.log(createStore.state.isLoggedIn);
        console.log(createStore.getters.getisLoggedIn)
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