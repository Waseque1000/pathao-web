import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Component/About/About.jsx";
import Artical from "./Component/Artical/Artical.jsx";
import Home from "./Component/Home/Home.jsx";
import Talks from "./Component/Talks/Talks.jsx";
import Main from "./Component/Main/Main.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/artical",
        element: <Artical />,
      },
      {
        path: "/talks",
        element: <Talks />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
