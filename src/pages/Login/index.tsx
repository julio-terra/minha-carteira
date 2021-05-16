import React, { useState } from 'react';
import Dollar from '../../assets/dollar.svg'

import { Container, LoginBox, TittleBox, Tittle, IconBox, Icon,
  EnterTittle, Input, InputBox, Button

} from './styles';
import { useAuth } from '../../hooks/auth'
 
const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { signIn} = useAuth();
  return (
    <Container>
      <TittleBox>
        <IconBox>
          <Icon
          src={Dollar}
          ></Icon>
        </IconBox>
        <Tittle>Minha carteira</Tittle>
      </TittleBox>
      <LoginBox>
        <EnterTittle>Entrar</EnterTittle>
        <InputBox onSubmit={() => signIn(email,password)} >
          <Input
          onChange={e => setEmail(e.target.value)}
          placeholder="email"
          ></Input>
          <Input
          onChange={e => setPassword(e.target.value)}
          placeholder="senha" type="password"
          ></Input>
          <Button type="submit"
          >Acessar</Button>
        </InputBox>
      </LoginBox>
    </Container>
  )
}

export default Login;