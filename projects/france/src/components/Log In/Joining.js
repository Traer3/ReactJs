import React, { useState } from "react";
import style from "../css/MenuScreen.module.css"

const Joining = () => {

    const [login, setLogin] = useState("");
    const [password,setPassword] = useState("");

    const [users, setUsers] = useState([]);


   
   const handleLoginChange = (event) => {
    setLogin(event.target.value);
   };

   const handlePasswordChange = (event) => {
    setPassword(event.target.value);
   };

   const handleAddUser = (event) => {
    event.preventDefault();
        if(login && password){
            setUsers((prevUsers)=>[
                ...prevUsers,
                { id: prevUsers.length + 1, login, password},
            ]);
            setLogin("");
            setPassword("");
        }else{
            alert("Fill the filds")
        }
   };

    
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
            <form style={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center'
            }} onSubmit={handleAddUser} >
                <input 
                    type="text" 
                    value={login} 
                    onChange={handleLoginChange} 
                    placeholder="login"
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={handlePasswordChange}
                    placeholder="password"
                />
                <button type="submit">join</button>
            </form>

            {users.length > 0  &&(
                <table style={{
                    marginTop:'20px',
                    borderCollapse:'collapse',
                    width:'300px',
                    textAlign:'left',
                 }}> 
                <thead>
                        <tr>
                            <th style={{border:'1px solid rgba(62, 94, 157)', padding:'5px'}}>
                                ID
                            </th>
                            <th style={{border:'1px solid rgba(62, 94, 157)', padding:'5px'}}>
                                Login
                            </th><th style={{border:'1px solid rgba(62, 94, 157)', padding:'5px'}}>
                                Password
                            </th>
                        </tr>
                </thead>
                 <tbody>
                    {users.map((user)=>(
                        <tr key={user.id}>
                            <td style={{border:'1px solid rgba(62, 94, 157)', padding:'5px'}}>
                                {user.id}
                            </td>
                            <td style={{border:'1px solid rgba(62, 94, 157)', padding:'5px'}}>
                                {user.login}
                            </td>
                            <td style={{border:'1px solid rgba(62, 94, 157)', padding:'5px'}}>
                                {user.password}
                            </td>
                        </tr>
                    ))}
                 </tbody>
                </table>
            )}
        </div>
    );
};

export default Joining;