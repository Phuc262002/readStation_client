import { defineStore } from "pinia";
export const useBookcaseStore = defineStore("bookcase-store", {
  state: () => {
    return {
      bookCaseAdmin: [],
      bookCase:{},
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
      this.bookCaseAdmin = data.data._value?.data;
      return data;
    },
    async getOneBookcase(id: string) {
      this.isLoading = true;
      const data: any = await useCustomFetch(`/api/v1/bookcases/get-one/${id}`);
      this.isLoading = false;
      this.bookCase = data.data._value?.data;
      return data;
    },
    async createBookcase(bookcase: any) {
      this.isSubmitting = true;
      const data: any = await useCustomFetch(`/api/v1/bookcases/create`, {
        method: "POST",
        body: JSON.stringify(bookcase),
      });
      this.isSubmitting = false;
      return data;
    },
    async deleteBookcase(id: string) {
      const data: any = await useCustomFetch(`/api/v1/bookcases/delete/${id}`, {
        method: "DELETE",
      });
      return data;
    },
    async updateBookcase({ id, bookcase }: any) {
      this.isSubmitting = true;
      const data: any = await useCustomFetch(`/api/v1/bookcases/update/${id}`, {
        method: "PUT",
        body: JSON.stringify(bookcase),
      });
      this.isSubmitting = false;
      return data;
    },
  },
});
