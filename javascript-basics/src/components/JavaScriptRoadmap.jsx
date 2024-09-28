import React from "react";
import DeclaringVariables from "./DeclaringVariables";





const Roadmap = () => {



    return(
        <div style={{
            display:'flex',
            flexDirection: 'column',
            backgroundColor:'D8D3CE',
            alignItems: 'center',
        }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}> <DeclaringVariables/></div>
            <div style={{ display: 'flex', justifyContent: 'center' }}> <DeclaringVariables/></div>
        </div>
    );
};

export default Roadmap;