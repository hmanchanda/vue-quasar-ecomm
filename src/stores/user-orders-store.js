import { defineStore } from "pinia";

export const userOrderStore = defineStore("userOrderList", {
  state: () => ({
    userOrderList: [],
  }),
  getters: {
    getUserOrderList: (state) => state.userOrderList,
  },
  actions: {
    addOrder() {},
  },
});
