import React, { useState } from "react";

const AsynchronousProgramming = ()=> {

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

const [data2, setData2] = useState(null);
const [error, setError] = useState(null);

const fetchPromise = () =>{
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response)=> response.json())
    .then((result)=> setData2(result.title))
    .catch((error)=> setError("Failed to load data"));
};



    return(
        <div>

            <div title="callbakc">
                <button onClick={handleClick}>Fetch Data</button>
                {data && <p>{data}</p>}
            </div>

            <div title="promise">
                <button onClick={fetchPromise}>Fetch Promise</button>
                {data2 && <p>{data2}</p>}
                {error && <p style={{color: "red"}}>{error}</p>}
            </div>
            
        </div>
    );
};

export default AsynchronousProgramming;

