import React from 'react';
import  "./Css/TittleCss.css";
import Image from "../Image/Logo.png";
function Tittle() {
  return (
    <div className="Tittle">
        <img src={Image}  className="TittleImage" alt="Best Shot" height="100px" width="100px"/>
    </div>
  );
}

export default Tittle;
