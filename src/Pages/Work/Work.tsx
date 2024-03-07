import React, {  useState } from "react";
import "./Work.css";
import { color } from "@mui/system";
import { Link } from "react-router-dom";
import LinkTile from "../../Components/LinkTile/LinkTile.tsx";
import WorkLinkData from "../../Assets/data/WorkLink.tsx";




export default function Work()  {
  const [menuOpen, setMenuOpen] = useState(false);
    
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