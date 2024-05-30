import { defineStore } from "pinia";
export const useAuthorStore = defineStore("author-store", {
    state: () => {
      return {
        AuthorAdmin: [],
      };
    },
    actions: {
        async getAllAuthor() {
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
            const data: any = await useCustomFetch(
              `/api/v1/authors/delete/${id}`,
              {
                method: "DELETE",
              }
            );
            return data;
          },
          async updateAuthor(id: string, ValueAuthor: any) {
            const data: any = await useCustomFetch(
              `/api/v1/authors/update/${id}`,
              {
                method: "PUT",
                body: JSON.stringify(ValueAuthor),
              }
            );
            return data;
          },
          async getAuthorById(id: string) {
            const data: any = await useCustomFetch(`/api/v1/authors/${id}`);
            return data;
          }
    }
});