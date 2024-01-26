import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'

import ErrorPage from './components/ErrorPage/error-page'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import Root from './components/Root/root'


const router = createBrowserRouter([
  {
    path : "/",
    element : <Root/>,
    errorElement : <ErrorPage/>,
  },
])

ReactDOM.createRoot(document.getElementById('root'))
.render(
    <RouterProvider router={router} />
)
