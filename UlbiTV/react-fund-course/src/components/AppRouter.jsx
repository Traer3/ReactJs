import React, { useContext, useEffect } from "react";
import {Routes, Route, useNavigate } from "react-router-dom";
import { publicRoutes, privateRotes } from "../router/RoutesPaths";
import { AuthContext } from "../context";
import Loader from "./UI/Loader/Loader";


function RedirectToPosts() {
    const navigate = useNavigate()
    useEffect(() => {
      navigate('/login')
    }, [navigate])
  }

const AppRouter = () => {

  const {isAuth, isLoading} = useContext(AuthContext)

  if(isLoading){
    return <Loader/>
  }
  
  return (

    isAuth
    ? 
    <Routes>
        {privateRotes.map(route => 
          <Route 
            Component={route.component} 
            path={route.path} 
            exact={route.exact}
            key={route.path}
          />
        )}
        <Route path="*" element={<RedirectToPosts />} />
      </Routes>
    :
    <Routes>
        {publicRoutes.map(route => 
          <Route 
            Component={route.component} 
            path={route.path} 
            exact={route.exact}
            key={route.path}
          />
        )}
        <Route path="*" element={<RedirectToPosts />} />
      </Routes>
    
  );
}

export default AppRouter;

