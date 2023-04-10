import { defineStore } from "pinia";

export const userAddressStore = defineStore("userAddressList", {
  state: () => ({
    userAddressList: [],
  }),
  getters: {
    getUserAddressList: (state) => state.userAddressList,
  },
  actions: {
    addOrder() {},
  },
});
