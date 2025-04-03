import React from "react";
import SidePanels from '../SidePanels.module.css'
import MenuIcon from "./icons/menuIcon.png"
import UserIcon from "./icons/userIcon.png"
import AddUserIcon from "./icons/addUserIcon.png"
import LogOut from "./icons/logOut.png"
import EditIcon from "./icons/editIcon.png"
const icons = {
    menu: MenuIcon,
    user: UserIcon,
    addUser: AddUserIcon,
    logOut: LogOut,
    editIcon: EditIcon,
}

const SideButton = ({buttonState, buttonStyle , newStyle ,iconsName, onClick, children,}) => {
    return(

        <button 
            className={buttonState ? SidePanels[buttonStyle] : SidePanels[newStyle]}
            onClick={onClick}
        >
            {iconsName &&
                <img 
                    style={{marginBottom:'10em'}}
                    className={SidePanels.panelIcon}
                    alt={iconsName}
                    src={icons[iconsName]} 
                />
            }
            {children}
        </button>
    );
};

export default SideButton;