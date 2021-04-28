import { useState } from "react";
import {
  MainContainer,
  StyledInput,
  StyledButton
} from "../../components";
import RikolinoVideo from '../../assets/video/rikolino.mp4';
import { StyledForm } from "./styled";
import { validateEmail } from "../../utilities/input-validator";
import { Redirect } from "react-router";
import ROUTES from "../../utilities/routes";

const Login = () => {
  const [credentials, setCredentials] = useState({});
  const [credentialsErrors, setCredentialsErrors] = useState({});
  const [user, setUser] = useState(false); // Dummy user implementation, navigates if true

  const handleInputChange = (e) => {
    let newCredentials = { ...credentials }
    newCredentials[e.target.name] = e.target.value
    setCredentials(newCredentials)
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (!handleValidation()) return
    
    // TODO: implementar lçogica para el login.
    setUser(true)
  }

  const handleValidation = () => {
    setCredentialsErrors({ email: false })
    let formIsValid = validateEmail(credentials.email)

    if (!formIsValid) setCredentialsErrors({ email: true })

    return formIsValid;
  }

  if (user) return <Redirect to={ROUTES.HOME}/> // Redirects to home if there is a user logged

  return <MainContainer centered>
    <h1>Este es un pedazo de login que mejor dicho</h1>
    <video autoPlay muted loop src={RikolinoVideo} type='video/mp4' />
    <StyledForm onSubmit={onSubmit}>
      <label>
        Correo electrónico:
        <StyledInput required error={credentialsErrors.email} onChange={handleInputChange} name='email' type='text' placeholder='email' />
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