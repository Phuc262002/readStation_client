import { defineStore } from "pinia"; 

export const useBookStore = defineStore("book-store", {
  state: () => {
    return {
      books: [],
    };
  },

  actions: {
    async getAuthorFeatured() {
      const data: any = await useCustomFetch("/api/v1/home/get-feautured-author");
      return data;
    },
    async getAllBooks() {
      const data: any = await useCustomFetch("/api/v1/books");
      return data;
    },
  },
});
