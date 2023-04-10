import { defineStore } from "pinia";

export const selectedProductStore = defineStore("selectedProductList", {
  state: () => ({
    selectedProductList: [],
    totalItemsInCart: 0,
  }),
  getters: {
    getSelectedProductList: (state) => state.selectedProductList,
    getTotalItemsInCart: (state) => {
      let sum = 0;
      for (let i = 0; i < state.selectedProductList.length; i++) {
        sum += state.selectedProductList[i].quantity;
      }
      return sum;
    },
  },
  actions: {
    addInCart(product, quantity) {
      for (let i in this.selectedProductList) {
        if (this.selectedProductList[i].id === product.id) {
          this.selectedProductList[i].quantity = quantity;
          return;
        }
      }
      product.quantity = quantity;
      this.selectedProductList.push(product);
    },
    removeFromCart(product, quantity) {
      for (let i in this.selectedProductList) {
        if (this.selectedProductList[i].id === product.id) {
          if (quantity === 0) {
            this.selectedProductList.splice(i, 1);
            return;
          }
          this.selectedProductList[i].quantity = quantity;
          return;
        }
      }
      product.quantity = quantity;
      this.selectedProductList.push(product);
    },
  },
});
