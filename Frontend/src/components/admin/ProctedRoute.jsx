import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const ProctedRoute = ({children}) => {
    const { user } = useSelector(store => store.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if(user === null || user.role !== 'recruiter'){
            navigate("/");
        }
    },[]);
  return (
    <>
     {children} 
    </>
  )
}

export default ProctedRoute
