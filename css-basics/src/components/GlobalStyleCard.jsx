import React from "react";
import style from '../styles/GlobalStyles.module.css'

const GlobalStyleCard = ({children}) => {

    return <div className={style.card}>{children}</div>

};

export default GlobalStyleCard;