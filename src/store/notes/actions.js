export const addNote = (state) => {
  state.commit('ADD_NOTE')
}

export const editNote = (state, note) => {
  console.log('editNote')
  state.commit('EDIT_NOTE', note)
}

export const deleteNote = (state, note) => {
  state.commit('DELETE_NOTE', note)
}

export const setActiveNote = (state, note) => {
  state.commit('SET_ACTIVE_NOTE', note)
}

export const toggleFavorite = (state) => {
  state.commit('TOGGLE_FAVORITE')
}

export const setNotes = (state, notes) => {
  state.commit('SET_NOTES', notes)
}

export const saveToFirebase = (state, db) => {
  let stateToSave = {}
  stateToSave.notes = state.state.notes
  stateToSave.activeNote = state.state.activeNote
  db.ref('state').set(stateToSave)
  db.ref('notes').set(stateToSave.notes)
}

export const loadFromFirebase = (state, db) => {
  db.ref('state').on('value', function (st) {
    state.commit('SET_STATE', st.val())
  })
}

import { LocalStorage } from 'quasar'
let key = 'state'

export const saveToStorage = (state, db) => {
  LocalStorage.set(key, state.state)
  this.saveToFirebase(state, db)
}

export const restoreFromStorage = (state) => {
  let newState = LocalStorage.get.item(key)
  state.commit('SET_STATE', newState)
}
