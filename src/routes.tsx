import React from 'react'
const UserLogin = React.lazy(() => import('./web/pages/Login/UserLogin/Index'))

const routes = [
  // { path: '/case-studies', name: 'Case Study', element: CaseStudyList },  
  { path: '/login', name: 'Login', element: UserLogin },  
  
]

export default routes
