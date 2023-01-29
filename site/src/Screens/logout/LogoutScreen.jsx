import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext'

const LogoutScreen = () => {

    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        document.cookie = `auth=null;max-age=0`;
        setAuth({ role: 0});
        navigate("/");
    },[])

  return (
    <div>LogoutScreen</div>
  )
}

export default LogoutScreen;