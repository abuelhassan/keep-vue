<script setup>
import HeaderLogo from "./HeaderLogo.vue";
</script>

<template>
  <header>
    <div class="container">
      <HeaderLogo/>
      <div class="title">Keep me organized!</div>
    </div>
    <hr/>
  </header>
</template>

<style scoped>
  header {
    height: 50px;
    margin-bottom: 20px;
  }
  .container {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-left: 10px;
  }
  .title {
    font-size: 40px;
    color: darkkhaki;
  }
</style>