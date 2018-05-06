<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
      >
        <q-toolbar-title>
          Sample App 2
          <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
        </q-toolbar-title>
        <q-btn flat round dense icon="more_vert">
          <q-popover :anchor="'bottom left'" :self="'top left'">
            <q-list link style="min-width: 100px">
              <q-item v-close-overlay @click.native="save()">Save</q-item>
              <q-item v-close-overlay @click.native="load()">Load</q-item>
            </q-list>
          </q-popover>
        </q-btn>
      </q-toolbar>
    </q-layout-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'LayoutDefault',
  methods: {
    save () {
      this.$store.dispatch('notes/saveToStorage', this.$db)
    },
    load () {
      this.$store.dispatch('notes/restoreFromStorage')
    }
  }
}
</script>

<style>
</style>
