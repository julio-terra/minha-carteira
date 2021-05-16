import styled from 'styled-components';
import colors from '../../styles/colors'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color:${colors.primaryGradient};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const TittleBox = styled.div`
  width: 90%;
  max-width: 400px;
  height: 100px;
  background-color:${colors.primaryGradient};

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Tittle = styled.h1`
  font-size: 40px;
  color: ${colors.white};
  @media(max-width: 768px){
    font-size: 30px;
  }
`;
export const IconBox = styled.div`
  background-color: ${colors.warning};
  width: 60px;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10%;
  margin-right: 20px;
`;
export const Icon = styled.img`
  width: 90%;
  height: 90%;
`;

export const LoginBox = styled.div`
  width: 90%;
  max-width: 400px;
  height: 400px;

  background-color:${colors.secondaryGradient};

  border-radius: 5%;
`;
export const EnterTittle = styled.h1`
  font-size: 40px;
  margin-left: 40px;
  color: ${colors.white};
`;

export const InputBox = styled.form`
  max-width: 400px;
  width: 100%;
  margin-top: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Input = styled.input`
  width: 85%;
  max-width: 300px;
  height: 45px;
  margin-top: 10px;

  border-radius: 5px;
  border: none;
  outline: none;
`;
export const Button = styled.button`
  width: 85%;
  max-width: 300px;
  height: 50px;

  margin-top: 10px;
  border-radius: 5px;
  border: none;

  background-color: ${colors.warning};
  color: ${colors.white};
`;