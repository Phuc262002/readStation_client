import { defineStore } from "pinia";

export const useOrderClientStore = defineStore("order-client-store", {
  state: () => {
    return {
      orders: [],
      order: {},
      isLoading: false,
      isSubmitting: false,
    };
  },
  persist: true,
  actions: {
    async getAllOrder({ page, pageSize, status, search }: any) {
      const data: any = await useCustomFetch(
        `/api/v1/account/order/get-all?${page ? `&page=${page}` : ""}${
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
        const data: any = await useCustomFetch(
          `/api/v1/account/order/get-one/${id}`
        );
        this.order = data.data._value?.data;
        return data;
      } catch (error) {
        console.log("error", error);
      } finally {
        this.isLoading = false;
      }
    },
    async createOrder(body: any) {
      const data: any = await useCustomFetch("/api/v1/account/order/create", {
        method: "POST",
        body: JSON.stringify(body),
      });
      return data;
    },
  },
});
