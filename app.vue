<template>
  <div>
      <NuxtLoadingIndicator />
      <NuxtLayout>
          <div class="container mx-auto">
              <NuxtPage />
              <HomeSliderBig/>
              <HomeSwiperItemHome/>
          </div>
      </NuxtLayout>

      <UNotifications />
  </div>
</template>