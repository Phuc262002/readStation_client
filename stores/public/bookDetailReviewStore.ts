import { defineStore } from "pinia";

export const useBookDetailReviewStore = defineStore("book-detail-review", {
  state: () => {
    return {
      reviews: [],
      isLoading: false,
      isSubmitting: false,
    };
  },
  actions: {
    async getAllReviewBook({
      book_details_id,
      page,
      pageSize,
      rating,
      sort,
    }: any) {
      const data: any = await useCustomFetch(
        `/api/v1/public/book-reviews/${book_details_id}?${
          page ? `&page=${page}` : ""
        }${pageSize ? `&pageSize=${pageSize}` : ""}${
          rating ? `&rating=${rating}` : ""
        }${sort ? `&sort=${sort}` : ""}`
      );
      this.reviews = data.data._value?.data;
      return data;
    },
  },
});
