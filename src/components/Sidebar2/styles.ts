import styled, { keyframes } from 'styled-components';
import colors from '../../styles/colors'

const animation = keyframes`  
from { width: 300px; }
to { width: 100px; }
`;

export const Container = styled.div`
  width: 100px;
  height: 100vh;
  background-color: ${colors.secondaryGradient};
  /* animation: ${animation} 0.3s; */

  border-right: 1px solid white;

  @media(max-width:768px){
    display: none;
  }
`;
export const NavSection = styled.div`
  padding-top: 100px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Icon = styled.img`
  margin-top: 40px;

  width: 50px;
  
  cursor: pointer;
`;
export const LogoutIcon = styled.img`
  margin-top: 30vh;
  padding-right: 20px;

  width: 50px;

  cursor: pointer;
`;
