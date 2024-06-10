import { defineStore } from "pinia";

export const useCartStore = defineStore("cart-store", {
  state: () => {
    return {
      carts: [],
    };
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "cart-store",
        storage: localStorage,
      },
    ],
  },
  // persist: true,
  // actions: {
  //   addToCart(product: any) {
  //     this.carts.push(product);
  //   },
  // },
});
