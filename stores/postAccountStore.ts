import { defineStore } from "pinia";
export const usePostAccountStore = defineStore("postacc-store", {
  state: () => {
    return {
      post: {},
      isLoading: false,
      isSubmitting: false,
    };
  },
  actions: {
    //Get all Account post

    // Create a post
    async createPost(post: any) {
      try {
        this.isSubmitting = true;
        const data: any = await useCustomFetch("/api/v1/posts/create", {
          method: "POST",
          body: JSON.stringify(post),
        });
        this.isSubmitting = false;
        return data;
      } catch (error) {
        console.log(error);
      }
    },

    // Get one post
    async getOnePost(id: string) {
      try {
        this.isLoading = true;
        const data: any = await useCustomFetch(`/api/v1/posts/get/${id}`);
        this.post = data.data._value?.data;
        this.isLoading = false;
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
