import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

// routes config
import routes from '../../routes'
import ProtectedRoute from '../routes/ProtectedRoute'

const Content = () => {

  return (
    <div className="container">
      <Suspense>
        <ProtectedRoute>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  element={ <route.element />}
                  // element={access_token ? <route.element /> : <Navigate to="/login" replace />}
                />
              )
            )
          })}
          <Route path="/admin-app" element={<Navigate to="/case-studies" />} />
          <Route path="/" element={<Navigate to="/login"  replace/>} />
        </Routes>
        </ProtectedRoute>
      </Suspense>
    </div>
  )
}

export default React.memo(Content)
