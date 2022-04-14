<template>
  <div class="success-wrapper">
    <div class="success">
      {{ msg }}
    </div>
  </div>
</template>

<script>

export default {
    name: "SuccessPopup",
    props: {
        msg: String
    }
}

</script>


<style>
.success-wrapper {
  position: fixed;
  width: 100%;
  top: 15%;
  z-index: 5;
}
.success {
  padding: 25px;
  color: white;
  background: #198754;
  border-radius: 10px;
  box-shadow: 1px 3px 5px rgba(0,0,0,0.2);
  max-width: 500px;
  margin: 0 auto;
}
</style>