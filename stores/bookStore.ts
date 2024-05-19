import { defineStore } from "pinia";

export const useBookStore = defineStore("book-store", {
  state: () => {
    return {
      books: [],
    };
  },

  actions: {
    async getAllBooks() {
      const data: any = await useCustomFetch("/books");
      return data;
    },
  },
});
