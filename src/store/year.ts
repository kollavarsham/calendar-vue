import { ActionContext } from 'vuex';
import { State } from '@/types';

export default {
  state: {
    currentYear: new Date().getFullYear(),
  },
  getters: {
    previousYear: (state: State): number => state.currentYear - 1,
    nextYear: (state: State): number => state.currentYear + 1,
    isLowerLimit: (state: State): boolean => !!(state.currentYear < 1901),
    isUpperLimit: (state: State): boolean => !!(state.currentYear > 2049),
  },
  modules: {},
  mutations: {
    increment(state: State): void {
      state.currentYear += 1;
    },

    decrement(state: State): void {
      state.currentYear -= 1;
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
