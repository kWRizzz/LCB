import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from './components/auth/ProtectedRoutes';

const Home = lazy(() => import("./pages/Home"))
const Login = lazy(() => import('./pages/Login'))

let user = true

const App = () => {



  return (
    <BrowserRouter>
      <Suspense
        fallback={<h1>Loading...</h1>}
      >
        <Routes>
          <Route
           
            element={<ProtectedRoutes user={user} />}
          >
            <Route
              path='/'
              element={<Home/>}
            />
            <Route
              path='/about'
              element={
                <>
                  <h1>
                    about
                  </h1>
                </>
              }
            />
          </Route>
          <Route
            path='/login'
            element={
              <Login />
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App