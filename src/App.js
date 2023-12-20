import React from "react";
import './App.scss';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Work from "./Pages/Work/Work";
import Collection1 from './Art/Collection1/Collection1';
import Collection2 from './Art/Collection2/Collection2';
import Collection3 from "./Art/Collection3/Collection3";
// import Cursor from "./Components/Cursor/Cursor";
function App() {
    //   const [mousePosition, setMousePosition] = useState({
    //     x: 0,
    //     y: 0
    //   })
    //   console.log(mousePosition)
    //   useEffect(() => {
    //     const mouseMove = (e) => {
    //       console.log(e)
    //       setMousePosition({
    //         x: e.clientX,
    //         y: e.clientY
    //       })
    //     }
    //     window.addEventListener('mousemove', mouseMove)
    //     return() => {
    //       window.removeEventListener('mousemove', mouseMove)
    //     }
    //   }, [])
    // const variants = {
    //   default: {
    //     x: mousePosition.x - 16,
    //     y: mousePosition.y - 16
    //   }
    // }
    return (React.createElement("div", null,
        React.createElement(Routes, null,
            React.createElement(Route, { index: true, element: React.createElement(Home, null) }),
            React.createElement(Route, { path: "About", element: React.createElement(About, null) }),
            React.createElement(Route, { path: "Collection1", element: React.createElement(Collection1, null) }),
            React.createElement(Route, { path: "Collection2", element: React.createElement(Collection2, null) }),
            React.createElement(Route, { path: "Collection3", element: React.createElement(Collection3, null) }),
            React.createElement(Route, { path: "Work", element: React.createElement(Work, null) }))));
}
export default App;
