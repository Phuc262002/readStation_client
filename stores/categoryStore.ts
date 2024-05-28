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
        `/api/v1/categories/admin/get-all?type=${type}${page ? `&page=${page}` : ""}${
          pageSize ? `&pageSize=${pageSize}` : ""
        }${search ? `&search=${search}` : ""}${
          status ? `&status=${status}` : ""
        }`
      );
      this.categoriesAdmin = data.data._value?.data;
      return data;
    },
    async createCategory(category: any) {
      const data: any = await useCustomFetch(`/api/v1/categories/create`, {
        method: "POST",
        body: JSON.stringify(category),
      });
      return data;
    },
    async deleteCategory(id: string) {
      const data: any = await useCustomFetch(`/api/v1/categories/${id}`, {
        method: "DELETE",
      });
      return data;
    },
    async updateCategory(id: string, category: any) {
      const data: any = await useCustomFetch(`/api/v1/categories/${id}`, {
        method: "PUT",
        body: JSON.stringify(category),
      });
      return data;
    },
  },
});
