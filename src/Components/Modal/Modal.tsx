import React, { useState, useEffect } from "react";
import './Modal.css';
import CloseIcon from '@mui/icons-material/Close';

export default function Modal({modalOpen, setModalOpen, content})  {


  
  return (
    <div>
    {modalOpen ? 
        (  
            <div className="outer-modal-container" onClick={() => setModalOpen(false)}>
                <div className="modal-container" >
                    <div className="close-button" >
                        <button onClick={() => setModalOpen(false)}><CloseIcon /></button>
                    </div>
                    <div className="content">
                        {content.map((item, index) => {
                            return (
                                <p>{item}</p>
                            )
                        })}
                        </div>
                </div>
            </div>
        )
        :
        (<div/>)
}
</div>
    
  );
  
}

