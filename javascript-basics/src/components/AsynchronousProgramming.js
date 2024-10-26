import React, { useEffect, useState } from "react";

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


const [data3, setData3] = useState(null);
const [error2, setError2] = useState(null);

const fetchAsyncData = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const result = await response.json();
        setData3(result.title);
    } catch(error2) {
        setError2("Feiled to load async data ");
    }
};

const [data4, setData4] = useState(null);
const [error3, setError3] = useState(null);

useEffect(()=>{
    const  fetchData = async () => {
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            const result = await response.json();
            setData4(result.title);
        } catch (error3){
            setError3("Failed to load async data but its with useEffect");
        }
    };
    fetchData();
},[]);



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

            <div title="async-await">
                <button onClick={fetchAsyncData}>Fetch Async Promise</button>
                {data3 && <p>{data3}</p>}
                {error2 && <p style={{color: "red"}}>{error2}</p>}
            </div>

            <div title="async-await-useEffect">
                {data4 && <p>{data4}</p>}
                {error3 && <p style={{color: "red"}}>{error3}</p>}
            </div>
            
        </div>
    );
};

export default AsynchronousProgramming;

