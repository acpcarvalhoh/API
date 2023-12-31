# API 

Esta é uma API permite cadastrar usuários no banco de dados, esse usuário podem cadastrar notas de filmes, adicionar tags aos filmes e listar as informações relacionadas a eles. A API foi construída usando Node.js e utiliza o framework Express.js para lidar com as rotas e requisições HTTP. O banco de dados utilizado é o SQLite, e o Knex.js é utilizado como um query builder para interagir com o banco de dados.


## Tecnologias Utilizadas

As principais tecnologias utilizadas no desenvolvimento desta API são:

- Node.js: ambiente de execução JavaScript do lado do servidor.
- Express.js: framework web para construção de APIs e aplicativos web.
- SQLite: banco de dados relacional utilizado para armazenar as informações da API.
- Knex.js: query builder utilizado para interagir com o banco de dados SQLite.
- bcryptjs: biblioteca para a criptografia de senhas.


## Endpoints

A API possui os seguintes endpoints:

### Usuários

- **POST /users**: Cria um novo usuário na base de dados. Requer os campos "name", "email" e "password" no corpo da requisição.

- **PUT /users/:id**: Atualiza os dados de um usuário existente. Requer o campo "id" como um parâmetro de rota e os campos "name", "email" e "password" no corpo da requisição.

### Notas sobre os  Filmes

- **GET /notes?user_id=:user_id&title=:title&tags=:tags**: Lista todas as notas de filmes de um usuário. Aceita os parâmetros opcionais "user_id" para filtrar as notas por usuário, "title" para buscar notas por título e "tags" para buscar notas por tags. Caso o parâmetro "tags" seja fornecido, a API irá filtrar as notas que possuem as tags especificadas.

- **GET /notes/:id**: Retorna informações detalhadas sobre uma nota de filme específica. Requer o campo "id" como um parâmetro de rota.

- **POST /notes/:user_id**: Cria uma nova nota de filme para um usuário específico. Requer o campo "user_id" como um parâmetro de rota e os campos "title", "description", "rating" e "tags" no corpo da requisição.

- **DELETE /notes/:id**: Exclui uma nota de filme específica. Requer o campo "id" como um parâmetro de rota.

### Tags

- **GET /tags/:user_id**: Lista todas as tags relacionadas a um usuário específico. Requer o campo "user_id" como um parâmetro de rota.

## Configuração do Projeto

1. Clone este repositório em sua máquina local.
2. Certifique-se de ter o Node.js e o NPM (Node Package Manager) instalados em seu sistema.
3. Execute o comando `npm install` na pasta raiz do projeto para instalar todas as dependências.
4. Execute o comando `npm start` para iniciar o servidor da API.
5. A API estará disponível em `http://localhost:3333`.

## Banco de Dados

A API utiliza o banco de dados SQLite para armazenar as informações. As migrações do banco de dados estão configuradas para criar as tabelas necessárias automaticamente. As tabelas criadas são:

- Tabela "users": Armazena informações dos usuários, como nome, e-mail e senha.
- Tabela "movie_notes": Armazena as notas de filmes, incluindo título, descrição, classificação e o ID do usuário relacionado.
- Tabela "movie_tags": Armazena as tags relacionadas a cada nota de filme, com o ID da nota e o ID do usuário correspondente.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema, tiver sugestões de melhorias ou quiser adicionar novos recursos, sinta-se à

## Autor

Este projeto foi desenvolvido por Adão Carvalho. Aqui estão algumas informações sobre o autor:

- **Nome**: Adão Carvalho
- **Descrição**: Sou um desenvolvedor de software apaixonado por tecnologia e programação. Tenho experiência no desenvolvimento de aplicações web e estou sempre buscando aprender novas tecnologias. Este projeto foi criado como parte do meu aprendizado e prática de desenvolvimento de APIs.
- **Contato**: Você pode entrar em contato comigo pelo e-mail carvalhohuzumak@gmail.com.
- **Perfil**: Você pode encontrar mais projetos e trabalhos no meu perfil do GitHub: [acpcarvalhoh](https://github.com/acpcarvalhoh)

Sinta-se à vontade para entrar em contato comigo para mais informações sobre o projeto ou para qualquer outra questão relacionada.






