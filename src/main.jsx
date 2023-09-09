import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Component/About/About.jsx";
import Artical from "./Component/Artical/Artical.jsx";
import Home from "./Component/Home/Home.jsx";
import Main from "./Component/Main/Main.jsx";
import Newsletter from "./Component/Newsletter/Newsletter.jsx";
import SkillSection from "./Component/Skill/Skill.jsx";
import Skill from "./Component/Skill/Skill.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/artical",
        element: <Artical />,
      },
      {
        path: "/skill",
        element: <Skill />,
      },
      {
        path: "/news",
        element: <Newsletter />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
