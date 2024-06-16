<script setup>
import {ref} from "vue";

defineProps({
  msg: String,
})
const currentNote = ref('')
const notes = ref([])

function onclick() {
  notes.value.push({
    id: notes.value.length,
    note: currentNote.value
  })
  currentNote.value = ''
}
</script>

<template>
  <h1>{{msg}}</h1>
  <textarea v-model="currentNote"/>
  <button @click="onclick">Add</button>
  <div v-for="obj in notes" :key="obj.id">{{obj.note}}</div>
</template>

<style scoped>

</style>