<script setup>
import {ref} from "vue";
import HeaderLayout from './HeaderLayout.vue'
import NoteInput from "./NoteInput.vue"
import NotesLayout from "./NotesLayout.vue"
import NoteItem from "./NoteItem.vue"

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
  <NotesLayout>
    <NoteItem v-for="(note, index) in notes" :key="index">{{note}}</NoteItem>
  </NotesLayout>
</template>

<style scoped>
</style>