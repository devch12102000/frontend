import React from 'react'
import { Route, Routes } from 'react-router-dom'
// const DefaultLayout = React.lazy(() => import('../../layout/DefaultLayout'))
import DefaultLayout from '../../layout/DefaultLayout';
const Login = React.lazy(() => import('../pages/Login/UserLogin/Index'))

const RouterFlow = (props:any) => {
    console.log(props);
    return (
        <Routes>
            <Route  path="/login"  element={<Login />} />
            <Route  path="/"  element={<Login />} />
            <Route path="*" element={<DefaultLayout/>} />
        </Routes>
    );
}
export const TempPage = () => {
    return (
        <h2 style={{ color: '#02174E', padding: '5rem', textAlign: 'center' }}>Comming Soon...</h2>
    )
}
export default RouterFlow;
