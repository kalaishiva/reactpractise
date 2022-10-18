import React from "react";
import "./style.css";


const Button = ({ title }) => {
    return ( 
        <div >
        <button className="Btn"> {title} </button> 
        </div>
    )
};

export default Button;