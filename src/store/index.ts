import Vue from 'vue';
import Vuex, { ActionContext } from 'vuex';
// import { State } from '../types';
import year from './year';

Vue.use(Vuex);

export default new Vuex.Store(year);
