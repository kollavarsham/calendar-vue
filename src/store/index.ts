import Vue from 'vue';
import Vuex, { ActionContext } from 'vuex';
import { State } from '../types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentYear: new Date().getFullYear(),
  },
  getters: {
    getPreviousYear: (state: State) => state.currentYear - 1,
    getNextYear: (state: State) => state.currentYear + 1,
  },
  modules: {},
  mutations: {
    increment(state: State) {
      state.currentYear++;
    },
    decrement(state: State) {
      state.currentYear--;
    },
  },
  actions: {
    increment(ctx: ActionContext<State, State>) {
      ctx.commit('increment');
    },
    decrement(ctx: ActionContext<State, State>) {
      ctx.commit('decrement');
    },
  },
});
