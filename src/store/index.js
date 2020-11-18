import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    numbers: [1,3,5,7,9],
    name: 'Ben2'
  },
  mutations: {
    ADD_NUMBER(state,payload) {
      state.numbers.push(payload)
    }
  },
  actions: {
    addNumber(context,number) {
      context.commit("ADD_NUMBER", number)
    }
  },
  modules: {
  },
  getters: {
    sortedNumbers(state) {
      return state.numbers.sort((a, b) => a - b)
    },
},
})
