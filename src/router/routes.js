
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') }
    ]
  },
  {
    path: '/notes',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/edit') }
    ]
  },
  {
    path: '/view',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/notesList') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
