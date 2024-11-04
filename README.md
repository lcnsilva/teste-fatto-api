
# API feita para teste técnico da FATTO.

### Link para o repositório do front-end:

https://github.com/lcnsilva/teste-fatto-interface
## Documentação da API

#### Retorna todas as tarefas registradas.

```http
  GET /tarefas
```

#### Retorna uma tarefa pelo ID.

```http
  GET /tarefas/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | O ID da tarefa desejada |



#### Cria uma tarefa.

```http
  POST /tarefas
```

#### Atualiza um tarefa.

```http
  PUT /tarefas/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | O ID da tarefa a ser atualizada |

#### Deleta uma tarefa.

```http
  DELETE /tarefas/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | O ID da tarefa a ser excluída. |
