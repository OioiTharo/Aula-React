'use client'

import { useState } from "react";
import { cadastrarUsuario } from "../services/cadastroService";

export function useCadastro(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);


    const handleSubmit =  async (e) => {
        e.preventDefault();
        try{
            await cadastrarUsuario({email,password});
            window.location.href = '/boas-vindas'
        }catch(error){
            setError(error)
        }
    }
    return{
        email,
        setEmail,
        password,
        setPassword,
        error,
        handleSubmit
    };
}