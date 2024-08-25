import styled from 'styled-components';

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const CustomCheckbox = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 5px; 
  border: 2px solid #ccc;
  background-color: ${(props) => (props.checked ? '#9c325c' : '#fff')};
  transition: background-color 0.3s, border-color 0.3s;
  position: relative;
  

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    background-color: #fff;
    border-radius: 2px;
    transform: translate(-50%, -50%);
    display: ${(props) => (props.checked ? 'block' : 'none')};
  }
`;

const Checkbox = ({ checked, onChange }) => (
  <CheckboxWrapper>
    <HiddenCheckbox checked={checked} onChange={onChange} />
    <CustomCheckbox checked={checked} />
  </CheckboxWrapper>
);

export default Checkbox;
