import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import configureAppRouter from './router/configureRouter';
import './index.css';

const router = configureAppRouter();
const root = createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router} />
);
