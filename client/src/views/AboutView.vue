<template>
  <div>
    <section class="hero is-danger is-fullheight">
    <div class="hero-body">
      <div class="has-text-centered">
        <h1 class="header-1 overlay">
          Have something on your mind?
        </h1>
        <h2 class="subtitle header-2 has-text-warning animate-character">
          /Post-It. 
        </h2>
      </div>
    </div>
    </section>

    <section class="about-content columns is-vcentered is-justify-content-space-evenly p-5">
      <div class="column is-one-third">
        <p class="title is-2 is-spaced">
          Post your story
        </p>
        <p class="subtitle is-6">
          The Post-It platform is a place to allow complete freedom of speech and to speak whatever is on your mind. We want to read your stories. 
        </p>
      </div>
      <div class="column is-half">
        <img src="../assets/inspiration.jpeg" alt="Banner">
      </div>
    </section>

    <section class="columns is-vcentered is-justify-content-space-evenly p-5">
      <div class="column is-half">
        <img src="../assets/positivity.jpeg" alt="Banner">
      </div>
      <div class="column is-one-third">
        <p class="title is-2 is-spaced">
          Good vibes only 
        </p>
        <p class="subtitle is-6">
          Post-It is all about thinking positive, staying positive, and spreading positivity. An example of good vibes is a happy person smiling and having a positive effect on those around them.
        </p>
      </div>
    </section>

    <section class="columns is-vcentered is-justify-content-space-evenly p-5">
      <div class="column is-one-third">
        <p class="title is-2 is-spaced">
          Know your audience
        </p>
        <p class="subtitle is-6">
          Find out which posts are a hit with Post-It’s built-in analytics. You will get to see what your audience most interested in.
        </p>
      </div>
      <div class="column is-half">
        <img src="../assets/audience.jpeg" alt="Banner">
      </div>
    </section>

    <section class="columns is-vcentered is-justify-content-space-evenly p-5">
      <div class="column is-half">
        <img src="../assets/memories.jpeg" alt="Banner">
      </div>
      <div class="column is-one-third">
        <p class="title is-2 is-spaced">
          Save your memories
        </p>
        <p class="subtitle is-6">
          Save the moments that matter. Post-It allows you to safely store thousands of posts, photos, and more for free. So, what's the hold up?
        </p>
        <button class="button is-link is-medium" @click="redirectToRegister">Start Posting Now</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  methods: {
    redirectToRegister() {
      this.$router.push({path:'/register'});
    }
  }
};
</script>

<style lang="scss" scoped>
.hero {
  background-image: url("../assets/about-cover.jpeg");
  background-size: cover; 
  opacity: 0.9;
  &:hover {
    opacity: 1.0;
  }
}

.header-1 {
  font-size: 85px;
  font-weight: bolder;
  color: #fff;
}

.header-2 {
  float: left;
  font-size: 190px;
  font-weight: bolder;
  color: #fff;
}

.overlay {
  background: 50% 100% / 50% 50% no-repeat
              radial-gradient(ellipse at bottom, #fff, transparent, transparent);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: reveal 3.0s ease-in-out forwards 0.2s,
             glow 2.5s linear infinite 2.0s;

  @keyframes reveal {
    100% {
      background-size: 300% 300%;
      color: #fff;
    }
  }
}

.animate-character {
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 4s linear infinite;
  display: inline-block;
  
  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
}

.about-content {
  transform: scale(0.94);
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
  
  @keyframes scale {
    100% {
      transform: scale(1);
    }
  }
}

.column img {
  opacity: 1.0;
  &:hover {
    opacity: 0.7;
  }
}

.button {
    background-color: #fbd758;
    color: #36476b;
    &:hover {
        background-color: #36476b;
        color: #fbd758;
    }
}
</style>