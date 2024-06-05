import { defineStore } from "pinia";
export const useAuthorStore = defineStore("author-store", {
  state: () => {
    return {
      authorClient: [],
      AuthorAdmin: [],
    };
  },
  actions: {
    async getAllAuthorClient({ page, pageSize }: any) {
      const data: any = await useCustomFetch(`/api/v1/authors`);
      this.authorClient = data.data._value?.data;
      return data;
    },

    async getAllAuthor({ page, pageSize, search, status }: any) {
      const data: any = await useCustomFetch(`/api/v1/authors/admin/get-all`);
      this.AuthorAdmin = data.data._value?.data;
      return data;
    },
    async createAuthor(ValueAuthor: any) {
      const data: any = await useCustomFetch(`/api/v1/authors/create`, {
        method: "POST",
        body: JSON.stringify(ValueAuthor),
      });
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
      const data: any = await useCustomFetch(`/api/v1/authors/get-one/${id}`);
      return data;
    },
  },
});
