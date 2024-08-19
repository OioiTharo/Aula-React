import styled from 'styled-components';
import Card from './card';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;
`;

const Produtos = ({ produtos }) => (
  <Container>
    {produtos.map(produtos => (
      <Card
        id={produtos.id}
        titulo={produtos.titulo}
        texto={produtos.texto}
        imageUrl={produtos.imageUrl}
      />
    ))}
  </Container>
);

export default Produtos;
