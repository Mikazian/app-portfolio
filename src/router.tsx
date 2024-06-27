import { createBrowserRouter } from "react-router-dom";

/** Composants **/
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about-me",
      element: <About />,
    },
    {
      path: "/projects",
      element: <Project />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

export default router;
