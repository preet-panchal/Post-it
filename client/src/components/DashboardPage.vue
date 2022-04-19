<template>
    <div>
        <h1>Your Bio</h1>
        <div v-for="post in user" :key="post._id" class="post-card">
          <div class="wrapper">
              <div class="blog_post">
                <div class="user-info">
                  <h2>Full Name</h2>
                  <h3>{{post.firstName}}</h3>
                  <h2>Email</h2>
                  <h2>Username</h2>
                  <h2>Birthday</h2>
                  
                  <p>{{post.lastName}}</p>
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

.post-card {
  // border: solid 1px black;
  // width: 900px;
  margin: auto;
  // background: #ffffff;
  padding: 30px 0px;
  // border-radius: 10px;
  margin: 20px auto;
  margin: auto;
  // max-width: 800px;
  max-width: 900px;
  // color: #444;
}

.blog-post {
  position: relative;
  padding: 3rem 4rem 2rem 4rem;
  background: rgb(245, 245, 245);
  width: 900px;
  border-radius: 10px;
  text-align: center;
  align-content: center;
  align-items: center;
  justify-content: center;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  box-shadow: 1px 1px 2rem rgba(54, 71, 107, 0.5);
}

.wrapper {
  height: 100%;
  width: 100%;

  &:hover {
    transition: all 0.3s ease-out;
    box-shadow: 3px 3px 2rem rgba(54, 71, 107, 0.5);
  }
}

h2 {
  color: #777; 
  text-transform: uppercase;
  font-size: 8px;
  letter-spacing: 1px;
}

h3 {
  text-align: center;
  border: 0; 
  border-bottom: 1px solid #fbd758;
}

</style>