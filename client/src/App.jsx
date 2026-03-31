import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"))
const Login = lazy(()=>import('./pages/Login'))

const App = () => {
  return (
    <BrowserRouter>
      <Suspense 
        fallback={<h1>Loading...</h1>}
      >
        <Routes>
          <Route
            path='/'
            element={<Home />}
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
          <Route
            path='/login'
            element={
                <Login/>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App