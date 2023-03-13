import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter
} from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';


// const router = createBrowserRouter([
//   {
//     path: "/Home",
//     element: <Home />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: "/Collection1",
//     element: <Collection1 />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: "/About",
//     element: <About />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: "/Work",
//     element: <Work />,
//     errorElement: <ErrorPage />
//   },
// ]);

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
