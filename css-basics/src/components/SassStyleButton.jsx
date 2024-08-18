import React from "react";
import style from '../styles/SassStyle.module.scss';

const SassStyleButton = ({children}) => {
    return <button className={style.button}>{children}</button>

};

export default SassStyleButton;
