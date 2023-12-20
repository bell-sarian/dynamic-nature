import * as React from 'react';
import './Dropdown.css';
export const Dropdown = ({ onChange, items }) => {
    const [open, setOpen] = React.useState(false);
    return (React.createElement("div", { className: "dropdown-container" },
        React.createElement("select", { name: "selectList", id: "selectList", onChange: onChange }, items.map((item, index) => {
            return (React.createElement("option", { key: index, value: item.value }, item.label));
        }))));
};
