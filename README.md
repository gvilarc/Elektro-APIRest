Para acessar as rotas de usuário no Postman, siga estes passos:

Abra o Postman e crie uma nova requisição.

Para a rota GET que retorna todos os usuários, configure o método como GET e insira a URL da sua API, por exemplo, http://localhost:3333/users. Clique em "Send" para enviar a requisição.

Para a rota GET que retorna um usuário específico, configure o método como GET e insira a URL com o ID do usuário, por exemplo, http://localhost:3333/users/1. Clique em "Send" para enviar a requisição.

Para a rota POST que cria um novo usuário, configure o método como POST e insira a URL da API, por exemplo, http://localhost:3333/users. Na aba "Body", selecione "raw" e escolha "JSON" no menu suspenso. Insira o corpo da requisição com os dados do novo usuário e clique em "Send" para enviar a requisição.

Exemplo:

```
{
  "name": "João Silva",
  "email": "joao.silva@example.com",
  "hash": "hashedpassword123",
  "salt": "somesalt",
  "cpf": "123.456.789-00"
}

```

Para a rota PUT que atualiza um usuário existente, configure o método como PUT e insira a URL com o ID do usuário, por exemplo, http://localhost:3333/users/1. Na aba "Body", selecione "raw" e escolha "JSON" no menu suspenso. Insira o corpo da requisição com os dados atualizados e clique em "Send" para enviar a requisição.

Para a rota DELETE que exclui um usuário, configure o método como DELETE e insira a URL com o ID do usuário, por exemplo, http://localhost:3333/users/1. Clique em "Send" para enviar a requisição.