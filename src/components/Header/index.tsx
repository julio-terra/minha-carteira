import React from 'react';

import UserData from '../../components/UserData';
import { useBar } from '../../hooks/bar';

import MenuOpenIcon from '@material-ui/icons/MenuOpen';

import {Container,
        OlaName,
        Menu
      } from './styles';

const Header: React.FC = () => {
  const { oppens } = useBar();

  return (
  <Container>
    <Menu>
    <MenuOpenIcon
        style={{ fontSize: 80, color: 'white', cursor: 'pointer', marginLeft: 10 }}
        onClick={oppens}
        />
    </Menu>
    <OlaName>olá, <br /> {UserData.name}</OlaName>
  </Container>
  )
}

export default Header;