import React, { useState }  from "react";
import MenuIcon from "../icons/menuIcon.png"
import MenuStyle from "./css/MenuScreen.module.css"
const MenuScren = ()=>{
    const [menuButton,setMenuButton] = useState(false);

    const toggleMenu = () =>{
        setMenuButton(!menuButton);
    }
    

    return (
        <div className={menuButton ? MenuStyle.menuPanel : MenuStyle.hideMenuPanel}>
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