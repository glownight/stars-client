import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      count: 5,
    };
  },
  mutations: {
    increment(state: any) {
      state.count++;
    },
  },
  actions: {
    increment(context: any) {
      context.commit("increment");
    },
  },
  getters: {
    doubleCount(state: any) {
      return state.count * 2;
    },
  },
});
