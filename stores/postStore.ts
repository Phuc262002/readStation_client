import { defineStore } from "pinia";

export const usePostStore = defineStore("post-store", {
  state: () => {
    return {
      posts: [],
      postsPopular: [],
      postsAdmin: [],
      post: {},
      isLoading: false,
      isSubmitting: false,
    };
  },
  actions: {
    async getPost({ page, pageSize, category_id, sort }: any) {
      try {
        this.isLoading = true;
        const data: any = await useCustomFetch(
          `/api/v1/posts?${
            page ? `&page=${page}` : ""
          }${pageSize ? `&pageSize=${pageSize}` : ""}${
            category_id ? `&category_id=${category_id}` : ""
          }${sort ? `&sort=${sort}` : ""
          }`
        );
        // this.posts = data.data._value?.data;
        this.posts = data.data._value;
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async getAllPost({ page, pageSize, search, category_id, status, type }: any) {
      try {
        this.isLoading = true;
        const data: any = await useCustomFetch(
          `/api/v1/posts/admin/get-all?${
            page ? `&page=${page}` : ""
          }${pageSize ? `&pageSize=${pageSize}` : ""}${
            search ? `&search=${search}` : ""
          }${category_id ? `&category_id=${category_id}` : ""}${
            status ? `&status=${status}` : ""
          }${type ? `&type=${type}` : ""}`
        );
        this.postsAdmin = data.data._value?.data;
        this.isLoading = false;
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async getOnePost(slug: string) { 
      try {
        this.isLoading = true;
        const data: any = await useCustomFetch(`/api/v1/posts/get-one/${slug}`);
        this.post = data.data._value?.data;
        this.isLoading = false;
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async getOnePostAdmin(id: string) { 
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
    async deletePost(id: string) {
      try {
        this.isSubmitting = true;
        const data: any = await useCustomFetch(`/api/v1/posts/delete/${id}`, {
          method: "DELETE",
        });
        this.isSubmitting = false;
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async updatePost({ id, post }: any) {
      try {
        this.isSubmitting = true;
        const data: any = await useCustomFetch(`/api/v1/posts/update/${id}`, {
          method: "PUT",
          body: JSON.stringify(post),
        });
        this.isSubmitting = false;
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    
  },
});
