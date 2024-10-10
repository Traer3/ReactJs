import React from "react";
import DeclaringVariables from "./DeclaringVariables";
import DataType from "./DataTypes";
import style from "./VariablesStyle.module.css";
import Conditionals from "./Conditionals";
import Cycles from "./Cycles";
import Functions from "./Functions";
import Scopes from "./Scopes";
import Arrays from "./Arrays";




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
            <h1 className={style.variableData}>Cycles</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' , }}> <Cycles/> </div>
            <h1 className={style.variableData}>Functions</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' , }}> <Functions/> </div>
            <h1 className={style.variableData}>Scopes</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' , }}> <Scopes/> </div>
            <h1 className={style.variableData}>Arrays</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' , }}> <Arrays/> </div>
       
        </div>
    );
};

export default Roadmap;