
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/intro', component: () => import('pages/Intro.vue') },
      { path: '/values', component: () => import('pages/Values.vue') },
      { path: '/colors', component: () => import('pages/Colors.vue') },
      { path: '/layout', component: () => import('pages/Values.vue') },
      { path: '/font', component: () => import('pages/Font.vue') },
      { path: '/icon', component: () => import('pages/Icon.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
