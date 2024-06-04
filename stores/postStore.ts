import { defineStore } from "pinia";

export const usePostStore = defineStore("post-store", {
  state: () => {
    return {
      posts: [],
      post: {},
    };
  },
  actions: {
    async getPost({ page, pageSize, category_id }: any) {
      try {
        const data: any = await useCustomFetch(
          `/api/v1/posts?${
            page ? `&page=${page}` : ""
          }${pageSize ? `&pageSize=${pageSize}` : ""}${
            category_id ? `&category_id=${category_id}` : ""
          }`
        );
        this.posts = data.data._value?.data;
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async getOnePost(slug: string) { 
      try {
        const data: any = await useCustomFetch(`/api/v1/posts/get-one/${slug}`);
        this.post = data.data._value?.data;
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async createPost(post: any) {
      try {
        const data: any = await useCustomFetch("/api/v1/posts/create", {
          method: "POST",
          body: JSON.stringify(post),
        });
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async deletePost(id: string) {
      try {
        const data: any = await useCustomFetch(`/api/v1/posts/delete/${id}`, {
          method: "DELETE",
        });
        return data;
      } catch (error) {
        console.log(error);
      }
    }
    
  },
});
