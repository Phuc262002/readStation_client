import { defineStore } from "pinia";

export const useCommentStore = defineStore("comment-store", {
  state: () => {
    return {
      comment: [],
      isLoading: false,
      isSubmitting: false,
    };
  },
  actions: {
    async getComment({ page, pageSize, post_id }: any) {
      try {
        this.isLoading = true;
        const data: any = await useCustomFetch(
          `/api/v1/comments?${page ? `&page=${page}` : ""}${
            pageSize ? `&pageSize=${pageSize}` : ""
          }${post_id ? `&post_id=${post_id}` : ""}`
        );
        this.comment = data.data._value?.data;
        this.isLoading = false;
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async createComment(comment: any) {
      try {
        this.isSubmitting = true;
        const data: any = await useCustomFetch("/api/v1/comments/create", {
          method: "POST",
          body: JSON.stringify(comment),
        });
        this.isSubmitting = false;
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
