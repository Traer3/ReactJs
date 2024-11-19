import React, { useState }  from "react";
import MenuIcon from "../icons/menuIcon.png"
import MenuStyle from "./css/MenuScreen.module.css"
const MenuScren = ()=>{
    const [menuButton,setMenuButton] = useState(false);

    const toggleMenu = () =>{
        setMenuButton(!menuButton);
    }
    

    return (
        <div>
        <div className={`${MenuStyle.menuPanel} ${menuButton ? MenuStyle.menuPanelOpen : ""}`}>
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

export default MenuScren;