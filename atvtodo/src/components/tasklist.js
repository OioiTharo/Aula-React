import React from 'react';
import TaskItem from './taskitem';
import styled from 'styled-components';

const ListStyle = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TaskList = ({ tasks, toggleTaskCompletion, removeTask }) => (
  <ListStyle>
    {tasks.map((task, index) => (
      <TaskItem key={index} task={task} toggleTaskCompletion={() => toggleTaskCompletion(index)} removeTask={() => removeTask(index)}/>
    ))}
  </ListStyle>
);

export default TaskList;

