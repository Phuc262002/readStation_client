import { defineStore } from "pinia";
export const useBookReviewStore = defineStore("book-review-store", {
  state: () => {
    return {
      isLoading: false,
      adminBookReviews: [],
      adminGetOneBookReview: {},
    };
  },
  actions: {
    async getAllBookReviews({ page, pageSize, rating }: any) {
      this.isLoading = true;
      const data = await useCustomFetch(
        `/api/v1/admin/book-reviews?${page ? `&page=${page}` : ""}${
          pageSize ? `&pageSize=${pageSize}` : ""
        }${rating ? `&rating=${rating}` : ""}`
      );
      this.adminBookReviews = data?.data?._value?.data;
      this.isLoading = false;
      return data;
    },
    async getOneBookReview(book_details_id: string) {
      this.isLoading = true;
      const data = await useCustomFetch(`/api/v1/admin/book-reviews/${book_details_id}`);
      this.adminGetOneBookReview = data?.data?._value?.data;
      this.isLoading = false;
      return data;
    },
  },
});
