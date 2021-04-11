import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import authSelectors from '../../redux/auth/auth-selectors';

const Navigation = () => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <nav>
      <NavLink
      exact
      to='/'
      // className={s.link}
      // activeClassName={s.activeLink}
      >
        Home
      </NavLink>
      {isAuthenticated && (
        <NavLink
        to='/contacts'
        // className={s.link}
        // activeClassName={s.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  )
}

export default Navigation;