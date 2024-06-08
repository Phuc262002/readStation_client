import create from "@ant-design/icons-vue/lib/components/IconFont";
import { defineStore } from "pinia";
export const useUserStore = defineStore("user-store", {
  state: () => {
    return {
      userAdmin: [],
      isLoading: false,
      isSubmitting: false,
    };
  },
  actions: {
    async getUser({ page, pageSize, search, status }: any) {
        try {
            this.isLoading = true;
            const data: any = await useCustomFetch(
            `/api/v1/users?${
                page ? `&page=${page}` : ""
            }${pageSize ? `&pageSize=${pageSize}` : ""}${
                search ? `&search=${search}` : ""
            }${status ? `&status=${status}` : ""}`
            );
            this.userAdmin = data.data._value?.data;
            this.isLoading = false;
            return data;
        } catch (error) {
            console.log(error);
        }
    },
    async createUser(user: any) {
        try {
            this.isSubmitting = true;
            const data: any = await useCustomFetch(`/api/v1/users/create`, {
            method: "POST",
            body: JSON.stringify(user),
            });
            this.isSubmitting = false;
            return data;
        } catch (error) {
            console.log(error);
        }
    },
  },
});
