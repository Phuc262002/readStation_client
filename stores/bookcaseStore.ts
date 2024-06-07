import { defineStore } from "pinia";
export const useBookcaseStore = defineStore("bookcase-store", {
  state: () => {
    return {
      isLoading: false,
      isSubmitting: false,
    };
  },
  actions: {
    async getAllBookcases({ page, pageSize, status, search }: any) {
      this.isLoading = true;
      const data: any = await useCustomFetch(
        `/api/v1/bookcases?${page ? `&page=${page}` : ""}${
          pageSize ? `&pageSize=${pageSize}` : ""
        }${search ? `&search=${search}` : ""}${
          status ? `&status=${status}` : ""
        }`
      );
      this.isLoading = false;
      return data;
    },
  },
});
