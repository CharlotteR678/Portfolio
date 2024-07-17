import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import Projets from "./pages/Projets";
import FormUser from "./pages/FormUser";
import ConnexionForm from "./pages/ConnexionForm";

import ProfileLoader from "./handlers/profileLoader/ProfileLoader";
import ProjectLoader from "./handlers/projectLoader/ProjectLoader";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader : ProfileLoader,
      },
      {
        path: "/projets",
        element: <Projets />,
        loader : ProjectLoader,
      },
      {
        path: "/inscription",
        element: <FormUser />,
      },
      {
        path: "/connexion",
        element: <ConnexionForm />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
