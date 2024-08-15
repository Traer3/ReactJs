import React from "react";
import logo from '../images/me.png'

const ProfileCard = () =>{

    const cardStyle= {

        border:'1px solid #ccc',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        maxWidth: '300px',
        margin: '20px auto',
        textAlign: 'center'

    };

    const nameStyle ={
        fontSize: '20px',
        fontWeight: 'bold',
        margin: '10px 0'
    };

    const bioStyle = {
        fontSize: '14px',
        color: '#555'
    };

    return(
        <div style={cardStyle}>
            <img 
                src={logo}
                alt="Profile"
                style={{borderRadius: '50%', maxWidth: '300px', marginBottom: '15px'}}
            />

            <div style={nameStyle}> B@lbes </div>
            <div style={bioStyle}> WEB enjoyer</div>

            <div/>
        </div>
    );
    
};

export default ProfileCard