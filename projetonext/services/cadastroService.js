export async function cadastrarUsuario(dadosDoUsuario){
    //cria variavel para receber o dados da api
    const response = await fetch("https://27bc352d-8ef8-4b52-976f-c6126bf6661d-00-28ordud37745w.riker.replit.dev/register", {
        method:'POST',
        headers: {'Content-Type': 'application/jason'},
        body: JSON. stringify(dadosDoUsuario)
    });
    //verifica se ta ok
    if(!response.ok){
        console.log("erro")
    }
    //retorna os dados no formato json
    return response.json();
}