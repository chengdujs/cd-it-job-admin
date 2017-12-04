export const menus = [
  { name: 'Dashboard', key: 'dashboard', path: '/', icon: 'area-chart' },
  {
    name: 'Settings', path: '', icon: 'setting', children: [
      { name: 'User Settings', key: 'settings', path: '/settings' },
      { name: 'User Profile', key: 'user-profile', path: '/user-profile' }
    ]
  }
];
