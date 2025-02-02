import React, { useState } from "react";
import Stars from "./components/css/Stars.module.css"
import MenuScreen from "./components/MenuScreen.js";
import MenuScreenGuest from "./components/MenuScreenGuest.js";
import Profile from "./components/LogIn/Profile.js";

const App = () => {



  const shootingStars = Array(10).fill(null).map((_, index)=>(
    <div key={index} className={Stars.shooting_star}  />
  ))

  const [userCheck, setUserCheck] = useState(false);
  const [userId, setUserId] = useState(1);
  
  
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
        {userCheck ? <MenuScreen userId={userId}/> : <MenuScreenGuest/>}
      </div>
      

      <div style={{height:'100vh',width:'100vw',}}>
        <div style={{float:'right',marginRight:'2.3%',}}>
            <Profile userCheck={userCheck} userId={userId} setUserCheck={setUserCheck} setUserId={setUserId}/>
        </div>
      </div>
      
      
      
      

    </div>
  );
}

export default App;
