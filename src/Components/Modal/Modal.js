import React from "react";
import './Modal.css';
import CloseIcon from '@mui/icons-material/Close';
export default function Modal({ modalOpen, setModalOpen, content }) {
    return (React.createElement("div", null, modalOpen ?
        (React.createElement("div", { className: "outer-modal-container", onClick: () => setModalOpen(false) },
            React.createElement("div", { className: "modal-container" },
                React.createElement("div", { className: "close-button" },
                    React.createElement("button", { onClick: () => setModalOpen(false) },
                        React.createElement(CloseIcon, null))),
                React.createElement("div", { className: "content" }, content.map((item, index) => {
                    return (React.createElement("p", null, item));
                })))))
        :
            (React.createElement("div", null))));
}
