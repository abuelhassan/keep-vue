<script setup>
import {ref} from "vue"

const emit = defineEmits(['save'])
const currentNote = ref('')

function onclick() {
  emit('save', currentNote.value)
  currentNote.value = ''
}
</script>

<template>
  <textarea v-model="currentNote"/>
  <div>
    <button @click="onclick">Save</button>
  </div>
</template>

<style scoped>
</style>