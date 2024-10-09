import React from "react";
import DeclaringVariables from "./DeclaringVariables";
import DataType from "./DataTypes";
import style from "./VariablesStyle.module.css";
import Conditionals from "./Conditionals";




const Roadmap = () => {



    return(
        <div style={{
            display:'flex',
            flexDirection: 'column',
            backgroundColor:'D8D3CE',
            alignItems: 'center',
        }}> 
            <h1 className={style.variableData}>Declaration of variables</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}> <DeclaringVariables/></div>
            <h1 className={style.variableData}>Data Types</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' , }}> <DataType/></div>
            <h1 className={style.variableData}>Conditionals</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' , }}> <Conditionals/></div>
       
        </div>
    );
};

export default Roadmap;