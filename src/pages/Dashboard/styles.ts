import styled, { keyframes } from 'styled-components';
import colors from '../../styles/colors';
import ArrowUp from '../../assets/arrow-up.svg';
import ArrowDown from '../../assets/arrow-down.svg';


export const Container = styled.div`
  display: flex;
`;
export const Box = styled.div`
  width: 100vw;
  overflow: hidden;
`;
export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.primaryGradient};

  display: flex;
  flex-direction: column;
`;
export const Select = styled.select`
  width: 150px;
  height: 35px;
  background: white;
  color: black;
  font-size: 14px;
  border-radius: 5px;
  outline: none;
  margin-left: 5%;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`
export const Datas = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    margin-top: 50px;
`;
const BalanceInputAnimation = keyframes`
    0% {
      opacity: 0;
      transform: translateX(-100%)
    }
    100%{
      opacity: 1;
      transform: translateX(0%)
    }
`;
export const Balance = styled.div`
    max-width: 330px;
    width: 80vw;
    margin: 10px;
    height: 140px;
    
    
    background-color: #4649AE;

    border-radius: 10px;

    overflow: hidden;
    animation: ${BalanceInputAnimation} 0.2s 0s;

`;
const AppetInputAnimation = keyframes`
    0% {
      opacity: 0;
      transform: translateX(100%)
    }
    100%{
      opacity: 1;
      transform: translateX(0%)
    }
`;
export const Appet = styled.div`
    max-width: 330px;
    width: 80vw;
    margin: 10px;
    height: 140px;
    
    background: url(${ArrowUp}) #FB9F00 no-repeat right;
    background-size: 40%;

    border-radius: 10px;

    overflow: hidden;
    animation: ${AppetInputAnimation} 0.2s 0s;

`;
export const Exi = styled.div`
    max-width: 330px;
    width: 80vw;
    margin: 10px;
    height: 140px;
    
    
    background: url(${ArrowDown}) #FF5400 no-repeat right;
    background-size: 40%;
    border-radius: 10px;
    overflow: hidden;
    animation: ${BalanceInputAnimation} 0.2s 0s;

`;