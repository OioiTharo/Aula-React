import styled from 'styled-components';

const InputStyle = styled.input`
  border-radius: 5px; 
  padding: 0px 10px; 
  border: 1px solid #ccc; 
  width: 80%; 
  min-width: 200px; 
  height: 40px;
`;

const NewTaskInput = ({ value, onChange, onKeyDown }) => (
    <InputStyle type="text" value={value} onChange={onChange} onKeyDown={onKeyDown} placeholder="Adicione uma nova tarefa... (Maximo 80 caracteres)" maxLength="80" />
);
  

 export default NewTaskInput;