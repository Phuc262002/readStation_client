import { defineStore } from "pinia";

export const useBookDetailStore = defineStore("bookdetail-store", {
  state() {
    return {
      isSubmitting: false,
      isLoading: false,
      getAllBookdetailAdmin: [],
      getOneBookDetailAdmin: [],
    };
  },
  actions: {
    async getAllBookDetail({
      page,
      pageSize,
      search,
      category_id,
      author_id,
      status,
    }: any) {
      this.isLoading = true;
      const data = await useCustomFetch(
        `/api/v1/book-details?${page ? `&page=${page}` : ""}${
          pageSize ? `&pageSize=${pageSize}` : ""
        }${search ? `&search=${search}` : ""}${
          category_id ? `&category_id=${category_id}` : ""
        }${author_id ? `&author_id=${author_id}` : ""}${
          status ? `&status=${status}` : ""
        }`
      );
      this.getAllBookdetailAdmin = data.data._value?.data;
      this.isLoading = false;
      return data;
    },
    async getOneBookDetail(id: string) {
      this.isLoading = true;
      const data = await useCustomFetch(`/api/v1/book-details/get-one/${id}`);
      this.getOneBookDetailAdmin = data.data._value?.data;
      this.isLoading = false;
      return data;
    },
  },
});
