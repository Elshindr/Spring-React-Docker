import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from 'react-router-dom';
import './index.css';
import AddComponent from './Components/Add/AddComponent.tsx';
import AllComponent from './Components/All/AllComponent.tsx';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AllComponent />} />
      <Route path="/add" element={<AddComponent />} />
    </>
  )
)


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
