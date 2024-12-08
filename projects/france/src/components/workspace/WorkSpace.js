import React from "react";
import TerminalWindow from "./TerminalWindow";
import SummaryWindow from "./SummaryWindow";
//import MicrosoftWordSimmary from "../testing/MicrosoftWordSimmary";
import MsWordReader from "../testing/MsWordReader";

const WorkSpace = () => {
    return(
        <div>
            <TerminalWindow/>
            <SummaryWindow/>
            <MsWordReader/>
        </div>
    );
};

export default WorkSpace;