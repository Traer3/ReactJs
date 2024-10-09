import React from "react";
import ImitationTerminal from "./ImitationTerminal";




const TerminalWindow = ({incomingText,answer}) => {


    return(
        <div style={{
             padding: '20px', 
             border: '2px solid #8D8D8F', 
             display: 'flex', 
             //overflowY: 'scroll', 
             justifyContent: 'center',
             backgroundColor: 'black',
             color:'white', 
             margin:'20px',
             //initiate width & height if visual error
             fontWeight:'bold',
            }}
        > 
          
          <pre>
            {incomingText}
            <ImitationTerminal incomingText={answer}/>
          </pre>
           
        </div>
    );
};

export default TerminalWindow;