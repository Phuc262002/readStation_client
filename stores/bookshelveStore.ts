import { defineStore } from "pinia";
export const useShelvesStore = defineStore("shelves-store", {
    state: () => {
      return {
        isSubmitting: false,
        isLoading: false,
      };
    },
    actions : {
        async getAllShelves({page, pageSize,status, search,category_id, bookcase_id}: any ) {
            const data : any = await useCustomFetch(`/api/v1/shelves`);
             this.isLoading = false;
            return data;
           
        },
        async createShelves(valueCreateShelves: any) {
            const data : any = await useCustomFetch(`/api/v1/shelves/create`, {
                method: "POST",
                body: JSON.stringify(valueCreateShelves),
            });
            this.isSubmitting = false;
            return data;
        },
        async deleteShelves(id: string) {
            const data : any = await useCustomFetch(`/api/v1/shelves/delete/${id}`, {
                method: "DELETE",
            });
            return data;
        },
        async updateShelves({id, valueUpdateShelves}: any) {
            const data : any = await useCustomFetch(`/api/v1/shelves/update/${id}`, {
                method: "PUT",
                body: JSON.stringify(valueUpdateShelves),
            });
            return data;
        },

    },
    
});