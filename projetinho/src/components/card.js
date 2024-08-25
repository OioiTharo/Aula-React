import styled from 'styled-components';
import Imagem from './imagem';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  margin: 5px;
  width: 200px;
  text-align: center;
  background-color: #f4f6f6 ;
`;

const CardTitulo = styled.h3`
  margin: 10px 0;
`;

const CardTexto = styled.p`
  padding: 0 10px;
  margin-bottom: 10px;
  text-align: justify;
`;

const Card = ({ titulo, texto, imageUrl }) => (
  <CardContainer>
    <Imagem src={imageUrl} alt={titulo} />
    <CardTitulo>{titulo}</CardTitulo>
    <CardTexto>{texto}</CardTexto>
  </CardContainer>
);

export default Card;
