# TESTE CRUD DNA

#### **Linguagens Utilizadas**

- Typescripts
- Javascript
- Paciência
- ✨Mágica✨

#### **Frameworks Utilizados**

- ReactJS
- ExpressJS
- TypeORM

## Features

- Login
- Cadastro de Usuários
- Listagem de Usuários
- Listagem de Usuário por ID

### Rotas ExpressJS

- **POST** /sessions -> Cria uma seção para o Usuário utilizando token JWT
- **POST** /users -> Cria um Usuário com dados no banco de dados MySQL
- **GET** /users -> Lista todos os Usuário do banco de dados
- **GET** /users/:id -> Lista Usuário pela ID do banco de dados

## Technologias

CRUD DNA usa uma série de projetos de código aberto para funcionar corretamente:

- [ReacjJS](https://pt-br.reactjs.org/) - HTML aprimorado para aplicativos da web!
- [Visual Studio Code](https://code.visualstudio.com/) - Maravilhoso editor de texto
- [Dillinger](https://dillinger.io/) - Editor de MarkDown.
- [Twitter Bootstrap 4.6](https://getbootstrap.com/) - ótimo padrão de IU para aplicativos da web modernos
- [node.js](https://nodejs.org/pt-br/) - I/O com eventos para o backend
- [Express](http://expressjs.com) - estrutura de aplicativo de rede rápida node.js [@tjholowaychuk]
- [TypeORM](https://typeorm.io/) - ORM(Object Relational Manager) com ótimos recursos
- [Maria DB](https://mariadb.org/) - Banco de dados Sql, alternativa ao MySql
- Entre outros...

Projeto disponível no [monorepo publico][teste-dna] no GitHub.

## Instalação Backend

Teste CRUD DNA requer [Node.js](https://nodejs.org/pt-br/) v14+ para rodar.

Instalar as dependencies e devDependencies e "startar" o servidor.

```sh
git clone https://github.com/di-ferreira/teste-dna.git
cd teste-dna/backkend
yarn //ou yarn install
yarn dev:server
```

## Instalação Frontend

Teste CRUD DNA requer [Node.js](https://nodejs.org/pt-br/) v14+ e [ReactJS](https://pt-br.reactjs.org/) para rodar.

Instalar as dependencies e devDependencies e "startar" o servidor de testes.

```sh
git clone https://github.com/di-ferreira/teste-dna.git
cd teste-dna/frontend
yarn //ou yarn install
yarn dev:server
```

## License

MIT

**Free Software, Hell Yeah!**
