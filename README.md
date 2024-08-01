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
  - OBS: O docker desktop deve estar rodando
    
    ![image](https://github.com/user-attachments/assets/8aa5059c-aeb7-4eee-ba0e-bd0e546c10e2)
  - Na pasta raiz do projeto, execute o seguinte comando:
    ```
    docker-compose build
    ```
    e depois
    
    ```
    docker-compose up
    ```
    
- Exemplo:

  ![image](https://github.com/user-attachments/assets/676504ac-efe2-4afe-8df9-dc8989c08503)
  
  ![image](https://github.com/user-attachments/assets/9584a48c-c3c9-4755-97e4-6a70696665ed)
  
  ![image](https://github.com/user-attachments/assets/131b69b4-34b6-4b23-9c19-d89069d08123)

🎉 Banco de dados rodando!

### 🔌 Parte 2 - Rodando o Back-end

- Abra um novo terminal:
  - Caminhe para a pasta `back-end-nestjs`:
    ```
    cd .\back-end-nestjs\
    ```
  - Execute o comando para instalar as dependencias:
    ```
    npm install
    ```

- Exemplo:
 
  ![image](https://github.com/user-attachments/assets/c9581013-3e1e-4398-afb7-3f45de2c810a)

- Na pasta `back-end-nestjs` crie um arquivo com o nome: `.env`
  - Cole a url neste arquivo criado:
    ```
    DATABASE_URL="postgresql://enzo:desafio@localhost:5432/taskpomodoro?schema=public"
    ```
  - Logo em seguida, ainda na pasta `back-end-nestjs`, para gerar o banco de dados no prisma, execute os seguintes comandos:
    ```
    npx prisma generate
    ```
    e
    ```
    npx prisma migrate deploy
    ```

- Exemplo:

  ![image](https://github.com/user-attachments/assets/b4a279c2-4615-46cd-b6bb-30c144249cda)
  
  ![image](https://github.com/user-attachments/assets/122f9c67-895b-44c1-8048-b6252ef16880)
  
  ![image](https://github.com/user-attachments/assets/c17a6c5a-bad1-4f97-96d1-fc1c797aa14b)
  
  ![image](https://github.com/user-attachments/assets/646041bf-466a-4bb3-b962-a262ef27c0bd)
  
  ![image](https://github.com/user-attachments/assets/34c59724-0ce9-4bbe-936c-74f8838e1059)

- Por fim, ainda na pasta `back-end-nestjs`, execute o seguinte comando para rodar a aplicação:
  ```
  npm run start
  ```
  - Em modo dev:
    ```
    npm run start:dev
    ```

- Exemplo:

  ![image](https://github.com/user-attachments/assets/43c47bc6-ff52-4661-9ed4-984f6b431e45)
  
  ![image](https://github.com/user-attachments/assets/10c244e5-7374-4c36-b538-0dacfb1a0a29)

Para testar as rotas, recomendo o Postman!

[![My Skills](https://skillicons.dev/icons?i=postman)](https://skillicons.dev)

Segue em anexo um arquivo para testes:
[POMODORO TASKS.postman_collection.json](https://github.com/user-attachments/files/16450128/POMODORO.TASKS.postman_collection.json)

🎉 Back-end rodando!

### 💻 Parte 3 - Rodando o Front-end

- Abra um novo terminal:
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

- Exemplo:

  ![image](https://github.com/user-attachments/assets/29664f9a-beda-42fe-ad52-5870236bd02f)

  ![image](https://github.com/user-attachments/assets/51bda225-fd41-4cc5-9a09-79825495b9b4)

🎉 Front-end rodando!

### 📦 RESULTADO FINAL

- Pagina Principal

  ![image](https://github.com/user-attachments/assets/bbb9f2e6-4be2-479f-90db-36486eeace36)

- Tarefa adicionada

  ![image](https://github.com/user-attachments/assets/fa352efc-bb16-479c-b675-09a3af04dd99)

- Editando tarefa

  ![image](https://github.com/user-attachments/assets/b7c65bab-a8d7-47ed-b6c2-b8817779e6e3)

- Tarefa finalizada

  ![image](https://github.com/user-attachments/assets/672af383-6e35-4f4d-8c78-9d6c3c9580e0)

#### Possiveis melhorias e aprendizados

- Utilizei o Prisma porque já sei como funciona, mas estudei e pesquisei nos ultimos dias e o TypeORM parece se encaixar melhor para NestJS

- Adicionar responsividade

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
  - Note: Docker Desktop should be running
    
    ![image](https://github.com/user-attachments/assets/8aa5059c-aeb7-4eee-ba0e-bd0e546c10e2)
  - In the root folder of the project, run the following command:
    ```
    docker-compose build
    ```
    and then
    
    ```
    docker-compose up
    ```
    
- Example:

![image](https://github.com/user-attachments/assets/676504ac-efe2-4afe-8df9-dc8989c08503)

![image](https://github.com/user-attachments/assets/9584a48c-c3c9-4755-97e4-6a70696665ed)

![image](https://github.com/user-attachments/assets/131b69b4-34b6-4b23-9c19-d89069d08123)

🎉 Database running!

### 🔌 Part 2 - Running the Back-end

- Open a new terminal:
  - Navigate to the `back-end-nestjs` folder:
    ```
    cd .\back-end-nestjs\
    ```
  - Run the command to install dependencies:
    ```
    npm install
    ```

- Example:

  ![image](https://github.com/user-attachments/assets/c9581013-3e1e-4398-afb7-3f45de2c810a)

- In the `back-end-nestjs` folder, create a file named `.env`
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
    
- Example:

  ![image](https://github.com/user-attachments/assets/b4a279c2-4615-46cd-b6bb-30c144249cda)
  
  ![image](https://github.com/user-attachments/assets/122f9c67-895b-44c1-8048-b6252ef16880)
  
  ![image](https://github.com/user-attachments/assets/c17a6c5a-bad1-4f97-96d1-fc1c797aa14b)
  
  ![image](https://github.com/user-attachments/assets/646041bf-466a-4bb3-b962-a262ef27c0bd)
  
  ![image](https://github.com/user-attachments/assets/34c59724-0ce9-4bbe-936c-74f8838e1059)
    
- Finally, run the following command to start the application:
  ```
  npm run start
  ```
  - In development mode:
    ```
    npm run start:dev
    ```
- Example:

  ![image](https://github.com/user-attachments/assets/43c47bc6-ff52-4661-9ed4-984f6b431e45)
  
  ![image](https://github.com/user-attachments/assets/10c244e5-7374-4c36-b538-0dacfb1a0a29) 

To test the routes, I recommend using Postman!

[![My Skills](https://skillicons.dev/icons?i=postman)](https://skillicons.dev)

Attached is a file for testing:
[POMODORO TASKS.postman_collection.json](https://github.com/user-attachments/files/16450128/POMODORO.TASKS.postman_collection.json)

🎉 Back-end running!

### 💻 Part 3 - Running the Front-end

- Open a new terminal:
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

- Example:

  ![image](https://github.com/user-attachments/assets/29664f9a-beda-42fe-ad52-5870236bd02f)

  ![image](https://github.com/user-attachments/assets/51bda225-fd41-4cc5-9a09-79825495b9b4)

🎉 Front-end running!

### 📦 FINAL RESULT

- Main Page

  ![image](https://github.com/user-attachments/assets/bbb9f2e6-4be2-479f-90db-36486eeace36)

- Task added

  ![image](https://github.com/user-attachments/assets/fa352efc-bb16-479c-b675-09a3af04dd99)

- Editing task

  ![image](https://github.com/user-attachments/assets/b7c65bab-a8d7-47ed-b6c2-b8817779e6e3)

- Task completed

  ![image](https://github.com/user-attachments/assets/672af383-6e35-4f4d-8c78-9d6c3c9580e0)

#### Possible Improvements and Learnings

- I used Prisma because I'm familiar with it, but after studying and researching in recent days, TypeORM seems to be a better fit for NestJS.

- Add responsiveness
    
## 👥 Author

- **Enzo Martinelli**
