import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Login from './Auth/Login.jsx';
import SignUp from './Auth/SignUp.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';

import CreateRepo from './CreateRepo/CreateRepo.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "/SignUp",
    element: <SignUp/>,
  },
  {
    path: "/Dashboard",
    element: <Dashboard/>,
  },
  {
    path: "/Form",
    element: <CreateRepo/>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
