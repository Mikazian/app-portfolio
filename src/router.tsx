import { createBrowserRouter } from 'react-router-dom';

import About from './screens/About';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <About />,
    },
  ],
  { basename: import.meta.env.BASE_URL },
);

export default router;