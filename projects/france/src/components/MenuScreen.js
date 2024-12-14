import React, { useState }  from "react";
import MenuIcon from "../icons/menuIcon.png"
import MenuStyle from "./css/MenuScreen.module.css"
import Creatura from "./Creatura";
import PosterMain from "./Posters/PosterMain";

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
             
            
            <PosterMain/>
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