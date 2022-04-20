<template>
    <div>
        <h1>My Dashboard</h1>
        <strong>Here is your user profile.</strong>
        <div v-for="post in user" :key="post._id" class="post-card">
          <div class="wrapper">
              <div class="blog_post">
                <figure class="img-content image is-128x128">
                  <img class="is-rounded" src="../assets/user-image.png">
                </figure>
                <div class="user-info">
                  <h3>{{post.firstName}} {{post.lastName}}</h3>
                  <h2>Full Name</h2>
                  <h3>{{post.email}}</h3>
                  <h2>Email</h2>
                  <h3>{{post.userName}}</h3>
                  <h2>Username</h2>
                  <h3>{{post.dateOfBirth}}</h3>
                  <h2>Birthday</h2>
                </div>
              </div>
          </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'DashboardPage',
    props: {
        user: Array
    }
}
</script>

<style scoped lang="scss">

.img-content {
  margin: auto;
}

.post-card {
  padding: 30px 0px;
  margin: 20px auto;
  max-width: 900px;
}

.blog-post {
  padding: 3rem 4rem 2rem 4rem;
  background: rgb(245, 245, 245);
  width: 900px;
}

.wrapper {
  align-items: center;
  height: 100%;
  width: 100%;

  &:hover {
    transition: all 0.3s ease-out;
    box-shadow: 3px 3px 2rem rgba(54, 71, 107, 0.5);
  }
}

.user-info {
  margin: auto; 
  text-align: center;
}

h2 {
  background: #fbd758;
  color: #777; 
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1px;
}


</style>