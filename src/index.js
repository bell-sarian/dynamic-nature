import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './error-page';
import { createBrowserRouter, BrowserRouter } from "react-router-dom";
import Collection1 from './Art/Collection1/Collection1';
import NavBar from './Components/NavBar/NavBar.tsx';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Work from './Pages/Work/Work';
const router = createBrowserRouter([
    {
        path: "/Home",
        element: React.createElement(Home, null),
        errorElement: React.createElement(ErrorPage, null)
    },
    {
        path: "/Collection1",
        element: React.createElement(Collection1, null),
        errorElement: React.createElement(ErrorPage, null)
    },
    {
        path: "/About",
        element: React.createElement(About, null),
        errorElement: React.createElement(ErrorPage, null)
    },
    {
        path: "/Work",
        element: React.createElement(Work, null),
        errorElement: React.createElement(ErrorPage, null)
    },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(React.StrictMode, null,
    React.createElement(BrowserRouter, null,
        React.createElement(NavBar, null),
        React.createElement(App, null))));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
