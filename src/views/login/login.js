import { useContext, useState } from 'react';
import {
  MainContainer,
  StyledInput,
  StyledButton
} from '../../components';
import RikolinoVideo from '../../assets/video/rikolino.mp4';
import { StyledForm } from './styled';
import { Redirect } from 'react-router';
import ROUTES from '../../utilities/routes';
import { UserContext } from '../../providers/user-provider';

const Login = () => {
  const [credentials, setCredentials] = useState({});
  const user = useContext(UserContext)

  const handleInputChange = (e) => {
    let newCredentials = { ...credentials }
    newCredentials[e.target.name] = e.target.value
    setCredentials(newCredentials)
  }

  const onSubmit = (e) => {
    e.preventDefault();

    //signIn(credentials.email, credentials.password)
    
    // TODO: implementar lógica para el login.
    user.signIn(credentials.username, credentials.password)
  }

  if (user.data) return <Redirect to={ROUTES.HOME}/> // Redirects to home if there is a user logged

  return <MainContainer centered>
    <h1>Rutéame</h1>
    <StyledForm onSubmit={onSubmit}>
      <label>
        Correo electrónico:
        <StyledInput required onChange={handleInputChange} name='username' type='text' placeholder='Usuario' />
      </label>
      <label>
        Contraseña
        <StyledInput required onChange={handleInputChange} name='password' type='password' placeholder='contraseña' />
      </label>
      <StyledButton>
        Iniciar sesión
      </StyledButton>
    </StyledForm>

  </MainContainer>

}

export default Login;