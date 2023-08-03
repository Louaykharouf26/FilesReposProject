import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Login from './Auth/Login.jsx';
import SignUp from './Auth/SignUp.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import CreateContainer from './CreateContainer/CreateContainer.jsx';
import CreateRepo from './CreateRepo/CreateRepo.jsx';
import ContainerList from './container.jsx';
import ContainerDetails from './Dashboard/ContainerDetails.jsx';
import MyComponent from './container.jsx';
import Formtest from './tryform/Container.jsx';
const loggedIn = localStorage.getItem('id') !== null;
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/test",
    element: <Formtest/>,
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
    element: loggedIn ? <Dashboard/>:<Login></Login>,
  },
  {
    path: "/Form",
    element: loggedIn?<CreateRepo/>:<Login></Login>,
  },
  {
    path:"/FormContainer",
    element:loggedIn?<CreateContainer></CreateContainer>:<Login></Login>
  },
  {
    path: "/Container",
    element: loggedIn?<ContainerList/>:<Login></Login>,
  },
  {
    path: "/containers/:containerName",
    element: <ContainerDetails/>
  },
  {
    path: "upload",
    element: <MyComponent></MyComponent>
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
