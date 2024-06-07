import { defineStore } from "pinia";
export const useAuthorStore = defineStore("author-store", {
  state: () => {
    return {
      authorClient: [],
      AuthorAdmin: [],
      isSubmitting: false,
      isLoading: false,
    };
  },
  actions: {
    async getAllAuthorClient({ page, pageSize }: any) {
      const data: any = await useCustomFetch(`/api/v1/authors`);
      this.authorClient = data.data._value?.data;
      
      return data;
    },

    async getAllAuthor({ page, pageSize, search, status }: any) {
      this.isLoading = true;
      const data: any = await useCustomFetch(
        `/api/v1/authors/admin/get-all?${page ? `&page=${page}` : ""}${
          pageSize ? `&pageSize=${pageSize}` : ""
        }${search ? `&search=${search}` : ""}${
          status ? `&status=${status}` : ""
        }`
      );
      this.AuthorAdmin = data.data._value?.data;
      this.isLoading = false;
      return data;
    },
    async createAuthor(ValueAuthor: any) {
      this.isSubmitting = true;
      const data: any = await useCustomFetch(`/api/v1/authors/create`, {
        method: "POST",
        body: JSON.stringify(ValueAuthor),
      });
      this.isSubmitting = false;
      return data;
    },
    async deleteAuthor(id: string) {
      const data: any = await useCustomFetch(`/api/v1/authors/delete/${id}`, {
        method: "DELETE",
      });
      return data;
    },
    async updateAuthor({ id, valueAuthor }: any) {
      const data: any = await useCustomFetch(`/api/v1/authors/update/${id}`, {
        method: "PUT",
        body: JSON.stringify(valueAuthor),
      });
      return data;
    },
    async getAuthorById(id: string) {
      this.isLoading = true;
      const data: any = await useCustomFetch(`/api/v1/authors/get-one/${id}`);
      this.isLoading = false;
      return data;
    },
  },
});
