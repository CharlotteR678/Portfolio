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
import ModifySkillForm from "./pages/ModifySkillForm";
import About from "./pages/About";
import FormAddSkill from "./pages/FormAddSkill";
import FormAddProjectImage from "./pages/FormAddProjectImage";

import SkillLoader from "./handlers/SkillLoader/SkillLoader";
import ProjectLoader from "./handlers/projectLoader/ProjectLoader";
import AuthLoader from "./handlers/AuthLoader";
import ProjectLoaderRead from "./handlers/projectLoaderRead/ProjectLoaderRead";
import SkillLoaderRead from "./handlers/skillLoaderRead/SkillLoaderRead";



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
        path: "/a-propos",
        element: <About />,
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
        path: "/add-image-form/:id",
        element: <FormAddProjectImage />,
      },
      {
        path: "/add-skill-form",
        element: <FormAddSkill />,
        loader : AuthLoader,
      },
      {
        path: "/admin",
        element: <Admin />,
        loader : AuthLoader,
      },
      {
        path: "/modify-project/:id",
        element: <ModifyProjectForm />,
        loader : ProjectLoaderRead,
      },
      {
        path: "/modify-skill/:id",
        element: <ModifySkillForm />,
        loader : SkillLoaderRead,
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
