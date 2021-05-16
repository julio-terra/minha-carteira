import React, { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import Login from '../Login';
import Sidebar1 from '../../components/Sidebar1'
import Sidebar2 from '../../components/Sidebar2';
import { Container, Box, PageContainer } from './styles';
import { useBar } from '../../hooks/bar'
import Header from '../../components/Header';

const Exits: React.FC = () => {
    const { oppen } = useBar();
    const { logged } = useAuth();
 return(
     <>
     {logged?
     <>
        <Container>
            {oppen? <Sidebar1 /> : <Sidebar2 />}
            <Box>
                <Header />
                <PageContainer>
                    <h1>saidas</h1>
                </PageContainer>
            </Box>
        </Container>
      </>

      
      : <Login />}
     </>
 )
}

export default Exits;