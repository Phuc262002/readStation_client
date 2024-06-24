
import { defineStore } from "pinia";
export const useOrderStore = defineStore("order-store", {
  state: () => {
    return {
      isLoading: false,
      isSubmitting: false,
      getAllOrderAdmin : [],  
      getOneOrderAdmin : {},
      statistic:{}
    };
  },
  actions: {
    async statisticOrder() {
        this.isLoading = true;
        const data: any = await useCustomFetch(`/api/v1/admin/orders/statistic`);
        this.statistic = data?.data?._value?.data;
        this.isLoading = false;
        return data;
    },
    async getAllOrder({ page, pageSize, search, spayment_methodtatus }: any) {
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
    async getOneOrder(id: any) {
        this.isLoading = true;
        const data: any = await useCustomFetch(`/api/v1/admin/orders/${id}`);
        this.getOneOrderAdmin = data.data._value;
        this.isLoading = false;
        return data;
    },
  },
});
