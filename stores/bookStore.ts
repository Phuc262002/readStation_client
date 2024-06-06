import create from "@ant-design/icons-vue/lib/components/IconFont";
import { defineStore } from "pinia";

export const useBookStore = defineStore("book-store", {
  state: () => {
    return {
      books: [],
      adminBooks: [],
      isLoading: false,
      isSubmitting: false,
    };
  },
  actions: {
    async getAllBooks() {
      const data: any = await useCustomFetch("/api/v1/books");
      this.books = data.data._value?.data;
      return data;
    },

    async createBook(valuecreateBook: any) {
      this.isSubmitting = true;
      const data: any = await useCustomFetch("/api/v1/books/create-full", {
        method: "POST",
        body: JSON.stringify(valuecreateBook),
      });
      this.isSubmitting = false;
      return data;
    },
    async getAdminBooks({
      page,
      pageSize,
      search,
      category_id,
      author_id,
      status,
    }: any) {
      this.isLoading = true;
      const data: any = await useCustomFetch(
        `/api/v1/books/admin/get-all?${page ? `&page=${page}` : ""}${
          pageSize ? `&pageSize=${pageSize}` : ""
        }${search ? `&search=${search}` : ""}${
          category_id ? `&category_id=${category_id}` : ""
        }${author_id ? `&author_id=${author_id}` : ""}${
          status ? `&status=${status}` : ""
        }`
      );
      this.adminBooks = data.data._value?.data;
      this.isLoading = false;
      return data;
    },
    async deleteBook(id: string) {
      const data: any = await useCustomFetch(`/api/v1/books/delete/${id}`, {
        method: "DELETE",
      });
      return data;
    }
  },
});
