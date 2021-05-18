import React from 'react';

import { Link} from "react-router-dom";
import { useAuth } from '../../hooks/auth';
import { useBar } from '../../hooks/bar';

import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import Logo from '../../assets/logo.svg';
import ArrowUp from '../../assets/arrow-up.svg';
import ArrowDown from '../../assets/arrow-down.svg';
import Logout from '../../assets/Logout.png';

import { Container, NavSection, Icon, LogoutIcon } from './styles';



const Sidebar2: React.FC = () => {

  const { signOut } = useAuth();
  const { oppens } = useBar();

  return (
      <Container>
        <MenuOpenIcon
        style={{ fontSize: 80, color: 'white', cursor: 'pointer', marginLeft: 10 }}
        onClick={oppens}
        />
        <NavSection>
        <Link to="/">
          <Icon src={Logo}/>
        </Link>
        <Link to="/entradas">
          <Icon src={ArrowUp}/>
        </Link>
        <Link to="/saidas">
          <Icon src={ArrowDown}/>
        </Link>
          <LogoutIcon onClick={signOut}
           src={Logout} />
        </NavSection>
      </Container>
  )
}

export default Sidebar2;