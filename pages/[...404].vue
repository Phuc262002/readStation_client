<template>
  <div
    class="bg-[url('assets/images/bg-404.svg')] w-full h-[100vh] bg-cover bg-no-repeat bg-center"
  >
    <div class="md:py-10 h-auto mx-auto md:px-20 px-8 container">
      <div class="flex flex-col items-center justify-center space-y-4">
        <div>
          <img src="/assets/images/not-found.svg" alt="" />
        </div>
        <div class="text-2xl max-w-[454px] text-center">
          <span
            >Có vẻ như chúng tôi đã gặp phải một chút vấn đề với trang này, </span
          ><span class="text-rose-500 font-bold">vui lòng tải lại.</span>
        </div>
        <NuxtLink to="/" class="pt-10">
          <a-button
            type="primary"
            class="h-10 bg-[#E66070] hover:!bg-[#ed7381] flex items-center gap-1"
            >Trở về trang chủ
            <UIcon name="i-ic-twotone-refresh" class="text-base" />
          </a-button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
