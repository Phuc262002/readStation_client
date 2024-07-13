import { defineStore } from "pinia";
export const useReturnHistoryStore = defineStore("return-history-store", {
    state: () => {
        return {
            ReturnHistoryAdmin: [],
            ReturnLoanDetail: {},
            isLoading: false,
        };
    },
    actions: {
        async getAllReturnHistory({ page, pageSize }: any) {
            this.isLoading = true;
            const data: any = await useCustomFetch(
                `/api/v1/admin/return-histories?${page ? `&page=${page}` : ""}${
                    pageSize ? `&pageSize=${pageSize}` : ""
                }`
            );
            this.ReturnHistoryAdmin = data.data._value?.data;
            this.isLoading = false;
            return data;
        },
        async getOneReturnHistory(id: string) {
            this.isLoading = true;
            const data: any = await useCustomFetch(`/api/v1/admin/return-histories/${id}`);
            this.ReturnLoanDetail = data.data._value?.data;
            this.isLoading = false;
            return data;
        }
    },
})