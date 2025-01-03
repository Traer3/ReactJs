import React from "react";
import Stars from "./components/css/Stars.module.css"
import MenuScreen from "./components/MenuScreen.js";
import Joining from "./components/Log In/Joining.js";

const App = () => {



  const shootingStars = Array(10).fill(null).map((_, index)=>(
    <div key={index} className={Stars.shooting_star}  />
  ))

 
  return (
    <div>
      <div className={Stars.body} >
         <div 
           style={{ transform: 'rotateZ(45deg)',
           left:'50%', top:'50%' ,
           position:'absolute'}}>
                {shootingStars}
         </div> 
      </div>

      <div>
           <MenuScreen/>
      </div>

      <div style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        height:'80vh',
        width:'100vw',
      }}>
           <Joining/>
      </div>

      
      

    </div>
  );
}

export default App;
