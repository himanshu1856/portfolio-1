import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'

import ErrorPage from './components/ErrorPage/error-page';
import About from './components/About/about';

import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from 'react-router-dom'

import Root from './components/Root/root'
import Projects from './components/Projects/projects';
import HomeContainer from './components/Home/home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index : true,
        element: <HomeContainer/>
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects/>,
      },
      {
        path : "home",
        element : <Navigate to={"/"}/>
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <RouterProvider router={router} />
  )
