import { defineStore } from "pinia";
import create from '@ant-design/icons-vue/lib/components/IconFont';
export const useShelvesStore = defineStore("shelves-store", {
    state: () => {
      return {

      };
    },
    actions : {
        async getAllShelves({page, pageSize,status, search,category_id, bookcase_id}: any ) {
            const data : any = await useCustomFetch(`/api/v1/shelves`);
            return data;
        },
        async createShelves(valueSheves: any) {
            const data : any = await useCustomFetch(`/api/v1/shelves/create`, {
                method: "POST",
                body: JSON.stringify(valueSheves),
            });
            return data;
        }

    },
    
});