export const addNote = (state) => {
  state.commit('ADD_NOTE')
}

export const editNote = (state, e) => {
  state.commit('EDIT_NOTE', e.target.value)
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

export const saveToStorage = (state) => {
  state.commit('SAVE_TO_STORAGE')
}

export const restoreFromStorage = (state) => {
  state.commit('RESTORE_FROM_STORAGE')
}
