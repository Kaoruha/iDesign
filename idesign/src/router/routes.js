
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect:'history' },
      { path: '/history', component: () => import('pages/Details.vue') },
      { path: '/intro', component: () => import('pages/Details.vue') },
      { path: '/values', component: () => import('pages/Details.vue') },
      { path: '/color', component: () => import('pages/Details.vue') },
      { path: '/layout', component: () => import('pages/Details.vue') },
      { path: '/font', component: () => import('pages/Details.vue') },
      { path: '/icon', component: () => import('pages/Details.vue') },
      { path: '/motion', component: () => import('pages/Details.vue') },
      { path: '/darkmode', component: () => import('pages/Details.vue') },
      { path: '/nav', component: () => import('pages/Details.vue') },
      { path: '/input', component: () => import('pages/Details.vue') },
      { path: '/button', component: () => import('pages/Details.vue') },
      { path: '/select', component: () => import('pages/Details.vue') },
      { path: '/checkbox', component: () => import('pages/Details.vue') },
      { path: '/toggle', component: () => import('pages/Details.vue') },
      { path: '/status', component: () => import('pages/Details.vue') },
      { path: '/search', component: () => import('pages/Details.vue') },
      { path: '/slider', component: () => import('pages/Details.vue') },
      { path: '/date', component: () => import('pages/Details.vue') },
      { path: '/stepper', component: () => import('pages/Details.vue') },
      { path: '/tabs', component: () => import('pages/Details.vue') },
      { path: '/tooltips', component: () => import('pages/Details.vue') },
      { path: '/popup-editor', component: () => import('pages/Details.vue') },
      { path: '/transfer', component: () => import('pages/Details.vue') },
      { path: '/progress', component: () => import('pages/Details.vue') },
      { path: '/transfer', component: () => import('pages/Details.vue') },
      { path: '/pagination', component: () => import('pages/Details.vue') },
      { path: '/messagebox', component: () => import('pages/Details.vue') },
      { path: '/notification', component: () => import('pages/Details.vue') },
      { path: '/situation', component: () => import('pages/Details.vue') },
      { path: '/manage_instance', component: () => import('pages/Details.vue') },
      { path: '/create_instance', component: () => import('pages/Details.vue') },
      { path: '/images', component: () => import('pages/Details.vue') },
      { path: '/keys', component: () => import('pages/Details.vue') },
      { path: '/manage_disk', component: () => import('pages/Details.vue') },
      { path: '/create_disk', component: () => import('pages/Details.vue') },
      { path: '/back_up', component: () => import('pages/Details.vue') },
      { path: '/snapshot', component: () => import('pages/Details.vue') },
      { path: '/snapshot_strategy', component: () => import('pages/Details.vue') },
      { path: '/clusters', component: () => import('pages/Details.vue') },
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
