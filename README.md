# Portugues

## Desafio Estágio Tokenizadora

<div>
  <img src="https://github.com/user-attachments/assets/87cc1d01-a65e-428e-9cc2-327ad9c3f721" width="200px" border="2px solid"><p>Lista de tarefas usando a técnica Pomodoro.</p>
  <p>A aplicação deve permitir listar, incluir, atualizar e remover itens de uma lista de tarefas.</p>
</div>

## 🔨 Tecnologias utilizadas
Back-end:
```bash
NestJS
Docker
Typescript
```
[![My Skills](https://skillicons.dev/icons?i=nestjs,docker,typescript)](https://skillicons.dev)

Banco de dados:

```bash
PostgreSQL
```

[![My Skills](https://skillicons.dev/icons?i=postgresql)](https://skillicons.dev)

ORM utilizada:
```bash
Prisma
```

[![My Skills](https://skillicons.dev/icons?i=prisma)](https://skillicons.dev)

## Rodando a aplicação

Requisitos:
  - Docker Desktop
  - WSL
  - IDE de sua preferencia(recomendação: VS Code)
  - Node

### Parte 1 - Cloando a aplicação e executando o Banco de Dados

- Primeiro clone este repositorio:
```
git clone https://github.com/EnzowMb/desafio-pomodoro-tokenizadora.git
```

- Em seguida, abra a pasta em uma IDE de sua preferencia

- Abra o terminal:
  - Na pasta raiz do projeto, execute o seguinte comando:
    ```
    docker-compose build
    ```
    e depois
    
    ```
    docker-compose up
    ```
    OBS: O docker desktop deve estar rodando
    
    ![image](https://github.com/user-attachments/assets/8aa5059c-aeb7-4eee-ba0e-bd0e546c10e2)

    
- Exemplos:

![image](https://github.com/user-attachments/assets/676504ac-efe2-4afe-8df9-dc8989c08503)

![image](https://github.com/user-attachments/assets/9584a48c-c3c9-4755-97e4-6a70696665ed)

![image](https://github.com/user-attachments/assets/131b69b4-34b6-4b23-9c19-d89069d08123)

### Parte 2 - Rodando o Back-end

- Abra o terminal:
  - Caminhe para a pasta back-end-nestjs:
    ```
    cd .\back-end-nestjs\
    ```
  - Execute o comando para instalar as dependencias:
    ```
    npm install
    ```

- Na pasta back-end-nestjs crie um arquivo com o nome: ".env" -> Variaveis de ambiente
  - Cole a url neste arquivo criado:
    ```
    DATABASE_URL="postgresql://enzo:desafio@localhost:5432/taskpomodoro?schema=public"
    ```
  - Logo em seguida, para gerar o banco de dados, execute os seguintes comandos:
    ```
    npx prisma generate
    ```
    e
    ```
    npx prisma migrate deploy
    ```
    
- Enfim, execute o seguinte comando para rodar a aplicação:
  ```
  npm run start
  ```
  - Em modo dev:
    ```
    npm run start:dev
    ```

Para testar as rotas, recomendo o Postman!

Segue em anexo um arquivo para testes:

### Parte 3 - Rodando o Front-end

## 👥 Autor

- **Enzo Martinelli**

<hr>

# English

## Internship Tokenization Challenge

<div>
  <img src="https://github.com/user-attachments/assets/87cc1d01-a65e-428e-9cc2-327ad9c3f721" width="200px" border="2px solid"><p>Task list using the Pomodoro technique.</p>
  <p>The application should allow listing, adding, updating, and removing items from a task list.</p>
</div>

## 👥 Author

- **Enzo Martinelli**
