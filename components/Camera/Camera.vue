<template>
    <div class="camera">
      <video ref="video" autoplay></video>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Camera',
    mounted() {
      this.startCamera();
    },
    methods: {
      async startCamera() {
        try {
          const videoElement = this.$refs.video;
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          videoElement.srcObject = stream;
        } catch (error) {
          console.error('Error accessing camera: ', error);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .camera {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
  }
  
  video {
    max-width: 100%;
    height: auto;
  }
  </style>
  