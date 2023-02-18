import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './error-page';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter
} from "react-router-dom";
import OceanSunset from './Art/OceanSunset/OceanSunset';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/OceanSunset",
    element: <OceanSunset />,
    errorElement: <ErrorPage />
  },
  {
    path: "/About",
    element: <About />,
    errorElement: <ErrorPage />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <App />
      {/* <OceanSunset />
      <About /> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
