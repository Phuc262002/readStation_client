import { defineStore } from "pinia";

export const useCategoryStore = defineStore("category-store", {
  state: () => {
    return {
      categoriesAdmin: [],
    };
  },
  actions: {
    async getAllCategory({ page, pageSize, search, status, type }: any) {
      const data: any = await useCustomFetch(
        `/categories?type=${type}${page ? `&page=${page}` : ""}${
          pageSize ? `&pageSize=${pageSize}` : ""
        }${search ? `&search=${search}` : ""}${
          status ? `&status=${status}` : ""
        }`
      );
      this.categoriesAdmin = data.data._value?.data;
      return data;
    },
    async createCategory(category: any) {
      const data: any = await useCustomFetch(`/categories/create`, {
        method: "POST",
        body: JSON.stringify(category),
      });
      return data;
    },
  },
});
