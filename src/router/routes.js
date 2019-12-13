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
    path: "/profile",
    component: () => import('@/views/Primary.vue'),
    children: [
      {
        path: "/profile",
        component: () => import('@/views/Profile.vue'),
      },
      {
        path: "/dialpad",
        component: () => import('@/views/Dialpad.vue'),
      }
    ]
  },
  {
    path: '*',
    redirect: '/',
  }
]
