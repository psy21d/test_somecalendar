import Vue from 'vue'
import Vuex from 'vuex'

import { extractVuexModule, createProxy } from 'vuex-class-component'
import { TasksStore } from '@/store/tasks.store'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(TasksStore)
  }
})

export const storeTasks = createProxy( store, TasksStore )