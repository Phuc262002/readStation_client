import { defineStore } from "pinia";

export const useCartStore = defineStore("cart-store", {
  state: () => ({
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
        let deposit = 0;
        if (item.price < 50000) {
          deposit = 1000;
        } else if (item.price >= 50000 && item.price <= 100000) {
          deposit = 2000;
        } else {
          deposit = 4000;
        }
        if (item.id === id) {
          return {
            ...item,
            number_of_days: quantity,
            service_fee: quantity * deposit,
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
      let deposit = 0;
      if (product.price < 50000) {
        deposit = 1000;
      } else if (product.price >= 50000 && product.price <= 100000) {
        deposit = 2000;
      } else {
        deposit = 4000;
      }
      this.carts.push({
        ...product,
        number_of_days: 5,
        service_fee: 5 * deposit,
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
