const queride = 'Ola'

const OutroComponent = () => <ul>{lista}</ul> /*<ul>{lista}</ul>*/


const tarefas = ['lavar louça', 'varrer a casa', 'passar pano']
const lista = tarefas.map((tarefa) =>
    <li>{tarefa}</li>
);

/**let listinha
listinha.forEach(tarefas)*/

export default OutroComponent