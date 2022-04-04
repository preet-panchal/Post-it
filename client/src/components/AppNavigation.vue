<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link class="navbar-item" to="/">Post-It</router-link>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start navbar-item">
                <router-link class="route" to="/">Home</router-link>
                <router-link class="route" to="/posts">Posts</router-link>
                <router-link class="route" to="/about">About</router-link>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <button class="button is-medium">Sign Up</button>
                        <button class="button is-medium">Log In</button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    name: 'AppNavigation',
}
</script>


<style scoped lang="scss">
.navbar, .navbar-menu {
    background-color: #36476b;
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
    background-color: #fbd758;
    color: #36476b;
    &:hover {
        background-color: #ffffff;
        color: #36476b;
    }
}

</style>