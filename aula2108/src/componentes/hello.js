import { useState } from "react";

function Hello(){
    const [contador, setContador] = useState(0)
    const incrementar = () => setContador(contador+1)
    const decrementar = () => setContador(contador-1)
    const [nome, setNome] = useState('');

    const handleChange = (event)=>{
        setNome(event.target.value)
        console.log(nome)
    }
    
    return(
        <>
            <input type="text" value={nome} onChange={handleChange}/>
            {nome}
        </>
    );
 }

export default Hello;