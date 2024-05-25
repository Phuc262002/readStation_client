export default defineNuxtRouteMiddleware((to, from) => {
  let layout = '';
  // console.log("🚀 ~ defineNuxtRouteMiddleware ~ to:", to)
  if (to.fullPath.startsWith('/admin')) {
    layout = 'admin-default'
  } else if (to.fullPath.startsWith('/login') || to.fullPath.startsWith('/register') || to.name === '404' || to.fullPath.startsWith('/reset-password')) {
    layout = 'none-default'
  } else {
    layout = 'client-default'
  }

  to.meta.layout = layout as any
})
  