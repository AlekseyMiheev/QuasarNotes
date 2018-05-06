<template>
  <q-btn color="secondary" @click="saveToStorage(keyToSave, valueToSave)"> Save to Storage</q-btn>
</template>

<script>

export default {
  props: ['keyToSave', 'valueToSave'],
  methods: {
    saveToStorage (key, value) {
      console.log(key)
      console.log(value)
      this.$q.localStorage.set(key, value)
    }
  }
}
</script>
