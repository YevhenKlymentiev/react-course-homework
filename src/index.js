import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';


import configureAppStore from 'store/configureStore';
import configureAppRouter from 'router/configureRouter';
import './index.css';

const store = configureAppStore();
const router = configureAppRouter();
const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
