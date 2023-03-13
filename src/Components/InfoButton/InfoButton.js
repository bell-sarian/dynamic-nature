import React, { useState } from "react";
// import styles from './Sun.scss';
import InfoIcon from '@mui/icons-material/Info';

export default function InfoButton()  {
  const [isHovering, setIsHovering] = useState(false);
  // const [timeOfDaySun, setTimeOfDaySun ] = useState(props.sunStyle);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // const handleClick = () => {
     // setModalOpen(!modalOpen)
  // }

  
  return (
      <div 
        className={"info-button-container"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            <InfoIcon sx={{color: '#fff'}} />
        </div>
  );
  
}

