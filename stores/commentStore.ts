import { defineStore } from "pinia";

export const useCommentStore = defineStore("comment-store", {
  state: () => {
    return {
      comment: [],
      commentAdmin: [],
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
    async getAllComment({ page, pageSize, status }: any) {
      try {
        this.isLoading = true;
        const data: any = await useCustomFetch(
          `/api/v1/comments/admin/get-all?${page ? `&page=${page}` : ""}${
            pageSize ? `&pageSize=${pageSize}` : ""
          }${status ? `&status=${status}` : ""}`
        );
        this.commentAdmin = data.data._value?.data;
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
    async deleteComment({ comment_id }: any) {
      try {
        const data: any = await useCustomFetch(
          `/api/v1/comments/delete/${comment_id}`,
          {
            method: "DELETE",
          }
        );
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async updateComment({ comment_id, content, status }: any) {
      try {
        this.isSubmitting = true;
        const data: any = await useCustomFetch(
          `/api/v1/comments/update/${comment_id}`,
          {
            method: "PUT",
            body: {
              content: content,
              status: status ?? "published",
            },
          }
        );
        this.isSubmitting = false;
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
