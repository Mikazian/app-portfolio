import React from 'react';
import ReactDOM from 'react-dom/client';

/** Routeur **/
import { RouterProvider } from 'react-router-dom';
import router from './router';

/** Tailwind CSS Style **/
import './style/global.css';

/** Context **/
import { ThemeProvider } from './contexts/ThemeContext';
import { CopyProvider } from './contexts/CopyContext';
import { ContactProvider } from './contexts/ContactContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <CopyProvider>
        <ContactProvider>
          <RouterProvider router={router} />
        </ContactProvider>
      </CopyProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
