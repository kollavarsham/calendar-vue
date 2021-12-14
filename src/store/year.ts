import { ActionContext } from 'vuex';
import { State } from '@/types';
import { MAX_YEAR, MIN_YEAR } from '@/constants';

export default {
  state: {
    currentYear: new Date().getFullYear(),
  },
  getters: {
    previousYear: (state: State): number => state.currentYear - 1,
    nextYear: (state: State): number => state.currentYear + 1,
    isLowerLimit: (state: State): boolean => !!(state.currentYear < MIN_YEAR),
    isUpperLimit: (state: State): boolean => !!(state.currentYear > MAX_YEAR),
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
