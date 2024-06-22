import { defineStore } from "pinia";

export const useCommentClientStore = defineStore("comment-client-store", {
  state: () => {
    return {
      comments: [],
      isLoading: false,
      isSubmitting: false,
    };
  },
  persist: true,
  actions: {
    async getAllComment({ page, pageSize, sort }: any) {
      const data: any = await useCustomFetch(
        `/api/v1/account/get-comments?${page ? `&page=${page}` : ""}${
          pageSize ? `&pageSize=${pageSize}` : ""
        }${sort ? `&sort=${sort}` : ""}`
      );
      this.comments = data.data._value?.data;
      return data;
    },
  },
});
