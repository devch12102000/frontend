import React from 'react'
const UserLogin = React.lazy(() => import('./web/pages/Login/UserLogin/Index'))
const Register = React.lazy(() => import('./web/pages/Login/UserRegister/Index'))
const Contacts = React.lazy(() => import('./web/pages/contacts/Contacts'))
const CreateContact = React.lazy(() => import('./web/pages/contacts/CreateContact'))



const routes = [
  { path: '/login', name: 'Login', element: UserLogin },  
  { path: '/register', name: 'Register', element: Register },  
  { path: '/contacts', name: 'Contacts', element: Contacts },  
  { path: '/create/contact', name: 'Create Conatct', element: CreateContact },  
  { path: '/edit/contact/:id', name: 'Edit Contact', element: CreateContact },  
  
]

export default routes
