import { defineStore } from "pinia";
export const useTransactionAdminStore = defineStore("transaction-admin-store", {
  state: () => {
    return {
      transactionAdmin: [],
      isLoading: false,
      isSubmitting: false,
    };
  },
  actions: {
    async getAllTransaction({ page, pageSize, sort }: any) {
      try {
        this.isLoading = true;
        const data: any = await useCustomFetch(
          `/api/v1/admin/transactions?${page ? `&page=${page}` : ""}${
            pageSize ? `&pageSize=${pageSize}` : ""
          }${sort ? `&sort=${sort}` : ""}`
        );
        this.transactionAdmin = data.data._value?.data;
        return data;
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
