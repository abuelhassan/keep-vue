<script setup>
import {ref, onMounted} from "vue"
import HeaderLayout from './HeaderLayout.vue'
import NoteInput from "./NoteInput.vue"
import NotesLayout from "./NotesLayout.vue"
import NoteItem from "./NoteItem.vue"
import {store, fetch} from "../scripts/storage.js"
import {encode, decode} from "../scripts/crypto.js"
import {compress, decompress} from "../scripts/compression.js"

const notes = ref([])

onMounted(() => {
  const storedNodes = fetch(decode, decompress)
  if (storedNodes !== null) {
    notes.value = JSON.parse(storedNodes)
  }
})

function saveNote(note) {
  const title = note.title.trim()
  const body = note.body.trim()
  if (!title && !body) {
    return
  }
  notes.value.push([title, body])
  store(JSON.stringify(notes.value), compress, encode)
}
</script>

<template>
  <HeaderLayout/>
  <div class="input-container">
    <NoteInput @save="saveNote"/>
  </div>
  <NotesLayout>
    <NoteItem v-for="([title, body], index) in notes" :key="index" :title="title">
      {{ body}}
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