export const ADD_NOTE = (state) => {
  const newNote = {
    id: 0,
    title: '',
    text: '',
    favorite: false
  }
  newNote.id = state.notes.length + 1
  state.notes.push(newNote)
  state.activeNote = newNote
}

export const EDIT_NOTE = (state, note) => {
  state.activeNote.title = note.title
  state.activeNote.text = note.text
}

export const DELETE_NOTE = (state, note) => {
  var index = state.notes.indexOf(note)
  if (index !== -1) {
    state.notes.splice(index, 1)
  }
}

export const TOGGLE_FAVORITE = (state) => {
  state.activeNote.favorite = !state.activeNote.favorite
}

export const SET_ACTIVE_NOTE = (state, note) => {
  state.activeNote = note
}

export const SET_NOTES = (state, notes) => {
  state.notes = notes
  state.activeNote = state.notes[0]
}

import { LocalStorage } from 'quasar'
let key = 'state'

export const SAVE_TO_STORAGE = (state) => {
  LocalStorage.set(key, state)
}

export const RESTORE_FROM_STORAGE = (state) => {
  Object.assign(state, LocalStorage.get.item(key))
}