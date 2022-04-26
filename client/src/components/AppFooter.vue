<template>
  <footer>
    <div class="container">
      <div class="left">
        <div class="col-1">
          <router-link class="header" to="/">/Post-It</router-link>
          <ul>
            <li>
              <a href="#"><i class="fa-brands fa-youtube icon"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa-brands fa-twitter icon"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa-brands fa-instagram icon"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa-brands fa-linkedin-in icon"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa-brands fa-github icon"></i></a>
            </li>
          </ul>
        </div>
        <div class="col-2">
          <ul>
            <router-link class="link" to="/">/Posts</router-link>
            <router-link class="link" to="/profile">/Profile</router-link>
            <router-link class="link" to="/about">/About</router-link>
          </ul>
        </div>
      </div>
      <div class="right">
        <p>Copyright <i class="fas fa-copyright"></i> 2022 <router-link class="footer-brand" to="/">Post-It</router-link>. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: "AppFooter",
};
</script>

<style lang="scss" scoped>
footer {
  margin-top: auto;
  padding: 75px 25px;
  background-color: #36476b;

  .container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    @media (min-width: 800px) {
      flex-direction: row;
      gap: 0px;
    }
    
    > div {
      display: flex;
      flex: 1;
    }

    .left {
      gap: 32px;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (min-width: 800px) {
        flex-direction: row;
        align-items: initial;
        gap: 0;
      }

      .header {
        text-align: center;
        font-size: 24px;
        margin-bottom: 16px;
        text-decoration: none;
        font-weight: 600;
        color: #fbd758;
        &:hover {
          color: #fff;
        }
        @media (min-width: 800px) {
          text-align: initial;
        }
      }

      ul {
        gap: 16px;
        list-style: none;
        display: flex;
      }

      .col-1,
      .col-2 {
        gap: 32px;
        display: flex;
        flex: 1;
        @media (min-width: 800px) {
          gap: 0;
        }
      }

      .col-1 {
        flex-direction: column;
        h2 {
          text-align: center;
          @media (min-width: 800px) {
            text-align: initial;
          }
        }

        ul {
          margin-top: auto;
          li {
            display: flex;
            align-items: center;
            .svg-icon {
              width: 24px;
              height: auto;
              color: #fff;
            }
          }
        }
      }

      .col-2 {
        ul {
          height: 100%;
          justify-content: center;
          flex-direction: row;
          flex-wrap: wrap;
          @media (min-width: 800px) {
            flex-direction: column;
          }
          .link {
            font-size: 16px;
            font-weight: 500;
            text-decoration: none;
            color: #fbd758;
            &:hover {
              color: #fff;
            }
          }
        }
      }
    }

    .footer-brand {
      text-decoration: none;
      font-weight: 600;
      color: #fbd758;
      &:hover {
        color: #fff;
      }
    }

    .right {
      gap: 32px;
      color: #fff;
      align-items: center;
      flex-direction: column;
      @media (min-width: 800px) {
        align-items: flex-end;
        gap: 0;
      }
    }

    p {
      margin-top: auto;
      color: #fbd758;
    }
  }
}

.icon {
    color: #fbd758;
}
</style>