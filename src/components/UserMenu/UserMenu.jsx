import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';


const UserMenu = () => {

  const name = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(authOperations.logOut())
  };

  return (
    <div>
      {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
      <span>Welcome, {name}</span>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
  </div>
  )
};

export default UserMenu;