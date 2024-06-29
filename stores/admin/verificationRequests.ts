import { defineStore } from "pinia";

export const useVerificationRequestsStore = defineStore(
  "verificationRequests-store",
  {
    state: () => {
      return {
        verificationRequestsAdmin: [],
        oneVerificationRequest: {},
        isSubmitting: false,
        isLoading: false,
      };
    },
    actions: {
      async getVerificationRequests({
        page,
        pageSize,
        verification_card_type,
        status,
      }: any) {
        this.isLoading = true;
        const data: any = await useCustomFetch(
          `/api/v1/admin/verification-requests?${page ? `&page=${page}` : ""}${
            pageSize ? `&pageSize=${pageSize}` : ""
          }${
            verification_card_type
              ? `&verification_card_type=${verification_card_type}`
              : ""
          }${status ? `&status=${status}` : ""}`
        );
        this.verificationRequestsAdmin = data.data._value?.data;
        this.isLoading = false;
        return data;
      },
      async getOneVerificationRequest(id: any) {
        this.isLoading = true;
        const data: any = await useCustomFetch(
          `/api/v1/admin/verification-requests/${id}`
        );
        this.oneVerificationRequest = data.data._value?.data;
        this.isLoading = false;
        return data;
      },
      async updateVerificationRequestStatus({ id, body }: any) {
        this.isSubmitting = true;
        const data: any = await useCustomFetch(
          `/api/v1/admin/verification-requests/update/${id}`,
          {
            method: "PUT",
            body: JSON.stringify(body),
          }
        );
        this.isSubmitting = false;
        return data;
      },
    },
  }
);
