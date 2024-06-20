import { defineStore } from "pinia";
export const useOrderStore = defineStore("order-store", {
  state: () => {
    return {
      isLoading: false,
      isSubmitting: false,
      getAllOrderAdmin : [],  
    };
  },
  actions: {
    async getAllOrder({ page, pageSize, search, status }: any) {
        this.isLoading = true;
        const data: any = await useCustomFetch(
            `/api/v1/admin/orders?${page ? `&page=${page}` : ""}${
            pageSize ? `&pageSize=${pageSize}` : ""
            }${search ? `&search=${search}` : ""}${
            status ? `&status=${status}` : ""
            }`
        );
        this.getAllOrderAdmin = data.data._value?.data;
        this.isLoading = false;
        return data;
    },
  },
});
