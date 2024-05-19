import { defineStore } from 'pinia'

export const useCategoryStore = defineStore("category-store", {
    state: () => {
        return {}
    },
	actions: {
		async getAll({page, pageSize, search, status, type }: any) {
            const data: any = await useCustomFetch(`/categories?type=${type}${page ? `&page=${page}` : ''}${pageSize ? `&pageSize=${pageSize}` : ''}${search ? `&search=${search}` : ''}${status ? `&status=${status}` : ''}`);
             return data;  
        },
	},
});