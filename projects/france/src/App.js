import React from "react";
import Stars from "./components/Stars.module.css"
import MenuScren from "./components/MenuScreen";
import ScrolTest from "./components/ScrolTest";

const App = () => {
  const shootingStars = Array(10).fill(null).map((_, index)=>(
    <div key={index} className={Stars.shooting_star}  />
  ))

  return (
    <div >
      <div className={Stars.body} >
         <div 
           style={{ transform: 'rotateZ(45deg)',
           left:'50%', top:'50%' ,
           position:'absolute'}}>
                {shootingStars}
         </div> 
      </div>
      
      <MenuScren/>
      <ScrolTest/>
    </div>
  );
}

export default App;
