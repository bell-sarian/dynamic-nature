import React from "react";

import LinkTile from "../../Components/LinkTile/LinkTile";
import WorkLinkData from "../../Assets/data/WorkLink.js";




export default function Work()  {    
    return (
        <div className="work-outer-container">
            <div className="work-container" >
                {WorkLinkData.map((item, index) => {
                    return (
                        <LinkTile key={index} title={item.title} image={item.image} link={item.link} />
                    )
                    
                })}
            </div>
        </div>
        
    );
  
}