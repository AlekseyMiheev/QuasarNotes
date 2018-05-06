<template>
  <q-card inline>
    <q-card-title>
      {{note.title}}
    </q-card-title>
    <q-card-main>
      {{note.text.substring(0, 30)}}...
    </q-card-main>
    <q-card-separator />
    <q-card-actions align="around">
      <q-btn flat round color="primary" icon="edit" @click="updateActiveNote(note)" />
      <q-btn flat round color="red" v-if="note.favorite == false" icon="favorite_border" @click="note.favorite = !note.favorite"/>
        <q-btn flat round color="red" v-else icon="favorite" @click="note.favorite = !note.favorite"/>
        <q-btn flat color="red" icon="remove" @click="deleteNote(note)" />
      </q-card-actions>
  </q-card>
</template>

<script>
import { QCard } from 'quasar'
export default {
  props: ['note'],
  methods: {
    updateActiveNote (val) {
      this.$store.dispatch('notes/setActiveNote', val)
      this.$router.push('/notes')
    },
    deleteNote (val) {
      this.$store.dispatch('notes/deleteNote', val)
    }
  },
  components: {
    QCard
  }
}
</script>
