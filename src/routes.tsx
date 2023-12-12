import React from 'react'
const UserLogin = React.lazy(() => import('./web/pages/Login/UserLogin/Index'))
const Welcome = React.lazy(() => import('./web/pages/welcome/index'))

const routes = [
  { path: '/welcome', name: 'Case Study', element: Welcome },  
  { path: '/login', name: 'Login', element: UserLogin },  
  
]

export default routes
