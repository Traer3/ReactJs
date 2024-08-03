import React,{useState} from "react";

const ToggleButton = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleButton = () =>{
        setIsActive(!isActive);
    }


const buttonStyle = {
    backgroundColor: isActive ? '#4CAF50' : '#f44336',
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '4px',
};

return (

    <button style={buttonStyle} onClick={toggleButton}>
        {isActive ? 'Active' : 'Inactive'}
    </button>
);

};

export default ToggleButton;