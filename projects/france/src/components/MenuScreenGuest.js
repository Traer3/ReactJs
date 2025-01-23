import React, { useState }  from "react";
import MenuIcon from "../icons/menuIcon.png"
import MenuStyle from "./css/MenuScreen.module.css"
import PosterMain from "./Posters/PosterMain";

const MenuScreenGuest = ()=>{
    const [menuButton,setMenuButton] = useState(false);
    const [enableMenu, setEnableMenu] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () =>{
        setMenuButton(!menuButton);
        setTimeout(() => {
            setShowMenu(!showMenu)
        }, 10);
        setEnableMenu(true);     
    }

    return (
        <div>
            {enableMenu&&(
                <div>
                    <div className={`${MenuStyle.menuPanel} ${showMenu && MenuStyle.menuPanelOpen }`}>
                        <div>
                            <div className={MenuStyle.menuFlex}>
                                <PosterMain/> 
                            </div>
                        </div>
                    </div>

                 </div>
            )}
            <div>
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
        </div>
    );
};

export default MenuScreenGuest;