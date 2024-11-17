import React from "react";
import style from "./ScrollBar.module.css"
const ScrolTest = () =>{
    return (
        <div
            className={style.scrollbar} 
            style={{
            backgroundColor:'red',
            marginLeft:'100px',
        }}>
            {[...Array(50)].map((_, index)=>(
                <h1 key={index}>Test</h1>
            ))}
        </div>
    );
};

export default ScrolTest;