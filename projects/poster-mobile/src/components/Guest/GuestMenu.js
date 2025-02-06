import React, { useState } from "react";
import MenuStyle from '../MenuScreen.module.css'

const GuestMenu = () => {

    const [menuButton,setMenuButton] = useState(false);

    return(
       <div>
             <div className={MenuStyle.menuPanel}>

                <div style={{background:'red', padding:'10px'}}>
                        red
                </div>

            </div>
       </div>
    );
};

export default GuestMenu;