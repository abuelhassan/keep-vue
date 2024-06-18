<script setup>
import {ref} from "vue";
import HeaderLayout from './HeaderLayout.vue'

const currentNote = ref('')
const notes = ref([])

function onclick() {
  if (currentNote.value.length === 0) {
    return;
  }
  notes.value.push({
    id: notes.value.length,
    note: currentNote.value
  })
  currentNote.value = ''
}
</script>

<template>
  <HeaderLayout/>
  <textarea v-model="currentNote"/>
  <button @click="onclick">Add</button>
  <div v-for="obj in notes" :key="obj.id">{{obj.note}}</div>
</template>

<style scoped>
</style>