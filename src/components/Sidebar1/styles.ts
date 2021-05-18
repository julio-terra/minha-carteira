import styled, { keyframes } from 'styled-components';
import colors from '../../styles/colors'

const animation = keyframes`  
from { width: 100px; }
to { width: 300px; }
`;

export const Container = styled.div`
  width: 300px;  
  height: 114vh;
  background-color: ${colors.secondaryGradient};

  /* animation: ${animation} 0.3s; */

  border-right: 0.5px solid white;
  @media(max-width: 768px){
    position: fixed;
    z-index: 10;
    animation: ${animation} 0.1s;
  }
`;
export const NavSection = styled.div`
  padding-top: 100px;
  overflow: hidden;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;
export const IconSection = styled.div`
  display: flex;
  flex-direction: row;

  margin-left: 30px;
  
  cursor: pointer;
`;
export const Icon = styled.img`
  width: 50px;
`;
export const Label = styled.h1`
  color: white;

  margin-right: 30px;
`;
export const LogoutSection = styled.div`
  display: flex;
  flex-direction: row;

  margin: 30vh 0 0 30px;

  cursor: pointer;
`;
export const LogoutIcon = styled.img`
  padding-right: 20px;
  width: 50px;
`;