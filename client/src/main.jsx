import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import Projets from "./pages/Projets";
import FormUser from "./pages/FormUser";
import ConnexionForm from "./pages/ConnexionForm";
import FormAddProject from "./pages/FormAddProject";
import Admin from "./pages/Admin";
import ModifyProjectForm from "./pages/ModifyProjectForm";

import SkillLoader from "./handlers/SkillLoader/SkillLoader";
import ProjectLoader from "./handlers/projectLoader/ProjectLoader";
import ProjectLoaderRead from "./handlers/projectLoaderRead/ProjectLoaderRead";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader : SkillLoader,
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
      {
        path: "/add-form",
        element: <FormAddProject />,
        loader : SkillLoader
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/modify-project/:id",
        element: <ModifyProjectForm />,
        loader : ProjectLoaderRead,
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
