# Aula-React 


### Passo a passo, criando um projeto em React

#### baixamos o node.js
##### para saber versão:
        node --version
        npm --version
        npx --version
#### npm install -g npm@10.8.2  -> instalando o npm global
#### npx create-react-app nomedoprojeto  -> criar projeto react
#### cd pasta -> entrar na pasta do projeto
#### npm start -> para rodar o projeto

----------
Para trabalhar com um projeto ja criado:
verificar se o node está instalado, instalar o npm global, acessar a pasta

#### criar um package.json: npm init -y
#### instalar as dependencias react: npm install react react-dom react-scripts
#### certifique que o script do package.json esteja assim:
        "scripts": {
          "start": "react-scripts start",
          "build": "react-scripts build",
          "test": "react-scripts test",
          "eject": "react-scripts eject"
        }
        
---------------------

npm install styled-componetns -> serve para você criar componentes estilizados


Obs: dentro de uma function, no return nunca pode haver mais de dois elementos. 
Para ser aceito é preciso colocar entre <> <elemento> </> vazios
