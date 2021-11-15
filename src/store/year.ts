import { ActionContext } from 'vuex';
import { State } from '@/types';

export default {
  state: {
    currentYear: new Date().getFullYear(),
  },
  getters: {
    getPreviousYear: (state: State): number => state.currentYear - 1,
    getNextYear: (state: State): number => state.currentYear + 1,
  },
  modules: {},
  mutations: {
    increment(state: State): void {
      state.currentYear++;
    },
    decrement(state: State): void {
      state.currentYear--;
    },
  },
  actions: {
    increment(ctx: ActionContext<State, State>): void {
      ctx.commit('increment');
    },
    decrement(ctx: ActionContext<State, State>): void {
      ctx.commit('decrement');
    },
  },
};
