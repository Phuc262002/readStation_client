import { defineStore } from "pinia";

export const useCartStore = defineStore("cart-store", {
  state: () => ({
    days: 0,
    rentNow: {},
    carts: [],
    shippingFee: 0,
  }),
  persist: {
    storage: localStorage,
  },
  actions: {
    updateNumberOfDays(id, quantity) {
      this.carts = this.carts.map((item) => {
        console.log("item", item.id === id);
        if (item.id === id) {
          return {
            ...item,
            number_of_days: quantity,
          };
        } else {
          return item;
        }
      });
    },
    addToRentNow(item) {
      this.rentNow = [item];
    },
    addToCart(product) {
      this.carts.push({
        ...product,
        number_of_days: 5,
      });
    },
    deleteItemCart(id) {
      this.carts = this.carts.filter((item) => item.id !== id);
    },
    addShipFee(fee) {
      this.shippingFee = fee;
    },
  },
});
