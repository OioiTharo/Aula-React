'use client'
import Form from "../../../components/form";
import Tituloh2 from "../../../components/titulos";
import { useCadastro } from "../../../hooks/useCadastro"

export default function Cadastro(){
    const {email, setEmail, password, setPassword, erro, handleSubmit} = useCadastro();

    return(
        <div>
            <Tituloh2>Cadastre-se</Tituloh2>
            <Form
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                erro={erro}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}