import styled from 'styled-components';

const InputStyle = styled.input`
  border-radius: 5px; 
  padding: 0px 10px; 
  border: 1px solid #ccc; 
  width: 80%; 
  height: 40px;
`;

const NewTaskInput = ({ value, onChange, onKeyDown }) => (
    <InputStyle type="text" value={value} onChange={onChange} onKeyDown={onKeyDown} placeholder="Adicione uma nova tarefa..." maxLength="50" />
);
  

 export default NewTaskInput;