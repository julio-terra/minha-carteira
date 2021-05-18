import styled from 'styled-components';
import colors from '../../styles/colors'

export const Container = styled.div`
    width: 100%;
    height: 100px;
    background-color: ${colors.secondaryGradient};

    border-bottom: 0.1px solid white;

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    position: fixed;
    
`;
export const OlaName = styled.p`
    color: white;
    font-size: calc(0.8vw + 20px);
    margin-right: 30px;
`;