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
                v-model:value="hoTen"
                required
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm font-semibold" for="">Số CMT/CCCD</label>
              <a-input
                type="text"
                class="border p-2 rounded-md h-10"
                placeholder="Số CMT/CCCD"
                v-model:value="soCMT"
                required
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm font-semibold" for="">Ngày cấp</label>
              <a-input
                type="date"
                class="border p-2 rounded-md h-10"
                placeholder="Ngày cấp"
                v-model:value="ngayCap"
                required
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm font-semibold" for="">Nơi cấp</label>
              <a-input
                type="text"
                class="border p-2 rounded-md h-10"
                placeholder="Nơi cấp"
                v-model:value="noiCap"
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
import { message } from "ant-design-vue"; // Import message for error handling
import { useBaseStore } from "../../../stores/base/baseStore";
import { useRouter } from 'vue-router'; // Import useRouter from vue-router

export default defineComponent({
  data() {
    return {
      cameraOn: false,
      photos: [] as string[],
      stream: null as MediaStream | null,
      showInputs: false,
      hoTen: "",
      soCMT: "",
      ngayCap: "",
      noiCap: "",
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
            ); // Log the photo
          }
          if (this.photos.length === 2) {
            this.showInputs = true; // Hiển thị các ô input sau khi đã chụp đủ 2 ảnh
          }
        }
      } else {
        alert("Bạn chỉ có thể chụp tối đa 2 ảnh và phải bật máy ảnh trước.");
      }
    },
    deletePhoto(index: number) {
      this.photos.splice(index, 1);
      this.showInputs = false; // Ẩn các ô input khi xóa ảnh để chụp lại
    },
    async submitData() {
      console.log("Họ và Tên:", this.hoTen);
      console.log("Số CMT/CCCD:", this.soCMT);
      console.log("Ngày cấp:", this.ngayCap);
      console.log("Nơi cấp:", this.noiCap);
      console.log("Photos:", this.photos); // Log the photos array

      // Example of sending the formData using fetch
      for (const photo of this.photos) {
        await this.onSubmit(photo);
      }

      // Reset dữ liệu sau khi đã xử lý
      this.hoTen = "";
      this.soCMT = "";
      this.ngayCap = "";
      this.noiCap = "";
      this.photos = [];
      this.showInputs = false;
      this.router.push('./confirm-account'); // Navigate to the home route
    },
    
    async onSubmit(imgBase64: string) {
      const baseStore = useBaseStore();
      const file = this.DataURIToBlob(imgBase64);
      const formData = new FormData();
      formData.append("image", file);

      try {
        const dataUpload = await baseStore.uploadImg(formData);
        console.log("Upload success:", dataUpload.data._rawValue.data);
      } catch (error) {
        message.error("Upload ảnh thất bại");
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
    const router = useRouter(); // Initialize router
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
