import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/errorPage.tsx";
import { CardItem } from "./components/card/config.tsx";
import CardList from "./components/card/cardList.tsx";
import Home from "./pages/home.tsx";
import Project from "./pages/projects.tsx";
import Experience from "./pages/experience.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "", 
        element: <CardList items={CardItem} />, 
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "projects",
        element: <Project />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
