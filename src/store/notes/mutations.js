export const ADD_NOTE = (state) => {
  const newNote = {
    id: 0,
    title: '',
    text: '',
    favorite: false
  }
  newNote.id = state.notes.length
  state.notes.push(newNote)
  state.activeNote = newNote
  console.log(state)
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
  state.notes.forEach((item, i) => {
    item.id = i
  })
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

export const SET_STATE = (state, newState) => {
  state = Object.assign(state, newState)
}
