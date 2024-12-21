import React, { useEffect, useState } from "react";
import Stars from "./components/css/Stars.module.css"
import MenuScreen from "./components/MenuScreen.js";
import ScrolStyleTest from "./components/ScrollBar.module.css"



const App = () => {

  const [connections, setConnections] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3001/connections')
      .then((res) => res.json())
      .then((data) => setConnections(data))
      .catch((err)=> console.log(err));
  },[]);

  const handleConnect = () =>{
    fetch('http://localhost:3001/connect',{method:'POST'})
      .then((res)=>res.text())
      .then((message)=>console.log(message))
      .catch((err)=> console.error(err));
  };


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

      <button onClick={handleConnect}>Connect</button>
        <ul>{connections.map((conn)=>(
            <li style={{color:'white'}} key={conn.id}>{conn.ip} - {new Date(conn.connected_at).toLocaleString()}</li>
            ))}
        </ul>
      

      <MenuScreen/>

    </div>
  );
}

export default App;
