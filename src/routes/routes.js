import Dashboard  from '../pages/Dashboard.vue'

const routes = [
  {
    path: '/',
    meta: { },
    name: 'Root',
    redirect: {
      name: 'Dashboard'
    }
  },
  {
    path: '/dashboard',
    meta: { breadcrumb: true },
    name: 'Dashboard',
    component: Dashboard
  },
]

export default routes