import React from "react";
import Box from "./Box"

const PosterExample = () =>{

    return(
        <div
        style={{
            borderRadius: '10px',
            padding:'20px',
            display: 'flex',
            flexWrap: 'wrap',
            backgroundColor: 'lightblue',
            justifyContent: 'flex-start',
            alignItems: 'normal',
            maxWidth: '510px',
            maxHeight: '510px',
            marginBottom: '30px', 
        }}
        >
            <Box/>
           
        </div>
    )

}

export default PosterExample