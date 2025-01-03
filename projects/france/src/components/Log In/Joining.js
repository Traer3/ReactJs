import React, { useState } from "react";
import style from "../css/MenuScreen.module.css"

const Joining = () => {

    const [login, setLogin] = useState("");
    const [password,setPassword] = useState("");

    const [tableData, setTableData] = useState(null);
    const [showTable, setShowTable] = useState(false);
   

   const loginChange = (event) => {
        setLogin(event.target.value);
   };

   const passChange = (event) =>{
        setPassword(event.target.value);
   };

   const handleSubmit = (event) =>{
        event.preventDefault();
        setTableData({login, password});
        setShowTable(true)
   }


    
    return(
        <div 
            className={style.LogIn} 
            style={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center'
            }}
        >
            <form onSubmit={handleSubmit} >
                <input 
                    type="text" 
                    value={login} 
                    onChange={loginChange} 
                    placeholder="login"
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={passChange}
                    placeholder="password"
                />
                <button type="submit">join</button>
            </form>

            {showTable && tableData &&(
                <div style={{
                    border:'1px solid red',
                    width:'250px',
                    height:'450px',
                    padding:'0px',
                    fontSize:'12px',
                    textAlign:'left',
                 }}
                >
                    <p>ID: 1</p>
                    <p>User: {tableData.login}</p>
                    <p>Password:{tableData.password}</p>
                </div>
            )}
        </div>
    );
};

export default Joining;