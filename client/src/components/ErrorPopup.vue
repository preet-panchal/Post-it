<template>
  <div class="error-wrapper">
    <div class="error">
      {{ msg }}
    </div>
  </div>
</template>

<script>
export default {
    name: "ErrorPopup",
    props: {
        msg: String
    }
}
</script>

<style>
.error-wrapper {
  position: fixed;
  width: 100%;
  top: 15%;
  z-index: 5;
}

.error {
  padding: 25px;
  color: white;
  background: #ff0062;
  border-radius: 10px;
  box-shadow: 1px 3px 5px rgba(0,0,0,0.2);
  max-width: 500px;
  margin: 0 auto;
}
</style>