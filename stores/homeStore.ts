import { defineStore } from "pinia";

export const useHomeStore = defineStore("home-store", {
  state: () => {
    return {
      isLoading: false,
    };
  },
  actions: {
    async getFeauturedCategory() {
      const data: any = await useCustomFetch(
        `/api/v1/home/get-feautured-category`
      );

      return data;
    },
    async getBookFeatured() {
      const data: any = await useCustomFetch("/api/v1/home/get-feautured-book");
      this.isLoading = false;
      return data;
    },
    async getAuthorFeatured() {
      const data: any = await useCustomFetch(
        "/api/v1/home/get-feautured-author"
      );
      this.isLoading = false;
      return data;
    },
    async getRecomendedBooks() {
        const data : any = await useCustomFetch("/api/v1/home/get-recommend-book");
        this.isLoading = false;
        return data;
    },
    async getLastestBook() {
        const data : any = await useCustomFetch("/api/v1/home/get-book-lastest");
        this.isLoading = false;
        return data;
    },
    async getStatistic(){
        const data : any = await useCustomFetch("/api/v1/home/get-statistic");
        this.isLoading = false;
        return data;
    }
  },
});
