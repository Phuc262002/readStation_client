import { defineStore } from "pinia";

export const useHomeStore = defineStore("home-store", {
  state: () => {
    return {
 
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
      
      return data;
    },
    async getAuthorFeatured() {
      const data: any = await useCustomFetch(
        "/api/v1/home/get-feautured-author"
      );
      
      return data;
    },
    async getRecomendedBooks() {
        const data : any = await useCustomFetch("/api/v1/home/get-recommend-book");
 
        return data;
    },
    async getLastestBook() {
        const data : any = await useCustomFetch("/api/v1/home/get-book-lastest");
        return data;
    },
    async getStatistic(){
        const data : any = await useCustomFetch("/api/v1/home/get-statistic");
        
        return data;
    }
  },
});
