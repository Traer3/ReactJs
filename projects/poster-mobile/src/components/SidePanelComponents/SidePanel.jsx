import React from "react";
import SidePanels from '../SidePanels.module.css'

const SidePanel = ({panelStyle, panelState , newStyle, children }) =>{
    return(
        <div 
            className={`${SidePanels[panelStyle]} ${panelState && SidePanels[newStyle]}`}
            >
            {children}
        </div>
    );
};

export default SidePanel;