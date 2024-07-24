<script setup>
import {ref} from "vue"

const emit = defineEmits(['save'])
const title = ref('')
const body = ref('')

function onclick() {
  emit('save', {
    title: title.value,
    body: body.value
  })
  title.value = ''
  body.value = ''
}
</script>

<template>
  <div><input type="text" placeholder="Title" v-model="title"/></div>
  <textarea placeholder="Take a note..." v-model="body"/>
  <div>
    <button @click="onclick">Save</button>
  </div>
</template>

<style scoped>
</style>