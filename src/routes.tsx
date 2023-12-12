import React from 'react'
const UserLogin = React.lazy(() => import('./web/pages/Login/UserLogin/Index'))
const Register = React.lazy(() => import('./web/pages/Login/UserRegister/Index'))

const Welcome = React.lazy(() => import('./web/pages/welcome/index'))

const routes = [
  { path: '/login', name: 'Login', element: UserLogin },  
  { path: '/register', name: 'Register', element: Register },  
  { path: '/welcome', name: 'Case Study', element: Welcome },  
  
]

export default routes
