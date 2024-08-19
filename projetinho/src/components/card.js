import styled from 'styled-components';
import Imagem from './imagem';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  margin: 10px;
  width: 200px;
  text-align: center;
`;

const CardTitulo = styled.h3`
  margin: 10px 0;
`;

const CardTexto = styled.p`
  padding: 0 10px;
  margin-bottom: 10px;
`;

const Card = ({ titulo, texto, imageUrl }) => (
  <CardContainer>
    <Imagem src={imageUrl} alt={titulo} />
    <CardTitulo>{titulo}</CardTitulo>
    <CardTexto>{texto}</CardTexto>
  </CardContainer>
);

export default Card;
