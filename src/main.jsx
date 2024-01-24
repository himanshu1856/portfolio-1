import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Layout from './components/Layout/Layout'


const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout/>
  }
])

ReactDOM.createRoot(document.getElementById('root'))
.render(
    <RouterProvider router={router} />
)
