import React from 'react'
import Login from '../components/Login/Login.jsx'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const {isAuthenticated} = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if(isAuthenticated===true){
      navigate("/");
    }

  }, [isAuthenticated,navigate]);
  return (
    <div>
      <Login/>
    </div>
    
  )
}

export default LoginPage