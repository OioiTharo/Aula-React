# Aula-React 


### Passo a passo, criando um projeto em React

#### baixamos o node.js
##### para saber versão:
        node --version
        npm --version
        npx --version
#### instalando o npm global: 
	npm install -g npm@10.8.2
#### criar projeto react: 
	npx create-react-app nomedoprojeto 
#### entrar na pasta do projeto:
	cd pasta
#### para rodar o projeto:
	npm start

----------
### Para trabalhar com um projeto ja criado:

#### verificar se o node está instalado, instalar o npm global, acessar a pasta

#### criar um package.json: 
	npm init -y
#### instalar as dependencias react: 
	npm install react react-dom react-scripts
#### certifique que o script do package.json esteja assim:
        "scripts": {
          "start": "react-scripts start",
          "build": "react-scripts build",
          "test": "react-scripts test",
          "eject": "react-scripts eject"
        }
#### se der errado o scripts:
	npm install react-scripts --save
	npm cache clean --force
	npm install
	npm start

---------------------

npm install styled-componetns -> serve para você criar componentes estilizados


Obs: dentro de uma function, no return nunca pode haver mais de dois elementos. 
Para ser aceito é preciso colocar entre <> <elemento> </> vazios
