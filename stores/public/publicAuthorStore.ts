import { defineStore } from "pinia";
export const useAuthorPublicStore = defineStore("author-public-store", {
  state: () => {
    return {
      authorClient: [],
      isSubmitting: false,
      isLoading: false,
    };
  },
  actions: {
    async getAllAuthorClient({ page, pageSize }: any) {
      const data: any = await useCustomFetch(`/api/v1/public/authors`);
      this.authorClient = data.data._value?.data;
      return data;
    },
  },
});
