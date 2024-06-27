import create from "@ant-design/icons-vue/lib/components/IconFont";
import { defineStore } from "pinia";
export const useUserStore = defineStore("user-store", {
  state: () => {
    return {
      userAdmin: [],
      user: {},
      isLoading: false,
      isSubmitting: false,
    };
  },
  persist: true,
  actions: {
    async getUser({ page, pageSize, search, status }: any) {
      try {
        this.isLoading = true;
        const data: any = await useCustomFetch(
          `/api/v1/admin/users?${page ? `&page=${page}` : ""}${
            pageSize ? `&pageSize=${pageSize}` : ""
          }${search ? `&search=${search}` : ""}${
            status ? `&status=${status}` : ""
          }`
        );
        this.userAdmin = data.data._value?.data;

        return data;
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
    async getOneUser(id: any) {
      try {
        this.isLoading = true;
        const data: any = await useCustomFetch(
          `/api/v1/admin/users/get-one/${id}`
        );
        this.user = data.data._value?.data;
        return data;
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
    async createUser(user: any) {
      try {
        this.isSubmitting = true;
        const data: any = await useCustomFetch(`/api/v1/admin/users/create`, {
          method: "POST",
          body: JSON.stringify(user),
        });
        this.isSubmitting = false;
        return data;
      } catch (error) {
        console.log(error);
      }
    },

    async updateUser({ user, id }: any) {
      try {
        this.isSubmitting = true;
        const data: any = await useCustomFetch(
          `/api/v1/admin/users/update/${id}`,
          {
            method: "PUT",
            body: JSON.stringify(user),
          }
        );
        return data;
      } catch (error) {
        console.log(error);
      } finally {
        this.isSubmitting = false;
      }
    },
    // async createOrder(body: any) {
    //   const data: any = await useCustomFetch("/api/v1/account/order/create", {
    //     method: "POST",
    //     body: JSON.stringify(body),
    //   });
    //   return data;
    // },

    // async getAllOrder({ page, pageSize, status, search }: any) {
    //   const data: any = await useCustomFetch(
    //     `/api/v1/account/order/get-all?${page ? `&page=${page}` : ""}${
    //       pageSize ? `&pageSize=${pageSize}` : ""
    //     }${status ? `&status=${status}` : ""}${
    //       search ? `$search=${search}` : ""
    //     }`
    //   );
    //   this.orders = data.data._value?.data;
    //   return data;
    // },
    // async getAllPost({ page, pageSize, search, status, category_id }: any) {
    //   const data: any = await useCustomFetch(
    //     `/api/v1/account/get-posts?${page ? `&page=${page}` : ""}${
    //       pageSize ? `&pageSize=${pageSize}` : ""
    //     }${search ? `&search=${search}` : ""}${
    //       status ? `&status=${status}` : ""
    //     }${category_id ? `&category_id=${category_id}` : ""}`
    //   );
    //   this.posts = data.data._value?.data;
    //   return data;
    // },
    // async getAllComment({ page, pageSize, sort }: any) {
    //   const data: any = await useCustomFetch(
    //     `/api/v1/account/get-comments?${page ? `&page=${page}` : ""}${
    //       pageSize ? `&pageSize=${pageSize}` : ""
    //     }${sort ? `&sort=${sort}` : ""}`
    //   );
    //   this.comments = data.data._value?.data;
    //   return data;
    // },
  },
});
