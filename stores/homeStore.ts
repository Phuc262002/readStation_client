import { defineStore } from "pinia";

export const useHomeStore = defineStore("home-store", {
  state: () => {
    return {
      categoryHome: [],
      getbookFeatured: [],
      getauthorFeatured: [],
      getRecommend: [],
      getLatest: [],
      getStatisticc: [],
      isLoading: false,
    };
  },
  actions: {
    async getFeauturedCategory() {
      this.isLoading = true;
      const data: any = await useCustomFetch(
        `/api/v1/home/get-feautured-category`
      );
      this.categoryHome = data.data._value?.data;
      this.isLoading = false;
      return data;
    },
    async getBookFeatured() {
      this.isLoading = true;
      const data: any = await useCustomFetch("/api/v1/home/get-feautured-book");
      this.getbookFeatured = data.data._value?.data;
      this.isLoading = false;
      return data;
    },
    async getAuthorFeatured() {
      this.isLoading = true;
      const data: any = await useCustomFetch(
        "/api/v1/home/get-feautured-author"
      );
      this.getauthorFeatured = data.data._value?.data;
      this.isLoading = false;
      return data;
    },
    async getRecomendedBooks() {
      this.isLoading = true;
      const data: any = await useCustomFetch("/api/v1/home/get-recommend-book");
      this.getRecommend = data.data._value?.data;
      this.isLoading = false;
      return data;
    },
    async getLastestBook() {
      this.isLoading = true;
      const data: any = await useCustomFetch("/api/v1/home/get-book-lastest");
      this.getLatest = data.data._value?.data;
      this.isLoading = false;
      return data;
    },
    async getStatistic() {
      this.isLoading = true;
      const data: any = await useCustomFetch("/api/v1/home/get-statistic");
      this.getStatisticc = data.data._value?.data;
      this.isLoading = false;
      return data;
    },
  },
});
