import React, { useState } from "react";
const TestingStyledButton = () => {

    const [isClicked, setIsClicked] = useState(false);

    return (

        <button
            
            style={{
                padding: '10px',
                border: '1px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                color: isClicked ? 'red' : 'blue',
                backgroundColor: '#4CAF50',
                margin: '20px',        
            }}
            onClick={() => setIsClicked(!isClicked)}
        >
            Click me
        </button>

    );
};

export default TestingStyledButton;










