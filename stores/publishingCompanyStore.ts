import { defineStore } from "pinia";

export const usePublishingCompanyStore = defineStore(
  "publishingCompany-store",
  {
    state: () => {
      return {
        publishingCompaniesAdmin: [],
        isSubmitting: false,
        isLoading: false,
      };
    },
    actions: {
      async getAllPublishingCompany({ page, pageSize, search, status }: any) {
        this.isLoading = true;
        const data: any = await useCustomFetch(
          `/api/v1/publishing-companies/admin/get-all?${
            page ? `&page=${page}` : ""
          }${pageSize ? `&pageSize=${pageSize}` : ""}${
            search ? `&search=${search}` : ""
          }${status ? `&status=${status}` : ""}`
        );
        this.publishingCompaniesAdmin = data.data._value?.data;
        this.isLoading = false;
        return data;
      },
      async getOnePublishingCompany(id : number) {
        this.isLoading = true;
        const data: any = await useCustomFetch(
          `/api/v1/publishing-companies/get-one/${id}`
        );
        this.isLoading = false;
        return data;

      },
      
      async createPublishingCompany(publishingCompany: any) {
        this.isSubmitting = true;
        const data: any = await useCustomFetch(
          `/api/v1/publishing-companies/create`,
          {
            method: "POST",
            body: JSON.stringify(publishingCompany),
          }
        );
        this.isSubmitting = false;
        return data;
      },
      async deletePublishingCompany(id: string) {
        const data: any = await useCustomFetch(
          `/api/v1/publishing-companies/delete/${id}`,
          {
            method: "DELETE",
          }
        );
        return data;
      },
    
      async updatePublishingCompany({id, publishingCompany}: any) {
        this.isSubmitting = true;
        const data: any = await useCustomFetch(
          `/api/v1/publishing-companies/update/${id}`,
          {
            method: "PUT",
            body: JSON.stringify(publishingCompany),
          }
        );
        this.isSubmitting = false;
        return data;
      },
    },
  }
);
