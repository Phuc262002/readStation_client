export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  if (to.fullPath.startsWith("/account") && !authStore.isLogged) {
    navigateTo("/")
  }
});
