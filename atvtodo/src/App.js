import './App.css';
import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Grafico from './components/grafico';
import Titulo from './components/titulo';
import Btn from './components/botao';
import TaskList from './components/tasklist';
import NewTaskInput from './components/input';
import ContentContainer from './components/divs';

// Registro dos componentes do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  const [task, setTask] = useState(''); 
  const [tasks, setTasks] = useState([]); 

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]); 
      setTask('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed; 
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index); 
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <Titulo>Lista de Tarefas</Titulo>
      <NewTaskInput type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Digite uma nova tarefa"/>
      <Btn onClick={addTask}>Adicionar</Btn>

      <ContentContainer>
          <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} removeTask={removeTask} />
          <Grafico tasks={tasks} />
      </ContentContainer>
    </div>
  );
}

export default App;
