import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Tags from "./pages/Tags.jsx";
import Authors from "./pages/Authors.jsx";
import MonthArchive from "./pages/MonthArchive.jsx";
import YearArchive from "./pages/YearArchive.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx";

import Login from "./pages/Login.jsx";
import SingleBlogPage from "./pages/SingleBlogPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App element={<Home />} />,
  },
  {
    path: "/tags",
    element: <App element={<Tags />} />,
  },
  {
    path: "/authors",
    element: <App element={<Authors />} />,
  },
  {
    path: "/monthly-archive",
    element: <App element={<MonthArchive />} />,
  },
  {
    path: "/yearly-archive",
    element: <App element={<YearArchive />} />,
  },
   {
    path: "/about",
    element: <App element={<About />} />,
  },
   {
    path: "/services",
    element: <App element={<Service />} />,
  },
  {
    path: "/contact",
    element: <App element={<Contact />} />,
  },
  {
    path: "/Login",
    element: <App element={<Login />} />,
  },
  {
    path: "/single-blog",
    element: <App element={<SingleBlogPage />} />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
