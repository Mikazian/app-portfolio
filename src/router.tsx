import { createBrowserRouter } from 'react-router-dom';

import About from './screens/About';
import Resume from './screens/Resume';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <About />,
    },
    {
      path: '/resume',
      element: <Resume />,
    },
  ],
  { basename: import.meta.env.BASE_URL },
);

export default router;
