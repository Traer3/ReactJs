import React from "react";

const ScrolTest = () =>{
    return (
        <div
            style={{
            marginLeft:'100px',
            width:'90vw'
        }}>
            {[...Array(50)].map((_, index)=>(
                <h1 key={index}>Test</h1>
            ))}
        </div>
    );
};

export default ScrolTest;