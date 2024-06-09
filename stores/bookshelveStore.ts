import { defineStore } from "pinia";
export const useShelvesStore = defineStore("shelves-store", {
  state: () => {
    return {
      isSubmitting: false,
      isLoading: false,
    };
  },
  actions: {
    async getAllShelves({
      page,
      pageSize,
      status,
      search,
      category_id,
      bookcase_id,
    }: any) {
      this.isLoading = true;
      const data: any = await useCustomFetch(
        `/api/v1/shelves?${page ? `&page=${page}` : ""}${
          pageSize ? `&pageSize=${pageSize}` : ""
        }${search ? `&search=${search}` : ""}${
          status ? `&status=${status}` : ""
        }${category_id ? `&category_id=${category_id}` : ""}${
          bookcase_id ? `&bookcase_id=${bookcase_id}` : ""
        }`
      );
      this.isLoading = false;
      return data;
    },
    async createShelves(valueCreateShelves: any) {
      this.isSubmitting = true;
      const data: any = await useCustomFetch(`/api/v1/shelves/create`, {
        method: "POST",
        body: JSON.stringify(valueCreateShelves),
      });
      this.isSubmitting = false;
      return data;
    },
    async deleteShelves(id: string) {
      const data: any = await useCustomFetch(`/api/v1/shelves/delete/${id}`, {
        method: "DELETE",
      });
      return data;
    },
    async getOneShelves(id: number) {
      this.isLoading = true;
      const data: any = await useCustomFetch(`/api/v1/shelves/get-one/${id}`);
      this.isLoading = false;
      return data;
    },
    async updateShelves({ id, valueUpdateShelves }: any) {
      this.isSubmitting = true;
      const data: any = await useCustomFetch(`/api/v1/shelves/update/${id}`, {
        method: "PUT",
        body: JSON.stringify(valueUpdateShelves),
      });
      this.isSubmitting = false;
      return data;
    },
  },
});
