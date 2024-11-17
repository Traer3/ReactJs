import React from "react";
import Stars from "./components/Stars.module.css"

const App = () => {
  const shootingStars = Array(10).fill(null).map((_, index)=>(
    <div key={index} className={Stars.shooting_star}/>
  ))
  
  return (
    <div className={Stars.body}>
          {shootingStars}
    </div>
  );
}

export default App;
