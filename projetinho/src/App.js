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
    {
        id: 1,
        titulo: "Luminária Nebulosa",
        texto: "A Luminária Nebulosa transforma qualquer ambiente em uma galáxia deslumbrante com suas luzes coloridas e efeitos de nebulosa interativos.",
        imageUrl: "https://via.placeholder.com/150/8A2B8B/FFFFFF?text=Luminária+Nebulosa"
    },
    {
        id: 2,
        titulo: "Cadeira Flutuante Ergonômica",
        texto: "Conforto e inovação se encontram na Cadeira Flutuante Ergonômica. Design futurista e ajuste automático para o máximo bem-estar.",
        imageUrl: "https://via.placeholder.com/150/4B0082/FFFFFF?text=Cadeira+Flutuante"
    },
    {
        id: 3,
        titulo: "Relógio Temporal",
        texto: "O Relógio Temporal permite que você ajuste a percepção do tempo, com funcionalidades que vão desde cronômetro até viagem no tempo virtual.",
        imageUrl: "https://via.placeholder.com/150/6A5ACD/FFFFFF?text=Relógio+Temporal"
    },
    {
        id: 4,
        titulo: "Tênis Antigravidade",
        texto: "Experimente a sensação de leveza com os Tênis Antigravidade. Perfeitos para esportes e caminhadas, eles oferecem um impulso extra e conforto extremo.",
        imageUrl: "https://via.placeholder.com/150/D8BFD8/FFFFFF?text=Tênis+Antigravidade"
    },
    {
        id: 5,
        titulo: "Cafeteira de Café Estelar",
        texto: "Prepare café como se estivesse em uma estação espacial com a Cafeteira de Café Estelar. Inclui modos de preparo galácticos e uma estética futurista.",
        imageUrl: "https://via.placeholder.com/150/C71585/FFFFFF?text=Cafeteira+Estelar"
    },
    {
        id: 6,
        titulo: "Fone de Ouvido Musical Cósmico",
        texto: "Sinta a música de uma nova forma com os Fones de Ouvido Musical Cósmico, que oferecem um som imersivo e um design inspirado no cosmos.",
        imageUrl: "https://via.placeholder.com/150/00CED1/FFFFFF?text=Fone+Cósmico"
    },
    {
        id: 7,
        titulo: "Teclado Virtual Holográfico",
        texto: "O Teclado Virtual Holográfico projeta teclas flutuantes que você pode digitar no ar. Tecnologia de ponta para uma experiência de digitação futurista.",
        imageUrl: "https://via.placeholder.com/150/8A2B8B/FFFFFF?text=Teclado+Holográfico"
    },
    {
        id: 8,
        titulo: "Kit de Jardinagem Alienígena",
        texto: "Cultive plantas exóticas e alienígenas com o Kit de Jardinagem Alienígena. Inclui sementes e fertilizantes especialmente formulados para espécies intergalácticas.",
        imageUrl: "https://via.placeholder.com/150/4B0082/FFFFFF?text=Jardinagem+Alienígena"
    },
    {
        id: 9,
        titulo: "Óculos de Realidade Aumentada",
        texto: "Explore o mundo com uma nova perspectiva com os Óculos de Realidade Aumentada, que adicionam camadas de informação e interação ao seu entorno.",
        imageUrl: "https://via.placeholder.com/150/6A5ACD/FFFFFF?text=Óculos+RA"
    },
    {
        id: 10,
        titulo: "Hoverboard Ultra",
        texto: "Deslize pelo futuro com o Hoverboard Ultra, equipado com tecnologia de antigravidade para uma experiência de viagem suave e emocionante.",
        imageUrl: "https://via.placeholder.com/150/D8BFD8/FFFFFF?text=Hoverboard+Ultra"
    },
    {
        id: 11,
        titulo: "Cubo Mágico de Energia",
        texto: "Resolva o Cubo Mágico de Energia para desbloquear efeitos visuais e sonoros. Uma mistura de desafio intelectual e entretenimento futurista.",
        imageUrl: "https://via.placeholder.com/150/C71585/FFFFFF?text=Cubo+Mágico"
    },
    {
        id: 12,
        titulo: "Bolsa de Transporte Interdimensional",
        texto: "Armazene e transporte itens de forma segura e conveniente com a Bolsa de Transporte Interdimensional. Ideal para aventuras em qualquer dimensão.",
        imageUrl: "https://via.placeholder.com/150/00CED1/FFFFFF?text=Bolsa+Interdimensional"
    },
    {
        id: 13,
        titulo: "Assento de Lazer Zero-Gravity",
        texto: "Experimente o máximo em relaxamento com o Assento de Lazer Zero-Gravity, que adapta a sua posição para proporcionar uma sensação de flutuação.",
        imageUrl: "https://via.placeholder.com/150/8A2B8B/FFFFFF?text=Assento+Zero-Gravity"
    },
    {
        id: 14,
        titulo: "Projetor de Estrelas",
        texto: "Transforme seu ambiente com o Projetor de Estrelas, que projeta um céu estrelado em qualquer superfície, criando uma atmosfera mágica.",
        imageUrl: "https://via.placeholder.com/150/4B0082/FFFFFF?text=Projetor+Estrelas"
    },
    {
        id: 15,
        titulo: "Jogo de Tabuleiro Virtual",
        texto: "Desfrute de uma nova era de jogos de tabuleiro com o Jogo de Tabuleiro Virtual, que combina peças físicas e interatividade digital.",
        imageUrl: "https://via.placeholder.com/150/6A5ACD/FFFFFF?text=Jogo+Tabuleiro+VR"
    },
    {
        id: 16,
        titulo: "Tenda de Acampamento Espacial",
        texto: "Acampe sob as estrelas com a Tenda de Acampamento Espacial, equipada com um sistema de visualização do cosmos e conforto intergaláctico.",
        imageUrl: "https://via.placeholder.com/150/D8BFD8/FFFFFF?text=Tenda+Espacial"
    },
    {
        id: 17,
        titulo: "Espelho de Holo-Reflexão",
        texto: "O Espelho de Holo-Reflexão oferece uma experiência visual tridimensional com efeitos holográficos para uma visão única de seu reflexo.",
        imageUrl: "https://via.placeholder.com/150/C71585/FFFFFF?text=Espelho+Holo"
    },
    {
        id: 18,
        titulo: "Caminhão de Brinquedo Robotizado",
        texto: "O Caminhão de Brinquedo Robotizado combina diversão e tecnologia com sua capacidade de se transformar e realizar manobras autônomas.",
        imageUrl: "https://via.placeholder.com/150/00CED1/FFFFFF?text=Caminhão+Robotizado"
    },
    {
        id: 24,
        titulo: "Câmara de Sono Reparadora",
        texto: "A Câmara de Sono Reparadora oferece um ambiente controlado para uma recuperação profunda. Equipado com tecnologia de hibernação e ajustes ambientais para uma experiência de sono ideal.",
        imageUrl: "https://via.placeholder.com/150/8A2B8B/FFFFFF?text=Câmara+Sono"
    },
    {
        id: 19,
        titulo: "Smartwatch Multidimensional",
        texto: "O Smartwatch Multidimensional oferece funções avançadas, incluindo monitoramento de saúde e interações com múltiplas dimensões e realidades.",
        imageUrl: "https://via.placeholder.com/150/4B0082/FFFFFF?text=Smartwatch+MD"
    },
    {
        id: 20,
        titulo: "Globo de Cristal Místico",
        texto: "Decifre o futuro e explore mistérios com o Globo de Cristal Místico, um item de decoração e ferramenta de introspecção profunda.",
        imageUrl: "https://via.placeholder.com/150/6A5ACD/FFFFFF?text=Globo+Cristal"
    },
    {
        id: 21,
        titulo: "Escultura de Energia Lumínica",
        texto: "A Escultura de Energia Lumínica é uma peça de arte interativa que muda suas cores e formas conforme a luz ambiente e a música.",
        imageUrl: "https://via.placeholder.com/150/D8BFD8/FFFFFF?text=Escultura+Lumínica"
    },
    {
        id: 22,
        titulo: "Disco de Levitação Magnética",
        texto: "O Disco de Levitação Magnética é uma peça de tecnologia avançada que flutua no ar e pode ser usado como um suporte para diversos objetos ou simplesmente como uma peça de decoração futurista.",
        imageUrl: "https://via.placeholder.com/150/C71585/FFFFFF?text=Disco+Levitação"
    },
    {
        id: 23,
        titulo: "Caneta de Realidade Virtual",
        texto: "A Caneta de Realidade Virtual permite criar e manipular objetos em um espaço virtual com extrema precisão. Ideal para designers e artistas que trabalham com realidade aumentada.",
        imageUrl: "https://via.placeholder.com/150/00CED1/FFFFFF?text=Caneta+VR"
    },
];



const App = () => (
    <>
        <div style={{margin: '10px 50px', padding:'5px', backgroundColor:'rgba(255, 255, 255)'}}>
            <header style={{height: '40px'}}>
            </header>
            <div style={{height: '655px', overflow:'auto'}}> 
            <Titulo>Tela de Produtos</Titulo>
            <Texto> Catálogo de produtos:</Texto>
            <Produtos produtos={produtos} />
            </div>
            <footer>
                <Texto corDoTexto='red'>Fim</Texto>
            </footer>
        </div>
    </>
);

export default App;
