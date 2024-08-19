import './App.css';
//import Hello from './components/hello';
import Titulo from './components/titulo';
import Texto from './components/texto';
import Produtos from './components/produtos';
//import OutroComponent from './outrocomp';

/*const App = () => <> <OutroComponent/> </>*/


/*function App(){
    return(
        <>
            <Hello />
        </>
    );
}*/


const produtos = [
    {id: 1, titulo: "Produto 1", texto: "Descrição detalhada do produto 1.", imageUrl: "https://via.placeholder.com/150"},
    {id: 2, titulo: "Produto 2", texto: "Descrição detalhada do produto 2.", imageUrl: "https://via.placeholder.com/150"},
    {id: 3, titulo: "Produto 3", texto: "Descrição detalhada do produto 3.", imageUrl: "https://via.placeholder.com/150"},
    {id: 4, titulo: "Produto 4", texto: "Descrição detalhada do produto 4.", imageUrl: "https://via.placeholder.com/150"},
    {id: 5, titulo: "Produto 5", texto: "Descrição detalhada do produto 5.", imageUrl: "https://via.placeholder.com/150"},
    {id: 6, titulo: "Produto 6", texto: "Descrição detalhada do produto 6.", imageUrl: "https://via.placeholder.com/150"},
    {id: 7, titulo: "Produto 7", texto: "Descrição detalhada do produto 7.", imageUrl: "https://via.placeholder.com/150"},
    {id: 8, titulo: "Produto 8", texto: "Descrição detalhada do produto 8.", imageUrl: "https://via.placeholder.com/150"},
    {id: 9, titulo: "Produto 9", texto: "Descrição detalhada do produto 9.", imageUrl: "https://via.placeholder.com/150"},
    {id: 10, titulo: "Produto 10", texto: "Descrição detalhada do produto 10.", imageUrl: "https://via.placeholder.com/150"},
    {id: 11, titulo: "Produto 11", texto: "Descrição detalhada do produto 11.", imageUrl: "https://via.placeholder.com/150"},
    {id: 12, titulo: "Produto 12", texto: "Descrição detalhada do produto 12.", imageUrl: "https://via.placeholder.com/150"},
    {id: 13, titulo: "Produto 13", texto: "Descrição detalhada do produto 13.", imageUrl: "https://via.placeholder.com/150"},
    {id: 14, titulo: "Produto 14", texto: "Descrição detalhada do produto 14.", imageUrl: "https://via.placeholder.com/150"},
    {id: 15, titulo: "Produto 15", texto: "Descrição detalhada do produto 15.", imageUrl: "https://via.placeholder.com/150"},
    {id: 16, titulo: "Produto 16", texto: "Descrição detalhada do produto 16.", imageUrl: "https://via.placeholder.com/150"},
    {id: 17, titulo: "Produto 17", texto: "Descrição detalhada do produto 17.", imageUrl: "https://via.placeholder.com/150"},
    {id: 18, titulo: "Produto 18", texto: "Descrição detalhada do produto 18.", imageUrl: "https://via.placeholder.com/150"},
    {id: 19, titulo: "Produto 19", texto: "Descrição detalhada do produto 19.", imageUrl: "https://via.placeholder.com/150"},
    {id: 20, titulo: "Produto 20", texto: "Descrição detalhada do produto 20.", imageUrl: "https://via.placeholder.com/150"}
];


const App = () => (
    <div>
      <Titulo>Tela de Produtos</Titulo>
      <Texto> Confira nossos produtos abaixo: </Texto>
      <Produtos produtos={produtos} />
    </div>
);

export default App;
