import { defineStore } from "pinia";
export const useShelvesStore = defineStore("shelves-store", {
    state: () => {
      return {
      };
    },
    actions : {
        async getAllShelves({page, pageSize,status, search,category_id, bookcase_id}: any ) {
            const data : any = await useCustomFetch(`/api/v1/shelves`);
            return data;
        }
    },
});