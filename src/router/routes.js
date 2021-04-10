
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/assigned-job', component: () => import('pages/assignedJob.vue') },
      { path: '/capacity', component: () => import('pages/capacity.vue') },
      { path: '/statistics', component: () => import('pages/statistics.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
