import React,{Suspense} from 'react';
import {BrowserRouter as Router, Route , Routes } from 'react-router-dom';

const Home = React.lazy(()=> import('./components/CodeSplittingHome'));
const About = React.lazy(()=> import('./components/CodeSplittingAbout'));


const AppForCodeSplitting = () => {

    return (

    <Router>
         <Suspense fallback= {<div>Loading...</div>}>

             <Routes>

                 <Route exact path="/" element = {<Home/>} />
                 <Route path = "/about" element = {<About/>}/> 

            </Routes>
             
      
         </Suspense>

    </Router>

    );

};

export default AppForCodeSplitting;