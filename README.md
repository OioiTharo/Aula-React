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

-------------------------------
###### MONGODB.COM
	user: thaisrodrigues
	senha: aulareact0409
	banco: Aula_ReactDB
-------------------------------
#### Para add a dependencia lombok para ele fazer o setter e getter automaticamente (fazer no pom.xml):
	<dependency>
        	<groupId>org.projectlombok</groupId>
        	<artifactId>lombok</artifactId>
        	<version>1.18.30</version>
        	<scope>provided</scope>
	</dependency>

--------------------------------
#### PROJETO IDX:

##### dentro da pasta java/com/example/demo criar tres pastas: controllers , model, repository

##### dentro da pasta controllers, criar arquivo UserController.java:
	package com.example.demo.controllers;

	import java.util.ArrayList;
	import java.util.List;

	import org.springframework.web.bind.annotation.CrossOrigin;
	import org.springframework.web.bind.annotation.PostMapping;
	import org.springframework.web.bind.annotation.RequestBody;
	import org.springframework.web.bind.annotation.RequestMapping;
	import org.springframework.web.bind.annotation.RestController;

	import com.example.demo.model.UserModel;

	@RestController //minha API vai ser do tipo rest//
	@RequestMapping("/users") //o nome do meu endpoind//
	@CrossOrigin(origins = "*") //aceito requisão de qualquer endereço//

	public class UserController {
   		//Lista de usuarios//
    		private List<UserModel> users = new ArrayList<>();


    		//rota para add usuarios na lista//
   		@PostMapping("/register") //requisição post na rota register//
    		//RequestBody = corpo da requisição (nesse caso é o usuario)//
    		public String createUser(@RequestBody UserModel user){
        		//aad o usuario na lista
        		users.add(user);
        		return "User created";
    		}
    
	}


##### dentro da pasta model criar arquivo UserModel.java:
	package com.example.demo.model;

	import lombok.Data;

	@Data
	public class UserModel {
   		private String name;
    		private String password;

	}

#### dentro da pasta resources add o link coiado do banco de dados:
	spring.data.mongodb.uri=linkcopiado

no link copiado, no lugar de <db_passowrd>  colocar a senha criada no mongo, e dedpois de .net/nomedobancodedados	

#### na seta da logo acima do thunder, clicar no beckend ports e copiar o mapped URL e testar em outra janela
#### no thunder criar uma nova env (variavel nome: URL | value: link copiado no mapped)
#### em headers criar um cookie add link copiado no cookie do inspecionar 