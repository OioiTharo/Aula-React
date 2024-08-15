import styled from "styled-components";

const Texto = styled.p`
    color: ${props => props.corDoTexto || `orange`};
    font-size: ${props => props.tamanhoDaFonte || `20px`};
`;

export default Texto;