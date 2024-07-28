<script setup>
defineProps(['title'])
</script>

<template>
  <div class="item">
    <div class="title">{{ title }}</div>
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<style scoped>
.item {
  width: 240px;
  min-height: 40px;
  margin: 16px;
  padding: 12px 16px;
  border: 1px darkkhaki solid;
  border-radius: 5px;
  overflow-wrap: break-word;
}

.content {
  padding: 12px 0;
  white-space: pre-wrap;
}

.title {
  font-size: 20px;
}
</style>