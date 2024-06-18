<script setup>
import {ref} from "vue";
import HeaderLayout from './HeaderLayout.vue'
import NoteInput from "./NoteInput.vue"

const notes = ref([])

function saveNote(note) {
  if (note.length === 0) {
    return
  }
  notes.value.push(note)
}
</script>

<template>
  <HeaderLayout/>
  <NoteInput @save="saveNote"/>
  <div v-for="(note, index) in notes" :key="index">{{note}}</div>
</template>

<style scoped>
</style>