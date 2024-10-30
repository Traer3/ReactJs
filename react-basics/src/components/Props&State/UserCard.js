import React from "react";

const UserCard = ({name, age, country}) => {

    return(
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Country {country}</p>
        </div>
    );
};

export default UserCard;

