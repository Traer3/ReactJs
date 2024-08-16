import React from "react";
import style from '../styles/GlobalStyles.module.css';

const GlobalStyleButton = ({ children }) => {
    return <button className={style.button}>{children}</button>
};


export default GlobalStyleButton;