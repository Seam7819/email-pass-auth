import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Componants/Root/Root';
import Home from './Componants/Home/Home';
import LogIn from './Componants/LogIn/LogIn';
import SignIn from './Componants/SignIn/SignIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path : "/login",
        element : <LogIn></LogIn>
      },
      {
        path : "/signin",
        element : <SignIn></SignIn>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
