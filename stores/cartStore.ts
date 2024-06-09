import { defineStore } from "pinia";

export const useCartStore = defineStore("cart-store", {
  state: () => {
    return {
      carts: [],
    };
  },
  persist: true,
});
