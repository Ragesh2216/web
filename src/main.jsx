import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Homepage2 from "./pages/Homepage2.jsx";
import Tags from "./pages/Tags.jsx";
import Authors from "./pages/Authors.jsx";
import MonthArchive from "./pages/MonthArchive.jsx";
import YearArchive from "./pages/YearArchive.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx";
import Subscription from "./pages/Subscription.jsx";
import ArchiveDop from "./components/ArchiveDop.jsx";
import Login from "./pages/Login.jsx";
import SingleBlogPage from "./pages/SingleBlogPage.jsx";
import SingleBlog1 from "./pages/SingleBlog1.jsx";
import SingleBlog2 from "./pages/SingleBlog2.jsx";
import SingleBlog3 from "./pages/SingleBlog3.jsx";
import SingleBlog4 from "./pages/SingleBlog4.jsx";
import NotFound from "./pages/NotFound.jsx";
import ExploreServices from "./components/ExploreServices.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App element={<Home />} />,
  },
  {
    path: "/ArchiveDop",
    element: <App element={<ArchiveDop />} />,
  },
  {
    path: "/homepage2",
    element: <App element={<Homepage2 />} />,
  },
  {
    path: "/subscription",
    element: <App element={<Subscription />} />,
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
  {
    path: "/single-blog1",
    element: <App element={<SingleBlog1 />} />,
  },
  {
    path: "/single-blog2",
    element: <App element={<SingleBlog2 />} />,
  },
  {
    path: "/single-blog3",
    element: <App element={<SingleBlog3 />} />,
  },
  {
    path: "/single-blog4",
    element: <App element={<SingleBlog4 />} />,
  },
  {
    path: "*",
    element: <App element={<NotFound />} />,
  },
  {
    path: "/explore-services",
    element: <App element={<ExploreServices />} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);