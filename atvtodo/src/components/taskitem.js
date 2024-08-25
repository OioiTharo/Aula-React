import React from 'react';
import styled from 'styled-components';
import Btn from './botao';
import Checkbox from './checkbox'


const ItemStyle = styled.li`
  display: flex;
  align-items: center; 
  justify-content: flex-start; 
  padding: 5px;
  background-color: ${(props) => (props.completed ? '#c6d4b8' : '#fff')};
  list-style-type: none;
  width: 100%;
`;

const Span = styled.span`
  flex: 1;
  padding: 0 10px;
  text-align: left;
  width: 100%;
  min-width: 100px;
`;

const TaskItem = ({ task, toggleTaskCompletion, removeTask }) => (
    <ItemStyle completed={task.completed}>
        <Checkbox  checked={task.completed} onChange={toggleTaskCompletion}/>
        <Span>{task.text}</Span>
        <Btn onClick={removeTask}><i class="material-icons">delete</i></Btn>
    </ItemStyle>
);

export default TaskItem;
