import { defineStore } from "pinia";
export const useInvoiceEnterStore = defineStore("invoice-enter-store", {
  state: () => {
    return {
      isLoading: false,
      isSubmitting: false,
    };
  },
  actions: {
    async getAllInvoiceEnter({ page, pageSize, search, status }: any) {
      this.isLoading = true;
      const data: any = await useCustomFetch(
        `api/v1/invoice-enters?${page ? `&page=${page}` : ""}${
          pageSize ? `&pageSize=${pageSize}` : ""
        }${search ? `&search=${search}` : ""}${
          status ? `&status=${status}` : ""
        }`
      );
      this.isLoading = false;
      return data;
    },
    async getOneInvoiceEnter(id: string) {
      this.isLoading = true;
      const data: any = await useCustomFetch(`/api/v1/invoice-enters/${id}`);
      this.isLoading = false;
      return data;
    },
    async createInvoiceEnter(dataPost: any) {
      this.isSubmitting = true;
      const data: any = await useCustomFetch(`/api/v1/invoice-enters/create`, {
        method: "POST",
        body: JSON.stringify(dataPost),
      });
      this.isSubmitting = false;
      return data;
    },
    async updateInvoiceEnter({ id, valueInvoiceEnter }: any) {
      const data: any = await useCustomFetch(
        `/api/v1/invoice-enters/update/${id}`,
        {
          method: "PUT",
          body: JSON.stringify(valueInvoiceEnter),
        }
      );
      return data;
    },
  },
});