const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', redirect: 'history'},
      {path: '/history', component: () => import('pages/Details.vue')},
      {path: '/intro', component: () => import('pages/Details.vue')},
      {path: '/values', component: () => import('pages/Details.vue')},
      {path: '/color', component: () => import('pages/Details.vue')},
      {path: '/layout', component: () => import('pages/Details.vue')},
      {path: '/font', component: () => import('pages/Details.vue')},
      {path: '/icon', component: () => import('pages/Details.vue')},
      {path: '/motion', component: () => import('pages/Details.vue')},
      {path: '/dark_mode', component: () => import('pages/Details.vue')},
      {path: '/nav', component: () => import('pages/Details.vue')},
      {path: '/input', component: () => import('pages/Details.vue')},
      {path: '/button', component: () => import('pages/Details.vue')},
      {path: '/select', component: () => import('pages/Details.vue')},
      {path: '/checkbox', component: () => import('pages/Details.vue')},
      {path: '/toggle', component: () => import('pages/Details.vue')},
      {path: '/status', component: () => import('pages/Details.vue')},
      {path: '/search', component: () => import('pages/Details.vue')},
      {path: '/slider', component: () => import('pages/Details.vue')},
      {path: '/date', component: () => import('pages/Details.vue')},
      {path: '/stepper', component: () => import('pages/Details.vue')},
      {path: '/tabs', component: () => import('pages/Details.vue')},
      {path: '/tooltips', component: () => import('pages/Details.vue')},
      {path: '/popup-editor', component: () => import('pages/Details.vue')},
      {path: '/transfer', component: () => import('pages/Details.vue')},
      {path: '/progress', component: () => import('pages/Details.vue')},
      {path: '/transfer', component: () => import('pages/Details.vue')},
      {path: '/pagination', component: () => import('pages/Details.vue')},
      {path: '/message_box', component: () => import('pages/Details.vue')},
      {path: '/notification', component: () => import('pages/Details.vue')},
      {path: '/situation', component: () => import('pages/Details.vue')},
      {path: '/manage_instance', component: () => import('pages/Details.vue')},
      {path: '/create_instance', component: () => import('pages/Details.vue')},
      {path: '/images', component: () => import('pages/Details.vue')},
      {path: '/keys', component: () => import('pages/Details.vue')},
      {path: '/manage_volumes', component: () => import('pages/Details.vue')},
      {path: '/create_volumes', component: () => import('pages/Details.vue')},
      {path: '/back_up', component: () => import('pages/Details.vue')},
      {path: '/snapshot', component: () => import('pages/Details.vue')},
      {path: '/snapshot_strategy', component: () => import('pages/Details.vue')},
      {path: '/network_topology', component: () => import('pages/Details.vue')},
      {path: '/create_network', component: () => import('pages/Details.vue')},
      {path: '/manage_network', component: () => import('pages/Details.vue')},
      {path: '/router', component: () => import('pages/Details.vue')},
      {path: '/security_groups', component: () => import('pages/Details.vue')},
      {path: '/floating_ips', component: () => import('pages/Details.vue')},
      {path: '/load_balance', component: () => import('pages/Details.vue')},
      {path: '/network_qos', component: () => import('pages/Details.vue')},
      {path: '/firewalls', component: () => import('pages/Details.vue')},
      {path: '/clusters', component: () => import('pages/Details.vue')},
      {path: '/containers', component: () => import('pages/Details.vue')},
      {path: '/data_processing', component: () => import('pages/Details.vue')},
      {path: '/resource_arrangement', component: () => import('pages/Details.vue')},
      {path: '/catalog', component: () => import('pages/Details.vue')},
      {path: '/databases', component: () => import('pages/Details.vue')},
      {path: '/orders', component: () => import('pages/Details.vue')},
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
