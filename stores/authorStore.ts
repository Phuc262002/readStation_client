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
        }
    }
});