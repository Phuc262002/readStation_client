import { defineStore } from "pinia";
export const useWalletStore = defineStore("wallet-store", {
  state() {
    return {
      wallets: [],
      transactions: [],
      isLoading: false,
      isSubmitting: false,
    };
  },
  persist: true,
  actions: {
    async getTransaction({ page, pageSize, sort }: any) {
      const data: any = await useCustomFetch(
        `/api/v1/account/wallet/transaction-history?${
          page ? `&page=${page}` : ""
        }`
      );
      this.transactions = data.data._value?.data;
      return data;
    },
  },
});
