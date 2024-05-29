import { defineStore } from "pinia";

export const usePublishingCompanyStore = defineStore("publishingCompany-store", {
  state: () => {
    return {
      publishingCompaniesAdmin: [],
    };
  },
  actions: {
    async getAllPublishingCompany({ page, pageSize, search, status }: any) {
      const data: any = await useCustomFetch(
        `/api/v1/publishing-companies/admin/get-all?${
          page ? `&page=${page}` : ""
        }${pageSize ? `&pageSize=${pageSize}` : ""}${
          search ? `&search=${search}` : ""
        }${status ? `&status=${status}` : ""}`
      );console.log(data);
      
      this.publishingCompaniesAdmin = data.data._value?.data;
      return data;
    },
  },
});
