<template>
  <div>
    <div class="main-container flex mx-auto">
      <IncAdminSidebarAdmin />
      <div class="main-content flex-1">
        <IncAdminAppHeader />
        <div
          class="h-[calc(100vh-60px)] relative overflow-y-auto overflow-x-hidden p-5 sm:p-7 space-y-5"
        >
            <slot />
          <IncAdminAppFooter />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
useHead({
  script: [
    {
      src: "_nuxt/assets/admin/js/custom.js",
      type: "text/javascript",
    },
    {
      src: "_nuxt/assets/admin/js/alpine-collaspe.min.js",
      type: "text/javascript",
    },
    {
      src: "_nuxt/assets/admin/js/alpine-persist.min.js",
      type: "text/javascript",
    },
    {
      src: "_nuxt/assets/admin/js/alpine.min.js",
      type: "text/javascript",
    },
  ],
  link: [
    {
      rel: "stylesheet",
      href: "_nuxt/assets/admin/css/style.css",
    },
  ],
});
</script>
