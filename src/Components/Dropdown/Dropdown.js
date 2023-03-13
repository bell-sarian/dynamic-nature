import * as React from 'react';
import './Dropdown.css'

export const Dropdown = ({ onChange, items }) => {
  
    
    return (
      <div className="dropdown-container">
        <select  name="selectList" id="selectList" onChange={onChange} >
            {items.map((item, index) => {
                return(
                    <option key={index} value={item.value}>{item.label}</option>
                )
            })}
            
        </select>
      </div>
    );
  };