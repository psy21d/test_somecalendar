import Vue from 'vue'
import Vuex from 'vuex'

import { extractVuexModule } from 'vuex-class-component'
import { TasksStore } from '@/store/tasks.store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ...extractVuexModule(TasksStore)
  }
})