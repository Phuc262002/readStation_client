import { defineStore } from "pinia";

export const useCartStore = defineStore("cart-store", {
  state: () => ({
    carts: [],
    shippingFee: 0,
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
    addShipFee(fee) {
      this.shippingFee = fee;
    },
  },
});
