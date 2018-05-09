export const getActiveNoteText = (state) => {
  console.log(state.activeNote.text)
  return state.activeNote.text
}

export const getActiveNoteTitle = (state) => {
  return state.activeNote.title
}

export const getNotes = (state) => {
  return state.notes
}

export const getActiveNote = (state) => {
  return state.activeNote
}
