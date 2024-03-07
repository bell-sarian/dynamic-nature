import * as React from "react";;
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals.tsx';
import ErrorPage from './error-page.tsx';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter
} from "react-router-dom";
import OceanSunset from './Art/OceanSunset/OceanSunset.tsx';
import NavBar from './Components/NavBar/NavBar.tsx';
import Home from './Pages/Home/Home.tsx';
import About from './Pages/About/About.tsx';
import Work from './Pages/Work/Work.tsx';

const router = createBrowserRouter([
  {
    path: "/Home",
    element: <Home />,
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
  {
    path: "/Work",
    element: <Work />,
    errorElement: <ErrorPage />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
