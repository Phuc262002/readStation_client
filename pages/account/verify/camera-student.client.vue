<template>
  <div class="space-y-5">
    <h3 class="font-bold mb-5">Xác thực HS/SV</h3>
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
      <button @click="toggleCamera">
        {{ cameraOn ? "Tắt máy ảnh" : "Bật máy ảnh" }}
      </button>
      <button @click="capturePhoto" :disabled="!cameraOn">Chụp ảnh</button>
      <div v-if="photos.length" class="flex space-x-10">
        <div v-for="(photo, index) in photos" :key="index" class="text-center">
          <p>{{ index === 0 ? "Hình mặt trước" : "Hình mặt sau" }}</p>
          <img :src="photo" class="rounded-lg w-[1/2]" />
          <button @click="deletePhoto(index)" class="text-tag-text-06">
            Xóa
          </button>
        </div>
      </div>
      <div v-if="showInputs">
        <form @submit.prevent="submitData">
          <div class="grid grid-cols-3 gap-4 text-center pb-5">
            <div class="col-start-2 text-lg font-semibold">Xác nhận lại thông tin của bạn</div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="flex flex-col gap-2">
              <label class="text-sm font-semibold" for="">Họ và Tên</label>
              <a-input
                type="text"
                class="border p-2 rounded-md h-10"
                placeholder="Họ và Tên"
                v-model:value="student_name"
                required
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm font-semibold" for="">Mã số học sinh/sinh viên</label>
              <a-input
                type="text"
                class="border p-2 rounded-md h-10"
                placeholder="Mã số học sinh/sinh viên"
                v-model:value="student_code"
                required
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm font-semibold" for="">Thời hạn thẻ</label>
              <a-input
                type="date"
                class="border p-2 rounded-md h-10"
                placeholder="Thời hạn thẻ"
                v-model:value="student_card_expired"
                required
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm font-semibold" for="">Trường</label>
              <a-input
                type="text"
                class="border p-2 rounded-md h-10"
                placeholder="Nơi cấp"
                v-model:value="place_of_study"
                required
              />
            </div>
          </div>
          <div class="flex justify-center items-center mt-4">
            <button html-type="submit" class="bg-orange-500 border-none text-white rounded-lg h-10 px-32">
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
import { useRouter } from 'vue-router';
import { useVerifyClientStore } from "../../../stores/client/verify/verifyClientStore";

export default defineComponent({
  data() {
    return {
      cameraOn: false,
      photos: [] as string[],
      stream: null as MediaStream | null,
      showInputs: false,
      student_name: "",
      student_code: "",
      student_card_expired: "",
      place_of_study: "",
    };
  },
  methods: {
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
        alert("Bạn chỉ có thể chụp tối đa 2 ảnh và phải bật máy ảnh trước.");
      }
    },
    deletePhoto(index: number) {
      this.photos.splice(index, 1);
      this.showInputs = false;
    },
    async submitData() {
      console.log("Họ và Tên:", this.student_name);
      console.log("Mã số học sinh/sinh viên:", this.student_code);
      console.log("Thời hạn thẻ:", this.student_card_expired);
      console.log("Trường:", this.place_of_study);
      console.log("Photos:", this.photos);

      if (this.photos.length !== 2) {
        message.error("Please upload both front and back photos.");
        return;
      }

      try {
        // Upload photos and get their URLs
        const frontPhotoURL = await this.uploadPhoto(this.photos[0]);
        const backPhotoURL = await this.uploadPhoto(this.photos[1]);

        // Create payload as per backend requirement
        const payload = {
          verification_card_type: "student_card",
          verification_card_image: {
            front: frontPhotoURL.url,
            back: backPhotoURL.url,
          },
          verification_card_info: {
            student_name: this.student_name,
            student_code: this.student_code,
            student_card_expired: this.student_card_expired,
            place_of_study: this.place_of_study,
          },
        };

        // Use the store to submit the data
        const verifyClientStore = useVerifyClientStore(); // Use the store
        const response = await verifyClientStore.createVerify(payload); // Call the createVerify action
        console.log("Form submitted successfully:", response);

        // Reset form and data
        this.student_name = "";
        this.student_code = "";
        this.student_card_expired = "";
        this.place_of_study = "";
        this.photos = [];
        this.showInputs = false;
        this.router.push('./confirm-student');
      } catch (error) {
        console.error("Error submitting form:", error);
        message.error("Submission failed");
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
        return dataUpload.data._rawValue.data; // Assume this returns the URL of the uploaded image
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
