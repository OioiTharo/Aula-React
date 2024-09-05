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
#### para rodar o projeto react:
	npm starr

----------
### Para trabalhar com um projeto ja criado:

##### verificar se o node está instalado, instalar o npm global, acessar a pasta

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
### NEXT:

#### Criar um projeto next:
	create-net-aap@latest
	
##### ai precisar dar yes, colocar o nome do app e depois -> no | no | no | yes | yes

#### para rodar o projeto next: 
	npm run dev

---------------------
#### Biblioteca para você criar componentes estilizados:
	npm install styled-components 
#### Biblioteca react-chart para você criar gráficos
	npm install recharts
#### Biblioteca next para criar rotas facilmente
	npx create-next-app@latest
 
Obs: dentro de uma function, no return nunca pode haver mais de dois elementos. 
Para ser aceito é preciso colocar entre <> <elemento> </> vazios

###### MONGODB.COM
	user: thaisrodrigues
	senha: aulareact0409
	banco: Aula_ReactDB
-------------------------------

#### Para add a dependencia lombok para ele fazer o setter e getter automaticamente:
	<dependency>
        	<groupId>org.projectlombok</groupId>
        	<artifactId>lombok</artifactId>
        	<version>1.18.30</version>
        	<scope>provided</scope>
    	</dependency>