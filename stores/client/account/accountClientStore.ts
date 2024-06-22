import { defineStore } from "pinia";

export const useAccountClientStore = defineStore("account-client-store", {
  state: () => {
    return {
      account: [],
      isLoading: false,
      isSubmitting: false,
    };
  },
  persist: true,
  actions: {
    async getProfile() {
      this.isLoading = true;
      const data: any = await useCustomFetch("/api/v1/account/get-profile");

      this.account = data.data._value?.data;
      this.isLoading = false;
      return data;
    },
    async updateProfile(body: any) {
      const data: any = await useCustomFetch("/api/v1/account/update-profile", {
        method: "PUT",
        body: JSON.stringify(body),
      });
      return data;
    },
  },
});
