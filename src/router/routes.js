export default [
  {
    path: "/",
    component: () => import('@/views/Main.vue'),
    children: [
      {
        path: "/",
        name: 'contacts',
        component: () => import('@/views/Contacts.vue')
      },
      {
        path: "/history",
        name: 'history',
        component: () => import('@/views/History.vue')
      },
    ]
  },
  {
    path: "/profile",
    name: 'profile',
    component: () => import('@/views/Profile.vue'),
  },
  {
    path: "/dialpad",
    name: 'dialpad',
    component: () => import('@/views/Dialpad.vue'),
  },
  {
    path: '*',
    redirect: '/',
  }
]
