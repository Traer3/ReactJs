import React from "react";
import SidePanels from '../SidePanels.module.css'
import MenuIcon from "./icons/menuIcon.png"
import UserIcon from "./icons/userIcon.png"
import AddUserIcon from "./icons/addUserIcon.png"

const icons = {
    menu: MenuIcon,
    user: UserIcon,
    addUser: AddUserIcon,
}

const SideButton = ({buttonState, buttonStyle , newStyle ,iconsName, onClick}) => {
    return(

        <button 
            style={{zIndex:1,}}
            className={buttonState ? SidePanels[buttonStyle] : SidePanels[newStyle]}
            onClick={onClick}
        >
            <img 
                className={SidePanels.panelIcon}
                alt={iconsName}
                src={icons[iconsName]} 
                />
        </button>
    );
};

export default SideButton;