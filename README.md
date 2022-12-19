# API para o teste da Flexge

## Projeto

Neste teste você deve desenvolver uma simulação de uma funcionalidade. A
funcionalidade é um CRUD de contratos com seus respectivos produtos. Cada contrato está
relacionado a uma Company. O Cadastro de Companies deve possuir no mínimo 10
registrados armazenados diretamente no banco de dados, sendo que cada Company deve
conter o id e o nome.

## Endpoints

- Foram criados endpoints pra obter os dados de **Empresas**, **Países**, **Produtos** e **Contratos**.
- Em **Países** é possível obter apenas os dados de um campo específico, como `name` ou `states`, ao passar o nome do campo no parâmetro `field` na URL.
- Em **Contratos** também é possível obter os dados paginados ao passar o parâmetros `page` e `pageSize` na URL.
- Também existem endpoints pra fazer login, cadastro e verificar se o token do usuário é válido.

## Executar o projeto

Versão do node utilizada: 18.4.0

```
npm i
npm start
```