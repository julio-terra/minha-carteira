import React from 'react';
import UserData from '../../components/UserData';

import { Container, OlaName } from './styles';

const Header: React.FC = () => {
  return (
  <Container>
    <OlaName>olá, <br /> {UserData.name}</OlaName>
  </Container>
  )
}

export default Header;