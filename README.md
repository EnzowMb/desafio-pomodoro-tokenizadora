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

Frontend:
```bash
Vue.js
Typescript
```

[![My Skills](https://skillicons.dev/icons?i=vue,typescript)](https://skillicons.dev)

## ⚙ Rodando a aplicação

Requisitos:
  - Docker Desktop
  - WSL
  - IDE de sua preferencia(recomendação: VS Code)
  - Node

### 💾 Parte 1 - Cloando a aplicação e executando o Banco de Dados

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

### 🔌 Parte 2 - Rodando o Back-end

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

[![My Skills](https://skillicons.dev/icons?i=postman)](https://skillicons.dev)

Segue em anexo um arquivo para testes:
[POMODORO TASKS.postman_collection.json](https://github.com/user-attachments/files/16450128/POMODORO.TASKS.postman_collection.json)

### 💻 Parte 3 - Rodando o Front-end

- Abra o terminal:
  - Caminhe para a pasta front-end:
    ```
    cd .\front-end\
    ```
  - Execute o comando para instalar as dependencias:
    ```
    npm install

    ```
  - Execute o seguinte comando para rodar a aplicação:
    ```
    npm run dev
    ```
  - Abra no localhost de porta 5173: http://localhost:5173
    
## 👥 Autor

- **Enzo Martinelli**

<hr>

# English

## Internship Tokenization Challenge

<div>
  <img src="https://github.com/user-attachments/assets/87cc1d01-a65e-428e-9cc2-327ad9c3f721" width="200px" border="2px solid"><p>Task list using the Pomodoro technique.</p>
  <p>The application should allow listing, adding, updating, and removing items from a task list.</p>
</div>

## 🔨 Technologies Used

Back-end:
```bash
NestJS
Docker
Typescript
```

[![My Skills](https://skillicons.dev/icons?i=nestjs,docker,typescript)](https://skillicons.dev)

Database:

```bash
PostgreSQL
```

[![My Skills](https://skillicons.dev/icons?i=postgresql)](https://skillicons.dev)

ORM Used:

```bash
Prisma
```

[![My Skills](https://skillicons.dev/icons?i=prisma)](https://skillicons.dev)

Frontend:
```bash
Vue.js
Typescript
```

[![My Skills](https://skillicons.dev/icons?i=vue,typescript)](https://skillicons.dev)

## ⚙ Running the Application

Requirements:
- Docker Desktop
- WSL
- IDE of your choice (recommended: VS Code)
- Node

### 💾 Part 1 - Cloning the Application and Running the Database

- First, clone this repository:
```
git clone https://github.com/EnzowMb/desafio-pomodoro-tokenizadora.git
```

- Then, open the folder in your IDE of choice

- Open the terminal:
  - In the root folder of the project, run the following command:
    ```
    docker-compose build
    ```
    and then
    
    ```
    docker-compose up
    ```
    Note: Docker Desktop should be running
    
    ![image](https://github.com/user-attachments/assets/8aa5059c-aeb7-4eee-ba0e-bd0e546c10e2)

    
- Examples:

![image](https://github.com/user-attachments/assets/676504ac-efe2-4afe-8df9-dc8989c08503)

![image](https://github.com/user-attachments/assets/9584a48c-c3c9-4755-97e4-6a70696665ed)

![image](https://github.com/user-attachments/assets/131b69b4-34b6-4b23-9c19-d89069d08123)

### 🔌 Part 2 - Running the Back-end

- Open the terminal:
  - Navigate to the back-end-nestjs folder:
    ```
    cd .\back-end-nestjs\
    ```
  - Run the command to install dependencies:
    ```
    npm install
    ```

- In the back-end-nestjs folder, create a file named .env -> Environment Variables
  - Paste the URL into this file:
    ```
    DATABASE_URL="postgresql://enzo:desafio@localhost:5432/taskpomodoro?schema=public"
    ```
  - Next, to generate the database, run the following commands:
    ```
    npx prisma generate
    ```
    and
    ```
    npx prisma migrate deploy
    ```
    
- Finally, run the following command to start the application:
  ```
  npm run start
  ```
  - In development mode:
    ```
    npm run start:dev
    ```

To test the routes, I recommend using Postman!

[![My Skills](https://skillicons.dev/icons?i=postman)](https://skillicons.dev)

Attached is a file for testing:
[POMODORO TASKS.postman_collection.json](https://github.com/user-attachments/files/16450128/POMODORO.TASKS.postman_collection.json)

### 💻 Part 3 - Running the Front-end

- Open the terminal:
  - Navigate to the front-end folder:
    ```
    cd .\front-end\
    ```
  - Run the command to install dependencies:
    ```
    npm install

    ```
  - Run the following command to start the application:
    ```
    npm run dev
    ```
  - Open in localhost on port 5173: http://localhost:5173
    
## 👥 Author

- **Enzo Martinelli**
