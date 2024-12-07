import React from "react";
import Stars from "./components/css/Stars.module.css"
import MenuScreen from "./components/MenuScreen.js";
import ScrolStyleTest from "./components/ScrollBar.module.css"
import WorkSpace from "./components/workspace/WorkSpace.js";
const App = () => {

  const shootingStars = Array(10).fill(null).map((_, index)=>(
    <div key={index} className={Stars.shooting_star}  />
  ))

 
  return (
    <div className={ScrolStyleTest.scrollbar}>
      <div className={Stars.body} >
         <div 
           style={{ transform: 'rotateZ(45deg)',
           left:'50%', top:'50%' ,
           position:'absolute'}}>
                {shootingStars}
         </div> 
      </div>
      
      <MenuScreen/>
      <WorkSpace/>
     
    </div>
  );
}

export default App;
