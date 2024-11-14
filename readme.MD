# 🌿 EcoLeaf

EcoLeaf é uma empresa especializada em **jardinagem** e **manutenção de ambientes verdes**, além de oferecer **sistemas de coleta de água da chuva**. Nosso objetivo é promover soluções sustentáveis para transformar e cuidar de ambientes com foco na preservação do meio ambiente e na melhoria da qualidade de vida.

---

## 🏡 Nossos Serviços

### 🌿 Jardinagem e Manutenção de Ambientes Verdes
Transformamos e mantemos jardins, áreas verdes e paisagismo em ambientes residenciais e comerciais. Oferecemos serviços como:
- **Poda e Adubação**: Manutenção e fortalecimento das plantas.
- **Irrigação**: Sistemas adaptados às necessidades de cada planta.
- **Cuidados Específicos**: Tratamentos para diferentes tipos de plantas, respeitando suas características.

### 💧 Sistemas de Coleta de Água da Chuva
Oferecemos soluções completas para a **captação, filtragem e armazenamento de água da chuva**. Nossos serviços incluem:
- **Venda e Instalação**: Sistemas projetados para residências e empresas.
- **Manutenção**: Garantia de funcionamento eficiente e sustentável, promovendo economia de recursos hídricos.

### 🤖 Inteligência Artificial para Cuidados com Plantas
Nossa exclusiva **Inteligência Artificial para cuidados com plantas** oferece:
- **Recomendações de espécies** ideais com base em fatores como luz, umidade e temperatura do ambiente.
- **Dicas de manutenção personalizadas** para cada tipo de planta.
- **Acompanhamento e lembretes de rotina** para garantir a saúde e a beleza das plantas, sejam elas ornamentais, frutíferas ou medicinais.

---

EcoLeaf: **sustentabilidade e tecnologia** ao seu alcance para transformar seu espaço em um ambiente verde e sustentável. 🌱

# 👥 Desenvolvedores
### FullStack
**Vitor Buzato** 15449 [Github](https://github.com/vbzt)
- **Responsabilidades:** Tech Lead do projeto, responsável pelo desenvolvimento completo do lado do servidor, incluindo **todos os CRUDS**. Desenvolveu a **Inteligência Artificial para recomendações de plantas** e implementou a aplicação front-end completa em **React.js**.

### Backend
**Leonardo Yudi** 15518 [Github](https://github.com/leoyudigithub)
- **Responsabilidades:** Desenvolveu o **CRUD do Catálogo de Plantas** e implementou o código para o sistema de **contato via e-mail**, garantindo a funcionalidade de comunicação na aplicação.

### Frontend
**Guilherme Rigobello** 15410 [Github](https://github.com/Guilherme-Rigobello) 
- **Responsabilidades:** Criador do design e código da **landing page** e das **páginas de formulários**. Contribuiu para a criação do **CRUD do Catálogo de Plantas** em conjunto com outros membros da equipe.

### Design UI/UX
**João Vitor** 15905 [Github](https://github.com/ojoaox)

- **Responsabilidades:** Responsável pelo design UI/UX do projeto, criado no **Figma**. Atuou no suporte ao desenvolvimento front-end, contribuindo com ideias para aprimorar a experiência do usuário e a usabilidade da interface.

## Technologies
- Backend
	- Node.js | React.js (Vite) | MongoDB | Cookie sessions
## Docs
### Backend

### How to run the api

To run the backend api you need:
- Node.js
- Google Gemini API Key
- MongoDB

First, clone the project using:

```bash 
  git clone https://github.com/vbzt/Ecoleaf
```

After cloning the repo, run the following commands:

```bash
cd backend
npm i

cd chatbot
npm i

cd ../../frontend
npm i
```

Then create and <code>.env</code> archive in the frontend root folder and add the gemini api key:
```JSON
API_KEY="YOUR_GEMINI_API_KEY"
```
<br>If you don't have an api key, get one [here](https://ai.google.dev/aistudio?hl=pt-br)


Then create and <code>.env-local</code> archive in the frontend root folder and add these variables:
```JSON
VITE_API="http://localhost:3000"
```

To run the application

```bash
cd backend
npm start

cd ../frontend
npm run dev
```

### API functions

### Auth EndPoints

# Endpoints

### Register User
- **Route**: `/users/register`
- **Method**: `POST`
- **Body**:
    ```json
    {
      "username": "test",
      "email": "test@test",
      "password": "test1234@",
      "confirmPassword": "test1234@"
    }
    ```
- **Response**:
    - **Status**: `201 Created`
    - **Body**:
      ```json
      {
        "message": "Usuário criado com sucesso",
        "user": {
          "username": "test",
          "email": "test@test",
          "password": "$2b$12$/m20J7G3h.88m0YlxryvFeNOCXAS6rty1XO0htNbBLGSDW.dSmQji",
          "_id": "6735f349fd6189147a3bc5a3",
          "createdAt": "2024-11-14T12:55:37.195Z",
          "updatedAt": "2024-11-14T12:55:37.195Z",
          "__v": 0
        }
      }
      ```

---

### Login User
- **Route**: `/users/login`
- **Method**: `POST`
- **Body**:
    ```json
    {
      "email": "test@test",
      "password": "test1234@"
    }
    ```
- **Response**:
    - **Status**: `200 OK`
    - **Body**:
      ```json
      {
        "message": "Login efetuado com sucesso",
        "id": "6735f349fd6189147a3bc5a3",
        "session": {
          "cookie": {
            "originalMaxAge": 3599999945388,
            "expires": "2138-12-14T04:55:15.359Z",
            "secure": false,
            "httpOnly": true,
            "path": "/",
            "sameSite": false
          },
          "userId": "6735f349fd6189147a3bc5a3",
          "__lastAccess": 1731588977336
        }
      }
      ```

---

### Check Current User
- **Route**: `/users/checkuser`
- **Method**: `GET`
- **Response**:
    - **Status**: `200 OK`
    - **Body**:
      ```json
      {
        "currentUser": {
          "_id": "6735f349fd6189147a3bc5a3",
          "username": "test",
          "email": "test@test",
          "createdAt": "2024-11-14T12:55:37.195Z",
          "updatedAt": "2024-11-14T12:55:37.195Z",
          "__v": 0
        },
        "session": {
          "cookie": {
            "originalMaxAge": 3599999945388,
            "expires": "2138-12-14T04:55:22.725Z",
            "secure": false,
            "httpOnly": true,
            "path": "/",
            "sameSite": false
          },
          "userId": "6735f349fd6189147a3bc5a3",
          "__lastAccess": 1731588977337
        }
      }
      ```

---

### Get User by ID
- **Route**: `/users/:id`
- **Method**: `GET`
- **Response**:
    - **Status**: `200 OK`
    - **Body**:
      ```json
      {
        "user": {
          "_id": "6735f349fd6189147a3bc5a3",
          "username": "test",
          "email": "test@test",
          "createdAt": "2024-11-14T12:55:37.195Z",
          "updatedAt": "2024-11-14T12:55:37.195Z",
          "__v": 0
        }
      }
      ```

---

## Edit User by ID
- **Route**: `/users/edit/:id`
- **Method**: `PATCH`
- **Description**: Updates the specified user's information.

### Request
- **Body**:
    ```json
    {
      "email": "test@test",
      "username": "testEdit"
    }
    ```

### Response
- **Status**: `200 OK`
- **Body**:
    ```json
    {
      "message": "Usuário atualizado com sucesso",
      "user": {
        "_id": "6735f349fd6189147a3bc5a3",
        "email": "test@test",
        "username": "testEdit",
        "createdAt": "2024-11-14T12:55:37.195Z",
        "updatedAt": "2024-11-14T13:05:45.321Z",
        "__v": 0
      }
    }
    ```



