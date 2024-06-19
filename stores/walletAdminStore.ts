import { defineStore } from "pinia";

export const useWalletAdminStore = defineStore("walletAdmin-store", {
  state: () => {
    return {
      adminWallet: [],
      isSubmitting: false,
      isLoading: false,
    };
  },
  actions: {
    async getAdminWallet({ page, pageSize, search, status }: any) {
      this.isLoading = true;
      const data: any = await useCustomFetch(
        `/api/v1/wallet/admin/get-all?${page ? `&page=${page}` : ""}${
          pageSize ? `&pageSize=${pageSize}` : ""
        }${search ? `&search=${search}` : ""}${
          status ? `&status=${status}` : ""
        }`
      );
      this.adminWallet = data.data._value?.data;
      this.isLoading = false;
      return data;
    },
    async updateWalletStatus({ id, status }: any) {
      this.isSubmitting = true;
      const data: any = await useCustomFetch(
        `/api/v1/wallet/admin/update-transaction-status/${id}`,
        {
          method: "PUT",
          body: JSON.stringify(status),
        }
      );
      this.isSubmitting = false;
      return data;
    },
  },
});
