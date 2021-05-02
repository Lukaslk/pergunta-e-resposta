# Description

Um simples sistema de pergunta e resposta com persistência de dados.

# Packages

* "ejs": "^3.1.6",
* "express": "^4.17.1",
* "mysql2": "^2.2.5",
* "nodemon": "^2.0.7",
* "sequelize": "^6.6.2"

# Necessary

È necessário criar um banco de dado com duas tabelas, uma para receber as perguntas e outro para as respostas, para isso eu usei o Mysql workbench:

O banco de dados deve se chamar "db_perguntas", uma das tabelas e a "pergunta", ao qual tem que ter dois campos: "id" e "titulo":

![pergunta](https://github.com/Lukaslk/pergunta-e-resposta/blob/main/pergunta.png)

o segundo é a tabela "perguntas" que tem os campos "id" e "corpo":

![perguntas](https://github.com/Lukaslk/pergunta-e-resposta/blob/main/respostas.png)

# Getting Started

1. Faça o download ou clone este repositório;
2. Abra seu Terminal/Prompt e navegue até o diretório rest;
3. Inicie o server com "node server.js";

Com o servidor funcionando abra o navegador e acesse http://localhost:5000/

![guia](https://github.com/Lukaslk/pergunta-e-resposta/blob/main/Guia-perguntas-Google-Chrome-2021-05-02-19-38-39.gif)
