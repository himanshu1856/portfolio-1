import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home/Home.jsx'
import './main.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path : "/",
    element : <Home/>
  }
])

ReactDOM.createRoot(document.getElementById('root'))
.render(
    <RouterProvider router={router} />
)
