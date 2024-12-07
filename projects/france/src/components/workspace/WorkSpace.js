import React from "react";
import TerminalWindow from "./TerminalWindow";
import SummaryWindow from "./SummaryWindow";

const WorkSpace = () => {
    return(
        <div>
            <TerminalWindow/>
            <SummaryWindow/>
        </div>
    );
};

export default WorkSpace;