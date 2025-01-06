import React, { useEffect, useState } from "react";
import style from "../css/MenuScreen.module.css"

const Joining = () => {

    const [login, setLogin] = useState("");
    const [password,setPassword] = useState("");
    const [users, setUsers] = useState([]);
    const [joined, setJoined] = useState([]);


    useEffect(()=>{
        fetch('http://localhost:3001/registered')
           .then((res)=> res.json())
           .then((data)=> setJoined(data))
           .catch((err)=> console.log(err));
    },[]);

   
   const handleLoginChange = (event) => {
    setLogin(event.target.value);
   };

   const handlePasswordChange = (event) => {
    setPassword(event.target.value);
   };

   const handleConnect = () =>{
    fetch('http://localhost:3001/joining',{
         method:'POST',
         headers:{'Content-Type': 'application/json'},
         body: JSON.stringify({login,password}),
    })
        .then((res)=>{
            if(res.ok){
                return res.text();
            }else{
                throw new Error('Failed to connect');
            }
        })
        .then((message) => console.log(message))
        .catch((err) => console.error(err));
    };

   const handleAddUser = (event) => {
    event.preventDefault();
        if(login && password){
            setUsers((prevUsers)=>[
                ...prevUsers,
                { id: prevUsers.length + 1, login, password},
            ]);
            handleConnect();
            setLogin("");
            setPassword("");
        }else{
            alert("Fill the filds")
        }
   };

   

    
    return(
        <div 
            className={style.LogIn} 
            
        >
            <form  onSubmit={handleAddUser} >
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


            {joined.length > 0  &&(
                <table> 
                <thead>
                        <tr>
                            <th>ID</th>
                            <th>Login</th>
                            <th>Password</th>
                        </tr>
                </thead>
                 <tbody>
                    {joined.map((conn)=>(
                        <tr key={conn.id}>
                            <td >{conn.id}</td>
                            <td >{conn.login}</td>
                            <td >{conn.password}</td>
                        </tr>
                    ))}
                 </tbody>
                </table>
            )}
        </div>
    );
};

export default Joining;