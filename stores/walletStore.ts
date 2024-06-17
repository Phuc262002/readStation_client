import { defineStore } from "pinia";
export const useWalletStore = defineStore("wallet-store", {
  state() {
    return {
      paymentLink: "",
      wallets: [],
      transactions: [],
      isLoading: false,
      isSubmitting: false,
    };
  },
  persist: true,
  actions: {
    async getAllTransaction({ page, pageSize, sort }: any) {
      const data: any = await useCustomFetch(
        `/api/v1/account/wallet/transaction-history?${
          page ? `&page=${page}` : ""
        }${pageSize ? `&pageSize=${pageSize}` : ""}${
          sort ? `&sort=${sort}` : ""
        }`
      );
      this.transactions = data.data._value?.data;
      return data;
    },
    async createTransaction(body: any) {
      const data: any = await useCustomFetch(
        "/api/v1/account/wallet/create-transaction",
        {
          method: "POST",
          body: body,
        }
      );
      return data;
    },
    async getPaymentLink(id) {
      const data: any = await useCustomFetch(
        `/api/v1/account/wallet/get-payment-link/${id}`
      );
      this.paymentLink = data.data._value?.data;
      return data;
    },
    async updateTransactionStatus({ id }: any) {
      const data: any = await useCustomFetch(
        `/api/v1/account/wallet/update-transaction-status/{id}?${
          id ? `&id=${id}` : ""
        }`
      );
      this.wallets = data.data._value?.data;
      return data;
    },
  },
});
