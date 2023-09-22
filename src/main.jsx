import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.css"
import User from './User.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login.jsx'
import Register from './Register.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <User/>
  }, 
  {
    path: '/login',
    element: <Login/>
  }, 
  {
    path: '/Register',
    element: <Register/>
  },
  {
    path: '/app',
    element: <App/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
