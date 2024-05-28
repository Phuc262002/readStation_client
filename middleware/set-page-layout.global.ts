export default defineNuxtRouteMiddleware((to, from) => {
  let layout = '';
  // console.log("🚀 ~ defineNuxtRouteMiddleware ~ to:", to)
  if (to.fullPath.startsWith('/admin')) {
    layout = 'admin-default'
  } else if (to.fullPath.startsWith('/login') || to.fullPath.startsWith('/register') || to.name === '404' || to.fullPath.startsWith('/reset-password') || to.fullPath.startsWith('/forgot-password') || to.fullPath.startsWith('/verify-email') || to.fullPath.startsWith('/verify-code')) {
    layout = 'none-default'
  }else if(to.fullPath.startsWith('/account/checkout')){
    layout='client-default'
  }
   else if(to.fullPath.startsWith('/account')){
    layout='account-default'
  }
   else {
    layout = 'client-default'
  } 

  to.meta.layout = layout as any
})
  