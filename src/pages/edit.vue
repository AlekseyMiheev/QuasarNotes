<template>
 <q-layout>
  <q-input v-model.trim="activeNote.title" float-label="Title" />
  <q-input
    v-model.trim="activeNote.text"
    type="textarea"
    float-label="Text"
    rows="10"
    clearable
  />
  <q-page-sticky position="bottom-right" :offset="[18, 18]">
    <q-btn round
      size="20px"
      icon="save"
      color="secondary"
      @click="$store.dispatch('notes/saveToStorage', $db)"
      v-go-back="'/view'">
    </q-btn>
  </q-page-sticky>
  </q-layout>
</template>

<script>
export default {
  computed: {
    activeNote: {
      get () {
        return this.$store.getters['notes/getActiveNote']
      },
      set (val) {
        console.log(val)
        this.$store.dispatch('notes/editNote', val)
      }
    }
  }
}
</script>
