<script setup>
import {ref} from "vue";
import HeaderLayout from './HeaderLayout.vue'
import NoteInput from "./NoteInput.vue"
import NotesLayout from "./NotesLayout.vue"
import NoteItem from "./NoteItem.vue"

const notes = ref([])

function saveNote(note) {
  if (note.title.trim() === ""  && note.body.trim() === "") {
    return
  }
  notes.value.push(note)
}
</script>

<template>
  <HeaderLayout/>
  <div class="input-container">
    <NoteInput @save="saveNote"/>
  </div>
  <NotesLayout>
    <NoteItem v-for="({title, body}, index) in notes" :key="index" :title="title">
      {{body}}
    </NoteItem>
  </NotesLayout>
</template>

<style scoped>
  .input-container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
</style>