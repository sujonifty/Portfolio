import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Nav from './components/Navbar/Nav';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav></Nav>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
