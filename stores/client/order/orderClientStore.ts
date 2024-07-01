import { defineStore } from "pinia";

export const useOrderClientStore = defineStore("order-client-store", {
  state: () => {
    return {
      orders: [],
      order: {},
      cancel: {},
      isLoading: false,
      isSubmitting: false,
    };
  },
  persist: true,
  actions: {
    async getAllOrder({ page, pageSize, status, search }: any) {
      const data: any = await useCustomFetch(
        `/api/v1/account/orders?${page ? `&page=${page}` : ""}${
          pageSize ? `&pageSize=${pageSize}` : ""
        }${status ? `&status=${status}` : ""}${
          search ? `$search=${search}` : ""
        }`
      );
      this.orders = data.data._value?.data;
      return data;
    },
    async getOneOrder(id: any) {
      try {
        this.isLoading = true;
        const data: any = await useCustomFetch(`/api/v1/account/orders/${id}`);
        this.order = data.data._value?.data;
        return data;
      } catch (error) {
        console.log("error", error);
      } finally {
        this.isLoading = false;
      }
    },
    async createOrder(body: any) {
      try {
        const data: any = await useCustomFetch(
          "/api/v1/account/orders/create",
          {
            method: "POST",
            body: JSON.stringify(body),
          }
        );
        return data;
      } catch (error) {
        console.log("error", error);
      } finally {
        this.isLoading = false;
      }
    },
    async cancelOrder(id: any) {
      try {
        this.isLoading = true;
        const data: any = await useCustomFetch(
          `/api/v1/account/orders/cancel/${id}`,
          {
            method: "PUT",
          }
        );
        this.cancel = data.data._value?.data;
        return data;
      } catch (error) {
        console.log("error", error);
      } finally {
        this.isLoading = false;
      }
    },
    async getOrderPayment({ id, body }: any) {
      try {
        this.isSubmitting = true;
        const data: any = await useCustomFetch(
          `/api/v1/account/orders/payment/${id}`,
          {
            method: "POST",
            body: JSON.stringify(body),
          }
        );
        return data;
      } catch (error) {
        console.log("error", error);
      } finally {
        this.isSubmitting = false;
      }
    },
  },
});
