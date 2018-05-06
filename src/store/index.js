import Vue from 'vue'
import Vuex from 'vuex'
import notes from './notes'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    notes
  }
})

// if we want some HMR magic for it, we handle
// the hot update like below. Notice we guard this
// code with "process.env.DEV" -- so this doesn't
// get into our production build (and it shouldn't).
if (process.env.DEV && module.hot) {
  module.hot.accept(['./notes'], () => {
    const newShowcase = require('./notes').default
    store.hotUpdate({ modules: { notes: newShowcase } })
  })
}

export default store
