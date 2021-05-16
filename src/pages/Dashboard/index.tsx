import React, { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import Login from '../Login';
import Sidebar1 from '../../components/Sidebar1'
import Sidebar2 from '../../components/Sidebar2';
import { Container, Box, PageContainer, Select, Balance, Datas, Exi, Appet} from './styles';
import { useBar } from '../../hooks/bar'
import Header from '../../components/Header';

const Dashboard: React.FC = () => {
    const { oppen } = useBar();
    const { logged } = useAuth();

    const [selectValue, setSelectValue] = useState('december');

 return(
     <>
     {logged?
     <>
        <Container>
            {oppen? <Sidebar1 /> : <Sidebar2 />}
            <Box>
                <Header />
                <PageContainer>
                    <Select
                    onChange={e => setSelectValue(e.target.value)}
                    >
                        <option value="december">dezembro</option>
                        <option value="January">janeiro</option>
                        <option value="February">fevereiro</option>
                        <option value="March">março</option>
                        <option value="April">abril</option>
                    </Select>
                    <Datas>
                    <Balance></Balance>
                    <Appet></Appet>
                    <Exi></Exi>
                    </Datas>
                </PageContainer>
            </Box>
        </Container>
      </>

      
      : <Login />}
     </>
 )
}

export default Dashboard;