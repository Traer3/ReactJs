import React, { useState }  from "react";
import MenuIcon from "../icons/menuIcon.png"
import MenuStyle from "./css/MenuScreen.module.css"
import Creatura from "./Creatura";
const MenuScreen = ()=>{
    const [menuButton,setMenuButton] = useState(false);

    const toggleMenu = () =>{
        setMenuButton(!menuButton);
    }
    

    return (
        <div>
        <div className={`${MenuStyle.menuPanel} ${menuButton ? MenuStyle.menuPanelOpen : ""}`}>
            <div onClick={()=>setMenuButton(!menuButton)}>
                 <Creatura/> 
            </div>
            

        </div>
        <button 
                className={menuButton ? MenuStyle.menuButton : MenuStyle.lonelyButton}
                onClick={toggleMenu}
                >
                <img 
                className={MenuStyle.menuIcon}
                alt="dontHaveOne"
                src={MenuIcon} 
                ></img>
        </button>
          
       
            
        </div>
    );
};

export default MenuScreen;