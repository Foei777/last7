import * as React from "react";
import { createRoot } from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Contrac from "./Contrac";
import Signup from "./Signup";
import Payment from "./Payment";
import Arrs from "./Arrs";
import Project from "./Projects";
import Recs from "./Recs";
import LoginComponent from "./LoginComponent";
import VerifyOTP from "./VerifyOTP";
import Succes from "./Succes";
import Fail from "./Fail";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Header/>
  },
  {
    path: "about",
    element:<About/>
  },
  {
    path: "contrac",
    element:<Contrac/>
  },
  {
    path: "signup",
    element:<Signup/>
  },
  {
    path: "payment",
    element:<Payment/>
  },
  {
    path: "Arrs",
    element:<Arrs/>
  },
  {
    path: "projects",
    element:<Project/>
  },
  {
    path: "recs",
    element:<Recs/>
  },
  {
    path: "verify",
    element:<VerifyOTP/>
  },
  {
    path: "LoginComponent",
    element:<LoginComponent/>
  },
  {
    path: "payment",
    element:<Payment/>
  },
  {
    path: "succes",
    element:<Succes/>
  },
  {
    path: "fail",
    element:<Fail/>
  },
  
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
