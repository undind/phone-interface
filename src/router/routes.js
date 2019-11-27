export default [
  {
    path: "/",
    component: () => import('@/views/Main.vue'),
    children: [
      {
        path: "/",
        component: () => import('@/views/Contacts.vue')
      },
      {
        path: "/history",
        component: () => import('@/views/History.vue')
      }
    ]
  },
  {
    path: '*',
    redirect: '/',
  }
]
