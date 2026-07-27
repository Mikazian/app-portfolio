import { createBrowserRouter } from 'react-router-dom';

/** Composants **/
import Home from './screens/Home';
import Project from './screens/Project';
import Gallery from './screens/Gallery';
import Contact from './screens/Contact';
import About from './screens/About';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about-me',
      element: <About />,
    },
    {
      path: '/projects',
      element: <Project />,
    },
    {
      path: '/gallery',
      element: <Gallery />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
  ],
  { basename: import.meta.env.BASE_URL },
);

export default router;
