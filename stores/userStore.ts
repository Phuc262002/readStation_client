import create from "@ant-design/icons-vue/lib/components/IconFont";
import { defineStore } from "pinia";
export const useUserStore = defineStore("user-store", {
  state: () => {
    return {
      orders: [],
      userAdmin: [],
      isLoading: false,
      isSubmitting: false,
    };
  },
  persist: true,
  actions: {
    async getUser({ page, pageSize, search, status }: any) {
      try {
        this.isLoading = true;
        const data: any = await useCustomFetch(
          `/api/v1/users?${page ? `&page=${page}` : ""}${
            pageSize ? `&pageSize=${pageSize}` : ""
          }${search ? `&search=${search}` : ""}${
            status ? `&status=${status}` : ""
          }`
        );
        this.userAdmin = data.data._value?.data;
        this.isLoading = false;
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async createUser(user: any) {
      try {
        this.isSubmitting = true;
        const data: any = await useCustomFetch(`/api/v1/users/create`, {
          method: "POST",
          body: JSON.stringify(user),
        });
        this.isSubmitting = false;
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async createOrder(body: any) {
      const data: any = await useCustomFetch("/api/v1/account/order/create", {
        method: "POST",
        body: JSON.stringify(body),
      });
      return data;
    },
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
  },
});
