import styled from "styled-components";

const Texto = styled.p`
    color: ${props => props.corDoTexto || `orange`};
    font-size: ${props => props.tamanhoDaFonte || `20px`};
    text-align: center;
    margin: 10px auto;
    max-width: 600px;
`;

export default Texto;