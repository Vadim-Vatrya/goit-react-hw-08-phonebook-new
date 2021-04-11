import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';



const RegisterView = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
          setName(value);
          break;

      case 'email':
          setEmail(value);
          break;

      case 'password':
          setPassword(value);
          break;

      default:
          return;
        }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!name || !email || !password){ 
      return
    };

    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };


  return (
    <>
      
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Name
          <input
            onChange={handleChange}
            type="name"
            name="name"
            placeholder="Enter name"
            value={name}
          />
        </label>
        <label>
          E-mail
          <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Enter e-mail"
            value={email}
          />
        </label>
        <label>
          Password
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
          />
        </label>

        <button type="submit">Sing Up</button>
        
      </form>
    </>
  )

};

export default RegisterView;