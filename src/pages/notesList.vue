<template>
  <q-layout>
  <q-pull-to-refresh :handler="refresher">
    <q-search style="margin: 10px" v-model="terms" placeholder="Start typing a title">
      <q-autocomplete @search="search" @selected="selected" />
    </q-search>
    <q-tabs v-model="selectedTab" inverted color="secondary" align="justify">
      <q-tab default v-ripple name="all" slot="title" icon="note" label="All" />
      <q-tab v-ripple name="favorite" slot="title" icon="favorite" label="Favorite" />
      <q-tab-pane name="all">
        <custom-card v-for="note in notes" :key="note.id" :note="note" class="q-ma-sm" style="width: 95%"/>
        <!-- <q-card inline class="q-ma-sm" style="width: 95%" v-for="note in notes" :key="note.id">
          <q-card-title>
            {{note.title.substring(0, 30)}}
          </q-card-title>
          <q-card-main>
            {{note.text.substring(0, 60)}}
          </q-card-main>
          <q-card-separator />
          <q-card-actions align="around">
            <q-btn flat round color="primary" icon="edit" @click="updateActiveNote(note)" />
            <q-btn flat round color="red" v-if="note.favorite == false" icon="favorite_border" @click="note.favorite = !note.favorite"/>
            <q-btn flat round color="red" v-else icon="favorite" @click="note.favorite = !note.favorite"/>
            <q-btn flat color="red" icon="remove" @click="deleteNote(note)" />
          </q-card-actions>
        </q-card> -->
      </q-tab-pane>
      <q-tab-pane name="favorite">
        <custom-card v-for="note in filteredNotes" :key="note.id" :note="note" class="q-ma-sm" style="width: 95%"/>
        <!-- <q-card inline class="q-ma-sm" style="width: 95%" v-for="note in filteredNotes" :key="note.id">
          <q-card-title>
            {{note.title.substring(0, 30)}}
          </q-card-title>
          <q-card-main>
            {{note.text.substring(0, 60)}}
          </q-card-main>
          <q-card-separator />
          <q-card-actions align="around">
            <q-btn flat round color="primary" icon="edit" @click="updateActiveNote(note)" />
            <q-btn flat round color="red" icon="favorite" @click="note.favorite = !note.favorite"/>
            <q-btn flat color="red" icon="remove" @click="deleteNote(note)" />
          </q-card-actions>
        </q-card> -->
      </q-tab-pane>
    </q-tabs>
  </q-pull-to-refresh>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn round
        size="20px"
        icon="add"
        color="secondary"
        @click="addNote"
      >
      </q-btn>
    </q-page-sticky>
  </q-layout>
</template>

<script>
import { filter } from 'quasar'
import CustomCard from 'components/custom-card'
export default {
  components: {
    CustomCard
  },
  data () {
    return {
      selectedTab: 'all',
      terms: '',
      key: 'notesKey'
    }
  },
  computed: {
    notes: {
      get () {
        return this.$store.state.notes.notes
      }
    },
    filteredNotes () {
      return this.notes.filter(note => note.favorite)
    }
  },
  methods: {
    search (terms, done) {
      let list = []
      this.notes.forEach((item) => {
        let obj = {value: item, label: item.title}
        list.push(obj)
      })
      done(filter(terms, {field: 'label', list: list}))
    },
    selected (obj) {
      this.$store.dispatch('notes/setActiveNote', obj.value)
      this.$router.push('/notes')
    },
    addNote () {
      this.$store.dispatch('notes/addNote')
      this.$router.push('/notes')
    },
    saveToStorage () {
      this.$store.dispatch('notes/saveToStorage', this.$db)
    },
    loadFromStorage () {
      this.$store.dispatch('notes/restoreFromStorage')
    },
    refresher (done) {
      this.$store.dispatch('notes/loadFromFirebase', this.$db)
      done()
    }
    /* updateActiveNote (val) {
      this.$store.commit('notes/SET_ACTIVE_NOTE', val)
      this.$router.push('/notes')
    },
    deleteNote (val) {
      this.$store.commit('notes/DELETE_NOTE', val)
    } */
  },
  created () {
    this.loadFromStorage()
  },
  beforeDestroyed () {
    this.saveToStorage()
  }
}
</script>
