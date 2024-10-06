import React from "react";




const TerminalText = ({incomingText}) => {


    return(
        <div style={{ display: 'flex', justifyContent: 'center', border: '1px solid #8D8D8F', padding: '20px', backgroundColor: 'black', }}>
            <h1 style={{color: 'white'}}>{incomingText}</h1>
        </div>
    );
};

export default TerminalText;