import React from "react";
import ReactDOM from "react-dom/client";
import "./css/style.css";
import HomePage from "./pages/HomePage";
import reportWebVitals from "./reportWebVitals";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Posts from "./pages/Posts";

const router = createBrowserRouter([
    {
        path: "/",
        element: HomePage()
    },
    {
        path: "/posts",
        element: Posts()
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
