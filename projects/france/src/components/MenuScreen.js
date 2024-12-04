import React, { useState }  from "react";
import MenuIcon from "../icons/menuIcon.png"
import MenuStyle from "./css/MenuScreen.module.css"
import Creatura from "./Creatura";
import GraphicBasics from "./css-basics/GraphicBasics";
import JavaScriptBasics from "./JavaScript/JavaScriptBasics";

const MenuScreen = ()=>{
    const [menuButton,setMenuButton] = useState(false);

    const toggleMenu = () =>{
        setMenuButton(!menuButton);
    }
    

    return (
        <div>
        
        <div className={`${MenuStyle.menuPanel} ${menuButton ? MenuStyle.menuPanelOpen : ""}`}>

            <div className={MenuStyle.menuFlex}>
            <div onClick={()=>setMenuButton(!menuButton)}> <Creatura/> </div>
            <GraphicBasics/>        
            <JavaScriptBasics />   
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
                    />
        </button>

        </div>
    );
};

export default MenuScreen;