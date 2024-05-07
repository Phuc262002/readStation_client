export default defineNuxtRouteMiddleware((to, from) => {
  let layout = '';
  if (to.fullPath.startsWith('/admin')) {
    layout = 'admin-default'
  } else if (to.fullPath.startsWith('/login') || to.fullPath.startsWith('/register')) {
    layout = 'none-default'
  } else {
    layout = 'client-default'
  }

  to.meta.layout = layout as any
})
