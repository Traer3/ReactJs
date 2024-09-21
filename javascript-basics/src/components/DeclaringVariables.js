import React from "react";
import ImitationTerminal from "./ImitationTerminal";

const DeclaringVariables = () => {


    let age = 25;
    console.log(age);

    const country = "USA";
    console.log(country);


   

    return(
    <>
        
        <div style={{
            border:'1px solid gray',
            padding:'20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            fontFamily: 'monospace',
            fontSize: '20px',
            
        }}>
            <span style={{color:'#2d7ad6'}}>var </span>
            <span style={{color:'#7cdcf0'}}> name </span> = 
            <span style={{color:'#c3602d'}} > "John" </span> ;
             <br/>
            <ImitationTerminal incomingText="John"/>
            
            
        </div>
    </>
    );
};

export default DeclaringVariables;