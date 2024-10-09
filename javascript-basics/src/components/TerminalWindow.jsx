import React from "react";
import ImitationTerminal from "./ImitationTerminal";




const TerminalWindow = ({incomingText,answer}) => {


    return(
        <div style={{
             display: 'flex', 
             justifyContent: 'center',
             border: '2px solid #8D8D8F', 
             padding: '20px', 
             margin:'20px',
             backgroundColor: 'black',
             color:'white', 
              fontWeight:'bold',
             //initiate width & height if visual error 
             //overflowY: 'scroll', 
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