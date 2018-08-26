import Vue from 'vue'
import Vuex from 'vuex'
import { database } from './firebase.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    task: ''
  },
  mutations: {
    GET_TASK: function (state, payload) {
      state.task = payload
    }
  },
  actions: {
    addTask(context, data) {
      database.ref(`task/${data.status}`).push({
        title: data.title,
        description: data.description,
        status: 'backlog'
      })
    },
    getTask(context,data){
      database.ref(`task/`).on('value',function(snapshot){
        console.log(snapshot.val());
        context.commit('GET_TASK',snapshot.val())
      })
    },
    next(context,data){
      database.ref(`task/${data.task.status}/${data.index}`).set(data.task)
    },
    removeTask(context,data){
      database.ref(`task/${data.task.status}/${data.index}`).remove()
    },
  }
})
