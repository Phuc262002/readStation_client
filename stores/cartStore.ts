import { defineStore } from "pinia";

export const useCartStore = defineStore("cart-store", {
  state: () => ({
    carts: [],
  }),
  persist: true,
  actions: {
    addToCart(product) {
      this.carts.push(product);
    },
  },
});
