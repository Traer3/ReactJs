import React, { useState } from "react";

const Callback = ()=> {

const [data, setData] = useState(null);

const fetchData = (callback) =>{
    setTimeout(()=>{
        const result = {message: "Data loaded"};
        callback(result);
    },2000);
};

const handleClick = ()=> { 
    fetchData((result)=>{
        setData(result.message);
    });
};

    return(
        <div>
            <button onClick={handleClick}>Fetch Data</button>
            {data && <p>{data}</p>}
        </div>
    );
};

export default Callback;

