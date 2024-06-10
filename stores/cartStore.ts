import { defineStore } from "pinia";

export const useCartStore = defineStore("cart-store", {
  state: () => ({
    carts: [],
  }),
  persist: {
    storage: localStorage,
  },
  actions: {
    addToCart(product) {
      this.carts.push(product);
    },
  },
});
