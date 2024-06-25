import { defineStore } from "pinia";

export const usePublishingCompanyPublicStore = defineStore(
  "publishing-public-store",
  {
    state: () => {
      return {
        publishingCompany: [],
        isSubmitting: false,
        isLoading: false,
      };
    },
    actions: {
      // client
      async getAllPublishingCompanyClient() {
        const data: any = await useCustomFetch(
          "/api/v1/public/publishing-companies"
        );
        this.publishingCompany = data.data._value?.data;
        return data;
      },
    },
  }
);
