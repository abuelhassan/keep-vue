<script setup>
</script>

<template>
  <div class="notebook">
    <div class="line">
      <span class="bullet">•</span>
      <div class="text-line"></div>
    </div>
    <div class="line">
      <span class="bullet">•</span>
      <div class="text-line"></div>
    </div>
    <div class="line">
      <span class="bullet">•</span>
      <div class="text-line"></div>
    </div>
  </div>
</template>

<style scoped>
  .notebook {
    width: 22px;
    height: 35px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border: 1px solid darkkhaki;
    padding: 3px 7px 3px 5px;
    border-radius: 8px;
  }
  .line {
    display: flex;
    align-items: center;
    color: darkkhaki;
    height: 5px;
  }
  .bullet {
    font-weight: bold;
    margin-right: 2px;
  }
  .text-line {
    border-bottom: 1px solid darkkhaki;
    width: 100%;
  }
</style>