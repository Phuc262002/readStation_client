import { defineStore } from "pinia";

export const useBookStore = defineStore("book-store", {
  state: () => {
    return {
      books: [],
    };
  },

  actions: {
    async getAuthorFeatured() {
      const data: any = await useCustomFetch("/home/get-feautured-author");
      return data;
    },
  },
});
