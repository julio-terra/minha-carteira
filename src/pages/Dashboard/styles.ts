import styled, { keyframes } from 'styled-components';

import colors from '../../styles/colors';

import ArrowUp from '../../assets/arrow-up.svg';
import ArrowDown from '../../assets/arrow-down.svg';
import Dollar from '../../assets/dollar.svg';


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

  min-height: 100vh;

  margin-top: 100px;

  background-color: ${colors.primaryGradient};

  display: flex;
  flex-direction: column;
  @media(min-width: 768px){
    margin-left: 100px;
  }
`;
export const Topbar = styled.div`
  width: 80%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 20px 0 0 5%;
`;
export const Tittle = styled.h1`
  color: white;
`;
export const Select = styled.select`
  width: 150px;
  height: 35px;
  font-size: 14px;

  background: white;
  color: black;

  border-radius: 5px;

  outline: none;

  option {
    min-height: 20px;

    color: black;
    background: white;

    display: flex;

    white-space: pre;
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
      transform: translateX(-100%);
    }
    100%{
      opacity: 1;
      transform: translateX(0%);
    }
`;
export const Balance = styled.div`
    max-width: 330px;
    width: 80vw;
    margin: 10px;
    height: 140px;
    
    background: url(${Dollar}) #4649AE no-repeat right;
    background-size: 25%;

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
export const DataTittle = styled.p`
    font-size: calc(0.3vw + 15px);

    color: white;

    margin: 3%;
`;
export const DataValue = styled.h1`
    font-size: calc(0.3vw + 30px);

    color: white;

    margin-left: 20%;
    @media(max-width: 768px){
      margin-left: 10%;
    }
`;
export const Graph = styled.div`
    margin-top: 70px;
    overflow: auto;
    @media(min-width: 768px){
      display: flex;
      justify-content: center;
    }
    @media(max-width: 768px){
      direction: rtl;
    }
`;