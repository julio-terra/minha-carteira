import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useBar } from '../../hooks/bar';

import MenuOpenIcon from '@material-ui/icons/MenuOpen';

import Logo from '../../assets/logo.svg';
import ArrowUp from '../../assets/arrow-up.svg';
import ArrowDown from '../../assets/arrow-down.svg';


import { Container, NavSection, IconSection, Icon, Label, LogoutSection } from './styles';

const Sidebar1: React.FC = () => {
  
  const { closes } = useBar();
  const { signOut } = useAuth();


  return (
      <Container>
        <MenuOpenIcon
        style={{ fontSize: 80, color: 'white', cursor: 'pointer', marginLeft: 10 }}
        onClick={closes}
        />
        <NavSection>
        <Link to="/">
         <IconSection>
            <Label>Dashboard</Label>
            <Icon src={Logo}/>
          </IconSection>
          </Link>
          <Link to="/entradas">
          <IconSection>
            <Label>Entradas</Label>
            <Icon src={ArrowUp}/>
          </IconSection>
          </Link>
          <Link to="/entradas">
          <IconSection>
            <Label>Saídas</Label>
            <Icon src={ArrowDown}/>
          </IconSection>
          </Link>
          <LogoutSection
          onClick={signOut}
          >
            <Label>Sair</Label>
          </LogoutSection>
        </NavSection>
      </Container>
  )
}

export default Sidebar1;