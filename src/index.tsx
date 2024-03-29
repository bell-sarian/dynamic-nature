import * as React from "react";;
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
import Collection1 from './Art/Collection1/Collection1';
import NavBar from './Components/NavBar/NavBar.tsx';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Work from './Pages/Work/Work';

const router = createBrowserRouter([
  {
    path: "/Home",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Collection1",
    element: <Collection1 />,
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
