
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/intro', component: () => import('pages/Intro.vue') },
      { path: '/values', component: () => import('pages/Values.vue') },
      { path: '/color', component: () => import('pages/Color.vue') },
      { path: '/layout', component: () => import('pages/Layout.vue') },
      { path: '/font', component: () => import('pages/Font.vue') },
      { path: '/icon', component: () => import('pages/Icon.vue') },
      { path: '/motion', component: () => import('pages/Motion.vue') },
      { path: '/darkmode', component: () => import('pages/DarkMode.vue') },
      { path: '/nav', component: () => import('pages/Nav.vue') },
      { path: '/input', component: () => import('pages/Input.vue') },
      { path: '/button', component: () => import('pages/Button.vue') },
      { path: '/select', component: () => import('pages/Select.vue') },
      { path: '/checkbox', component: () => import('pages/Checkbox.vue') },
      { path: '/toggle', component: () => import('pages/Toggle.vue') },
      { path: '/status', component: () => import('pages/Status.vue') },
      { path: '/search', component: () => import('pages/Search.vue') },
      { path: '/slider', component: () => import('pages/Slider.vue') },
      { path: '/date', component: () => import('pages/Date.vue') },
      { path: '/stepper', component: () => import('pages/Stepper.vue') },
      { path: '/tabs', component: () => import('pages/Tabs.vue') },
      { path: '/tooltips', component: () => import('pages/Tooltips.vue') },
      { path: '/popup-editor', component: () => import('pages/PopupEditor.vue') },
      { path: '/transfer', component: () => import('pages/Transfer.vue') },
      { path: '/progress', component: () => import('pages/Progress.vue') },
      { path: '/transfer', component: () => import('pages/Transfer.vue') },
      { path: '/pagination', component: () => import('pages/Pagination.vue') },
      { path: '/messageBox', component: () => import('pages/MessageBox.vue') },
      { path: '/notification', component: () => import('pages/Notification.vue') },
      { path: '/situation', component: () => import('pages/Situation.vue') },
      { path: '/manage-instance', component: () => import('pages/ManageInstance.vue') },
      { path: '/create-instance', component: () => import('pages/CreateInstance.vue') },
      { path: '/clusters', component: () => import('pages/Clusters.vue') },
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
