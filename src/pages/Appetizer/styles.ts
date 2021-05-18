import styled from 'styled-components';
import colors from '../../styles/colors';

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
  justify-content: center;
  align-items: center;
`;
