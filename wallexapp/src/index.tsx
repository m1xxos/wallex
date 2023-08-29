import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/app.scss';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import './styles/fontFaces.css';
import MainContainer from './views/MainContainer';
import WalletView from './views/WalletView';
import CurrencyView from './views/CurrencyView';
import OffersView from './views/OffersView';
import HelpView from './views/HelpView';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainContainer footer />,
    children: [
      {
        index: true,
        element: <WalletView />,
      },
      {
        path: '/currency',
        element: <CurrencyView />,
      },
      {
        path: '/offers',
        element: <OffersView />,
      },
      {
        path: '/help',
        element: <HelpView />,
      },
    ],
  },
  {
    path: '/profile',
    element: (
      <div>
        <p>kekekeke</p>
      </div>
    ),
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
