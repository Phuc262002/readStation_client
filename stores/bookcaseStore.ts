import { defineStore } from "pinia";
export const useBookcaseStore = defineStore("bookcase-store", {
  state: () => {
    return {};
  },
  actions: {
    async getAllBookcases({ page, pageSize, status, search }: any) {
      const data: any = await useCustomFetch(
        `/api/v1/bookcases?${page ? `&page=${page}` : ""}${
          pageSize ? `&pageSize=${pageSize}` : ""
        }${search ? `&search=${search}` : ""}${
          status ? `&status=${status}` : ""
        }`
      );
      return data;
    },
  },
});
