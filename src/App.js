import React from "react";

import logo from './logo.svg';
import './App.scss';
import NavBar from './Components/NavBar/NavBar.js';
import {

  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Work from "./Pages/Work/Work";
import Collection1 from './Art/Collection1/Collection1';

function App() {
  return (
    <div>
       <Routes>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Collection1" element={<Collection1 />} />
          <Route path="Work" element={<Work />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </div>
  );
}

export default App;

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Collection1">Collection I</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
    </div>
  );
}