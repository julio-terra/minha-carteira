import React, { useState } from 'react';



import { useAuth } from '../../hooks/auth';
import { useBar } from '../../hooks/bar';
import UserData from '../../components/UserData';


import Login from '../Login';
import Sidebar1 from '../../components/Sidebar1'
import Sidebar2 from '../../components/Sidebar2';
import Header from '../../components/Header';

import {
        LineChart,
        Line,
        XAxis,
        YAxis,
        CartesianGrid,
        Tooltip,
        Legend
  } from 'recharts';

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
        Graph
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

      const data = [
        {name: 'december',
        entradas: UserData.appetizer.decemberNumber,
        saídas: UserData.exits.decemberNumber},

        {name: 'january',
        entradas: UserData.appetizer.JanuaryNumber,
        saídas: UserData.exits.JanuaryNumber,},

        {name: 'february',
        entradas: UserData.appetizer.FebruaryNumber,
        saídas: UserData.exits.FebruaryNumber},
        
        {name: 'march',
        entradas: UserData.appetizer.MarchNumber,
        saídas: UserData.exits.MarchNumber},
        
        {name: 'april',
        entradas: UserData.appetizer.AprilNumber ,
        saídas: UserData.exits.AprilNumber},
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
                    </Datas>
                    <Graph>
                    <LineChart
                            width={980}
                            height={350}
                            data={data}
                            margin={{top: 5, right: 30, left: 20, bottom: 5}}
                            >
                            <Line
                            type='monotone'
                            dataKey='entradas'
                            stroke='#2afb00'
                            activeDot={{r: 8}}
                            />
                            <Line
                            type='monotone'
                            dataKey='saídas'
                            stroke='#ff0000'
                            activeDot={{r: 8}}
                            />
                        <CartesianGrid strokeDasharray='3 3'/>
                        <Tooltip/>
                        <YAxis/>
                        <XAxis dataKey='name'/>
                        <Legend />
                        </LineChart>
                        </Graph>
                </PageContainer>
            </Box>
        </Container>
      </>
      
      : <Login />}
     </>
 )
}

export default Dashboard;