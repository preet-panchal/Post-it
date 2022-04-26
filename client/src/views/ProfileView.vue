<template>
    <div class="profile">
        <h1 v-if="!this.cookies.get('userid')">Log in to see your posts and to create new posts!</h1>
        <div v-if="!this.cookies.get('userid')" class="buttons">
			<div class="grid">
			<figure class="image-effect" @click="redirectToLogIn()">
				<img src="../assets/log-in.jpeg" alt="img02"/>
				<figcaption>
					<h2><span>LOG IN</span></h2>
					<p>Start posting again! <br>LOG IN NOW</p>
					<a href="#">View more</a>
				</figcaption>			
			</figure>
			<figure class="image-effect" @click="redirectToRegister()">
				<img src="../assets/sign-up.jpeg" alt="img14"/>
				<figcaption>
					<h2><span>SIGN UP</span></h2>
					<p>Make your first post! <br>SIGN UP NOW</p>
					<a href="#">View more</a>
				</figcaption>			
			</figure>
			</div>
        </div>

        <ProfilePage v-if="this.cookies.get('userid')"/>
    </div>
</template>

<script>
import ProfilePage from '../components/ProfilePage.vue';
import { useCookies } from "vue3-cookies";

export default {
    setup() {
		const { cookies } = useCookies();
		return { cookies };
    },
    name: "ProfileView",
    components: {
		ProfilePage
    },
    data() {
        return {
        }
    },
    methods: {
        redirectToRegister() {
            this.$router.push({ path: '/register' });
        },
        redirectToLogIn() {
            this.$router.push({ path: '/login' });
        },
    }
};
</script>


<style lang="scss" scoped>

.profile {
	margin-bottom: 50px;
}

.buttons {
	margin: auto;
}

.grid {
	position: relative;
	margin: 0 auto;
	padding: 1em 0 4em;
	max-width: 1000px;
	list-style: none;
	text-align: center;
}

/* Common style */
.grid figure {
	position: relative;
	float: left;
	overflow: hidden;
	margin: 10px 1%;
	min-width: 320px;
	max-width: 480px;
	max-height: 360px;
	width: 48%;
	background: #3085a3;
	text-align: center;
	cursor: pointer;
}

.grid figure img {
	position: relative;
	display: block;
	min-height: 100%;
	max-width: 100%;
	opacity: 0.8;
}

.grid figure figcaption {
	padding: 2em;
	color: #fbd758;
	text-transform: uppercase;
	font-size: 22pt;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
}

.grid figure figcaption::before,
.grid figure figcaption::after {
	pointer-events: none;
}

.grid figure figcaption,
.grid figure figcaption > a {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

/* Anchor will cover the whole item by default */
/* For some effects it will show as a button */
.grid figure figcaption > a {
	z-index: 1000;
	text-indent: 200%;
	white-space: nowrap;
	font-size: 0;
	opacity: 0;
}

.grid figure h2 {
	word-spacing: -0.15em;
	font-weight: 300;
}

.grid figure h2 span {
	font-weight: 800;
}

.grid figure h2,
.grid figure p {
	margin: 0;
}

.grid figure p {
	letter-spacing: 1px;
	font-size: 68.5%;
}

/*---------------*/
/***** Sadie *****/
/*---------------*/
figure.image-effect figcaption::before {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: -webkit-linear-gradient(top, rgba(72,76,97,0) 0%, rgba(72,76,97,0.8) 75%);
	background: linear-gradient(to bottom, rgba(72,76,97,0) 0%, rgba(72,76,97,0.8) 75%);
	content: '';
	opacity: 0;
	-webkit-transform: translate3d(0,50%,0);
	transform: translate3d(0,50%,0);
}

figure.image-effect h2 {
	position: absolute;
	top: 50%;
	left: 0;
	width: 100%;
	color: #fff;
	-webkit-transition: -webkit-transform 0.35s, color 0.35s;
	transition: transform 0.35s, color 0.35s;
	-webkit-transform: translate3d(0,-50%,0);
	transform: translate3d(0,-50%,0);
}

figure.image-effect figcaption::before,
figure.image-effect p {
	-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
	transition: opacity 0.35s, transform 0.35s;
}

figure.image-effect p {
	position: absolute;
	bottom: 0;
	left: 0;
	padding: 2em;
	width: 100%;
	opacity: 0;
	-webkit-transform: translate3d(0,10px,0);
	transform: translate3d(0,10px,0);
}

figure.image-effect:hover h2 {
	color: #fff;
	-webkit-transform: translate3d(0,-50%,0) translate3d(0,-40px,0);
	transform: translate3d(0,-50%,0) translate3d(0,-40px,0);
}

figure.image-effect:hover figcaption::before ,
figure.image-effect:hover p {
	opacity: 1;
	-webkit-transform: translate3d(0,0,0);
	transform: translate3d(0,0,0);
}
</style>