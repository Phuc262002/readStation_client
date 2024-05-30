import { defineStore } from "pinia";

export const usePostStore = defineStore("post-store", {
  state: () => {
    return {
      posts: [],
    };
  },
  actions: {
    async getPost({ page, pageSize, category_id }: any) {
      const data: any = await useCustomFetch(
        `/api/v1/posts?${page ? `&page=${page}` : ""}${
          pageSize ? `&pageSize=${pageSize}` : ""
        }
          ${category_id ? `&category_id=${category_id}` : ""}`
      );
      this.posts = data.data._value?.data;
      return data;
    },
  },
});
