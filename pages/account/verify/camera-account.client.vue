<template>
  <div class="space-y-5">
    <Head>
      <Title>ReadStation | Xác thực CMT/CCCD</Title>
    </Head>
    <h3 class="font-bold mb-5">Xác thực CMT/CCCD</h3>
    <div
      class="flex flex-col space-y-5 items-center bg-white shadow-md rounded-md pb-10 min-h-[700px] pt-10"
    >
      <video
        ref="video"
        v-if="cameraOn"
        class="rounded-lg w-[1/2]"
        autoplay
        playsinline
      ></video>
      <img v-if="!cameraOn" src="assets/images/camera.png" alt="" />
      <a-button
        @click="toggleCamera"
        class="h-10 text-base !text-orange-500 border-orange-500"
      >
        {{ cameraOn ? "Tắt máy ảnh" : "Bật máy ảnh" }}
      </a-button>
      <button
        v-if="cameraOn"
        @click="capturePhoto"
        class="bg-tag-text-10 border-none text-white rounded-lg h-10 px-16"
      >
        Chụp ảnh
      </button>
      <div v-if="photos.length" class="flex space-x-10">
        <div v-for="(photo, index) in photos" :key="index" class="text-center">
          <p>{{ index === 0 ? "Hình mặt trước" : "Hình mặt sau" }}</p>
          <img :src="photo" class="rounded-lg w-[1/2]" />
          <button @click="deletePhoto(index)" class="text-tag-text-06">
            Xóa
          </button>
        </div>
      </div>
      <div v-if="Object.keys(errors).length" class="space-y-2 mb-4">
        <a-alert
          v-for="(error, index) in errors"
          :key="index"
          :message="error"
          type="error"
          show-icon
        />
      </div>
      <div v-if="showInputs">
        <form @submit.prevent="submitData">
          <div class="grid grid-cols-3 gap-4 text-center pb-5">
            <div class="col-start-2 text-lg font-semibold">
              Xác nhận lại thông tin của bạn
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="flex flex-col gap-2">
              <label class="text-sm font-semibold" for="">Họ và Tên</label>
              <a-input
                type="text"
                class="border p-2 rounded-md h-10"
                placeholder="Họ và Tên"
                v-model:value="citizen_name"
                required
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm font-semibold" for="">Số CMT/CCCD</label>
              <a-input
                type="text"
                class="border p-2 rounded-md h-10"
                placeholder="Số CMT/CCCD"
                v-model:value="citizen_code"
                required
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm font-semibold" for="">Ngày cấp</label>
              <a-input
                type="date"
                class="border p-2 rounded-md h-10"
                placeholder="Ngày cấp"
                v-model:value="date_of_issue"
                required
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm font-semibold" for="">Nơi cấp</label>
              <a-auto-complete
                v-model:value="place_of_issue"
                :options="[
                  {
                    value:
                      'CỤC TRƯỞNG CỤC CẢNH SÁT QUẢN LÝ HÀNH CHÍNH VỀ TRẬT TỰ XÃ HỘI',
                  },
                ]"
                :allow-clear="true"
              >
                <a-input
                  placeholder="Nơi cấp"
                  style="height: 40px"
                  class="p-2 rounded-md"
                />
              </a-auto-complete>
            </div>
          </div>
          <div class="flex justify-center items-center mt-4">
            <button
              html-type="submit"
              class="bg-orange-500 border-none text-white rounded-lg h-10 px-32"
            >
              Xác nhận
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { message } from "ant-design-vue";
import { useBaseStore } from "../../../stores/base/baseStore";
import { useRouter } from "vue-router";
import { useVerifyClientStore } from "../../../stores/client/verify/verifyClientStore";

export default defineComponent({
  data() {
    return {
      cameraOn: false,
      photos: [] as string[],
      stream: null as MediaStream | null,
      showInputs: false,
      citizen_name: "",
      citizen_code: "",
      date_of_issue: "",
      place_of_issue: "",
      errors: {} as Record<string, string>,
    };
  },
  methods: {
    validateCitizenName() {
  console.log("Citizen name:", this.citizen_name); // Debugging
  const regex = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỀỂỄữẫựẫỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỲỴÝỶỸửữẫựạảấầẩẫậắằẳẵặẹẻẽềểếễềệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ\s]+$/;
  return regex.test(this.citizen_name);
},
    // validatePlaceOfIssue() {
    //   const regex = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỀỄữẫựẫỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỲỴÝỶỸửữẫựạảấầẩẫậắằẳẵặẹẻẽềểếễềệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ\s]+$/;
    //   return regex.test(this.place_of_issue);
    // },
    validateCitizenCode() {
      const regex = /^[0-9]{12}/;
      return regex.test(this.citizen_code);
    },
    async toggleCamera() {
      this.cameraOn = !this.cameraOn;
      if (this.cameraOn) {
        await this.startCamera();
      } else {
        this.stopCamera();
      }
    },
    async startCamera() {
      try {
        this.stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (this.$refs.video) {
          (this.$refs.video as HTMLVideoElement).srcObject = this.stream;
        }
      } catch (error) {
        console.error("Error accessing camera: ", error);
      }
    },
    stopCamera() {
      if (this.stream) {
        this.stream.getTracks().forEach((track) => track.stop());
        this.stream = null;
      }
    },
    capturePhoto() {
      if (this.photos.length < 2 && this.cameraOn) {
        const video = this.$refs.video as HTMLVideoElement;
        const canvas = document.createElement("canvas");
        if (video.videoWidth && video.videoHeight) {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const context = canvas.getContext("2d");
          if (context) {
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const photoData = canvas.toDataURL("image/png");
            this.photos.push(photoData);
            console.log(
              `Photo ${this.photos.length === 1 ? "front" : "back"} captured:`,
              photoData
            );
          }
          if (this.photos.length === 2) {
            this.showInputs = true;
          }
        }
      } else {
        message.error("Bạn chỉ có thể chụp tối đa 2 ảnh");
      }
    },
    deletePhoto(index: number) {
      this.photos.splice(index, 1);
      this.showInputs = false;
    },
    async submitData() {
      if (!this.validateCitizenName()) {
        message.error("Họ và tên không được chứa số hoặc ký tự đặc biệt.");
        return;
      }
      // if (!this.validatePlaceOfIssue()) {
      //   message.error("Nơi cấp không được chứa số hoặc ký tự đặc biệt.");
      //   return;
      // }
      if (!this.validateCitizenCode()) {
        message.error(
          "CMT/CCCD chưa đủ số hoặc chứa ký tự đặc biệt"
        );
        return;
      }

      console.log("Họ và Tên:", this.citizen_name);
      console.log("Mã số học sinh/sinh viên:", this.citizen_code);
      console.log("Thời hạn thẻ:", this.date_of_issue);
      console.log("Trường:", this.place_of_issue);
      console.log("Photos:", this.photos);

      if (this.photos.length !== 2) {
        message.error("Please upload both front and back photos.");
        return;
      }

      try {
        const frontPhotoURL = await this.uploadPhoto(this.photos[0]);
        const backPhotoURL = await this.uploadPhoto(this.photos[1]);

        const payload = {
          verification_card_type: "citizen_card",
          verification_card_image: {
            front: frontPhotoURL.url,
            back: backPhotoURL.url,
          },
          verification_card_info: {
            citizen_name: this.citizen_name,
            citizen_code: this.citizen_code,
            date_of_issue: this.date_of_issue,
            place_of_issue: this.place_of_issue,
          },
        };

        const verifyClientStore = useVerifyClientStore();
        const res = await verifyClientStore.createVerify(payload);

        if (res.data._rawValue?.status === true) {
          message.success("Gửi xác thực thẻ CMT/CCCD thành công");
          this.$router.push("./confirm-account");
        } else {
          this.errors = res.error.value.data.errors;
          message.error("Gửi xác thực thẻ CMT/CCCD thất bại");
        }

        this.citizen_name = "";
        this.citizen_code = "";
        this.date_of_issue = "";
        this.place_of_issue = "";
        this.photos = [];
        this.showInputs = false;
      } catch (error) {
        message.error(
          "Bạn đã gửi yêu cầu xác thực thẻ CMT/CCCD rồi. Vui lòng chờ xác thực."
        );
      }
    },
    async uploadPhoto(photoData: string): Promise<string> {
      const baseStore = useBaseStore();
      const file = this.DataURIToBlob(photoData);
      const formData = new FormData();
      formData.append("image", file);

      try {
        const dataUpload = await baseStore.uploadImg(formData);
        console.log("Upload success:", dataUpload.data._rawValue.data);
        return dataUpload.data._rawValue.data;
      } catch (error) {
        message.error("Upload ảnh thất bại");
        throw error;
      }
    },
    DataURIToBlob(dataURI: string) {
      const splitDataURI = dataURI.split(",");
      const byteString =
        splitDataURI[0].indexOf("base64") >= 0
          ? atob(splitDataURI[1])
          : decodeURI(splitDataURI[1]);
      const mimeString = splitDataURI[0].split(":")[1].split(";")[0];

      const ia = new Uint8Array(byteString.length);
      for (let i = 0; i < byteString.length; i++)
        ia[i] = byteString.charCodeAt(i);

      return new Blob([ia], { type: mimeString });
    },
  },
  beforeUnmount() {
    this.stopCamera();
  },
  setup() {
    const router = useRouter();
    return { router };
  },
});
</script>

<style scoped>
img {
  width: 100%;
  max-width: 400px;
  margin: 10px 0;
}
</style>
