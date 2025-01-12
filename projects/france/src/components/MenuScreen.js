import React, { useState }  from "react";
import MenuIcon from "../icons/menuIcon.png"
import MenuStyle from "./css/MenuScreen.module.css"
import Creatura from "./Creatura";
import PosterMain from "./Posters/PosterMain";

const MenuScreen = ()=>{
    const [menuButton,setMenuButton] = useState(false);
    const [enableMenu, setEnableOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
 
    const toggleMenu = () =>{
        setMenuButton(!menuButton);

        setTimeout(() => {
            setShowMenu(!showMenu)
        }, 10);


        setEnableOpen(!enableMenu);
        
    }

    

    return (
        <div>
            {enableMenu&&(
                <div className={`${MenuStyle.menuPanel} ${showMenu && MenuStyle.menuPanelOpen }`}>
                    <div >
                        <div className={MenuStyle.menuFlex}>
                            <Creatura/>
                            <PosterMain/>
                        </div>
                    </div>
                 </div>
            )}
            
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