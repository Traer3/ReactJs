import React from "react";
import MenuScren from "./components/MenuScreen";
import ScrolTest from "./components/ScrolTest";

const App = () => {
  return (
    <div >
          <MenuScren/>
          <div style={{
            
            marginLeft:'100px'
        }}>
          <ScrolTest/>
          </div>
          
    </div>
  );
}

export default App;
