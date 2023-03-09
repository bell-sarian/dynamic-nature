import React, {useState, useEffect} from "react";

import './App.scss';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import { motion } from 'framer-motion';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Work from "./Pages/Work/Work";
import Collection1 from './Art/Collection1/Collection1';
// import Cursor from "./Components/Cursor/Cursor";

function App() {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  console.log(mousePosition)

  useEffect(() => {
    const mouseMove = (e) => {
      console.log(e)
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener('mousemove', mouseMove)

    return() => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

const variants = {
  default: {
    x: mousePosition.x - 16,
    y: mousePosition.y - 16
  }
}

  return (
    <div>
      <motion.div 
        className='cursor'
        variants={variants}
        animate='default'
      />
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

