import { createStore } from 'vuex'
// import things from '@/thing.js'

export default createStore({
  state: {
    listOfThings: []
  },
  getters: {
  },
  mutations: {
    updatedList (listOfThings, updated) {
      listOfThings = updated
    }
  },
  actions: {
    doThing ({ commit }, updated) {
      // things.doThingPls(updated)
    }
  },
  modules: {
  }
})
