# Rodando o projeto

Instalar as dependências: `yarn`

Rodar o projeto: `yarn dev`

-----

# 💻  Application Overview  

## The F1 App

A aplicação visa apresentar categorias para quem deseja se manter informado no mundo da Fórmula 1.

## Data model

A aplicação contém os seguintes modelos:

User - can have one of these roles:

ADMIN can:
create/edit/delete estatísticas
editar o próprio perfil

USER - can:
acessar os conteúdos da página principal do site
editar o perfil


Home Page:
- Topbar contendo as categorias
- Card contendo as datas e horários da próxima corrida
- Seção de Notícias 

Há também uma página ADMIN, onde é possível inserir, editar, excluir e consultar estatísticas;
- Por piloto
- Por equipe
- Por circuito
- Por corrida/GP

## Get started

yarn 
yarn start

Projeto complementar (server da aplicação):
https://github.com/francisdiasbr/my-f1-server

