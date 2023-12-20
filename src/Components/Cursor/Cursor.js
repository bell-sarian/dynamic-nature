import { useRef } from 'react';
import './Cursor.css';
const Cursor = () => {
    const dot = useRef(null);
    const dotOutline = useRef(null);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { ref: dotOutline, className: 'cursor-dot-outline' }),
        React.createElement("div", { ref: dot, className: 'cursor-dot' })));
};
export default Cursor;
