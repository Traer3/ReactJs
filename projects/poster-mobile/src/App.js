import React from "react";
import Stars from "./css/Stars.module.css"
import Workspace from "./components/Workspace";

const App = () =>{

  const shootingStars = Array(10).fill(null).map((_, index)=>(
    <div key={index} className={Stars.shooting_star}  />
  ))

  return(
    <div style={{position:'relative', width:'100%', height:'100vh'}}>

        <div className={Stars.starsBody} style={{position:'absolute', width:'100%', height:'100vh' , top: 0, left: 0,}} >
            <div 
                style={{ 
                  position:'absolute',
                  left:'50%', top:'50%' ,
                  transform: 'rotateZ(45deg)',
                  zIndex:0,
                }}>
                      {shootingStars}
            </div>
        </div>

        <div 
            style={{
              position:'relative',
              zIndex: 4,
            }}> 
                <Workspace/>  
        </div>
  
    </div>
  );
};

export default App;