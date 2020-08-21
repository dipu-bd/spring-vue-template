/**
 * Create vuex store using vuex-module-decorators here
 */

import Vue from "vue";
import Vuex from "vuex";

import { ViewState } from "./modules/view";

Vue.use(Vuex);

export interface RootState {
  view: ViewState;
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<RootState>({});
