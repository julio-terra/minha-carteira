import React, { useState } from 'react';


import { useAuth } from '../../hooks/auth';
import { useBar } from '../../hooks/bar';
import UserData from '../../components/UserData';


import Login from '../Login';
import Sidebar1 from '../../components/Sidebar1'
import Sidebar2 from '../../components/Sidebar2';
import Header from '../../components/Header';


import {Container,
        Box,
        PageContainer,
        Topbar,
        Tittle,
        Select,
        Balance,
        Datas,
        Exi,
        Appet,
        DataTittle,
        DataValue,
        PizzaGraph
        
    } from './styles';


const Dashboard: React.FC = () => {
    const { oppen } = useBar();
    const { logged } = useAuth();
    
    const [month, setmonth] = useState<String>("december");

    const listMonth = [
        "december",
        "january",
        "February",
        "March",
        "April"
    ];



 return(
     <>
     {logged?
     <>
        <Container>
            {oppen? <Sidebar1 /> : <Sidebar2 />}
            <Box>
                <Header />
                <PageContainer>
                    <Topbar>
                    <Tittle>
                        Dashboard
                    </Tittle>
                    <Select onChange={e => setmonth(e.target.value)}>
                        {listMonth.map(e => (
                            <option value={e}>{e}</option>
                        ))}
                    </Select>
                    </Topbar>
                    <Datas>
                    <Balance>
                        <DataTittle>saldo</DataTittle>
                        <DataValue>
                            {
                            month === "december"? UserData.balance.december:
                            month === "january"? UserData.balance.January:
                            month === "February"? UserData.balance.February:
                            month === "March"? UserData.balance.March:
                            UserData.balance.April
                            }
                        </DataValue>
                    </Balance>
                    <Appet>
                        <DataTittle>entradas</DataTittle>
                        <DataValue>{
                            month === "december"? UserData.appetizer.december:
                            month === "january"? UserData.appetizer.January:
                            month === "February"? UserData.appetizer.February:
                            month === "March"? UserData.appetizer.March:
                            UserData.appetizer.April
                            }
                        </DataValue>
                    </Appet>
                    <Exi>
                        <DataTittle>saídas</DataTittle>
                        <DataValue>{
                            month === "december"? UserData.exits.december:
                            month === "january"? UserData.exits.January:
                            month === "February"? UserData.exits.February:
                            month === "March"? UserData.exits.March:
                            UserData.exits.April
                        }</DataValue>
                    </Exi>
                    <PizzaGraph></PizzaGraph>
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