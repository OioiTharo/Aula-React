import { Title } from 'chart.js';
import React from 'react';
import { Pie } from 'react-chartjs-2';
import styled from 'styled-components';


const ChartContainer = styled.div`
  width: 300px;  
  height: 300px; 
  text-align: center;
`;
const Progresso = styled.h2`
    color:  #9c325c;
`;


const Grafico = ({ tasks }) => {
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = tasks.length - completedTasks;

  const data = {
    labels: ['Concluídas', 'Pendentes'],
    datasets: [
      {
        data: [completedTasks, pendingTasks],
        backgroundColor: ['#6ca6a3', '#e5e6b8'],
      },
    ],
  };

  return (
    <ChartContainer>
        <Progresso>Progresso das Tarefas</Progresso>
        <Pie data={data} />
    </ChartContainer>
  );
};

export default Grafico;
