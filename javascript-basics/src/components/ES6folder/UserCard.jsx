import React from "react";

const UserCard = ({user}) =>{
    const {name,  hobby, country} = user;
    return (
    <div>
        <h2>{name}</h2>
        <p>Hobby: {hobby}</p>
        <p>Country: {country}</p>
    </div>
    );
};

export default UserCard;


