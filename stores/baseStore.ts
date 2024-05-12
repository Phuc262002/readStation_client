import { defineStore } from "pinia";

export const useBaseStore = defineStore("base-store", {
  state: () => {
    return {};
  },

  actions: {
    async getProvinces() {
      const data: any = await useFetch(
        "https://online-gateway.ghn.vn/shiip/public-api/master-data/province",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: "4ea3750f-0e12-11ef-be43-f60ece3fb56e",
          },
        }
      );
      return data;
    },
    async getDistricts(provinceId: any) {
      const data: any = await useFetch(
        "https://online-gateway.ghn.vn/shiip/public-api/master-data/district",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: "4ea3750f-0e12-11ef-be43-f60ece3fb56e",
          },
          body: JSON.stringify({
            province_id: provinceId,
          }),
        }
      );
      return data;
    },
    async getWards(districtsId: any) {
      console.log(1);
      const data: any = await useFetch(
        `https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id=${districtsId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: "4ea3750f-0e12-11ef-be43-f60ece3fb56e",
          },
        }
      );
      return data;
    },
  },
});
