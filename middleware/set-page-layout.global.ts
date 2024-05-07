export default defineNuxtRouteMiddleware((to,from) => {
  const layout = to.fullPath.startsWith('/admin') ? 'admin-default' : 'client-default'
  to.meta.layout = layout
})
  