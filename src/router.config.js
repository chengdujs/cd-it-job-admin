import * as pages from './pages';

export const routes = [
  { path: '/login', exact: true, component: pages.Login },
  {
    path: '/', component: pages.MainLayout, routes: [
      { path: '/', exact: true, component: pages.Home },
      { path: '/settings', component: pages.Settings },
      { path: '', component: pages.NotFound }
    ]
  }
]
