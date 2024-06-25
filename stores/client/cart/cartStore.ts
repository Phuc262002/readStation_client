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
    deleteItemCart(id) {
      this.carts = this.carts.filter((item) => item.id !== id);
    },
  },
});
