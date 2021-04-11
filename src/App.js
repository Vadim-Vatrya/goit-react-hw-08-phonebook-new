import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Redirect} from 'react-router-dom';

 
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import authOperations from './redux/auth/auth-operations'

import AppBar from './components/AppBar';
import Container from './views/Container';
import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';


const App = () => {
   
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(authOperations.getCurrentUser());
    }, [dispatch]);

    return (
        <Container>
            <AppBar />

            <Switch>
            <PublicRoute exact path="/"component={HomeView} />
            <PrivateRoute path='/contacts'  redirectTo="/login" component ={ContactsView} />
            <PublicRoute path="/register" restricted redirectTo="/contacts" component={RegisterView}/>
            <PublicRoute path="/login" restricted redirectTo="/contacts" component={LoginView}/>
            <Redirect to="/" />
            </Switch>
        </Container>
        

    )
};

export default App;

