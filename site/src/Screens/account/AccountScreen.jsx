import React from 'react';
import { useContext } from 'react';
import Account from '../../Components/Account.jsx';
import { AuthContext } from '../../contexts/AuthContext.jsx';

const AccountScreen = (props) => {
  const { auth } = useContext(AuthContext);
  return (
   
      <div>
        {auth.role > 0 &&
          <Account/>
        }
      </div>
    
  )
}

export default AccountScreen;