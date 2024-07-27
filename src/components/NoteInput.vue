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
  <div class="container">
    <input class="transparent-input title" type="text" placeholder="Title" v-model="title"/>
    <textarea class="transparent-input" placeholder="Take a note..." v-model="body"/>
    <button @click="onclick">Save!</button>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 3px;
    border: 1px solid darkkhaki;
    width: 320px;
    padding: 12px 16px;
  }
  .transparent-input{
    width: 300px;
    background-color: unset;
    color: white;
    margin-bottom: 3px;
    border-style: none;
  }
  .transparent-input:focus {
    outline: unset;
  }
  textarea.transparent-input {
    resize: none;
    height: 100px;
  }
  input.transparent-input {
    overflow: clip;
  }
  input.title {
    font-size: 20px;
  }
  button {
    border: none;
    background-color: khaki;
    border-radius: 20px;
  }
</style>