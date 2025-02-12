# 🌿 EcoLeaf

EcoLeaf is a company specializing in **gardening** and **green space maintenance**, as well as offering **rainwater harvesting systems**. Our goal is to promote sustainable solutions to transform and care for environments, focusing on environmental preservation and improving quality of life.

---

## 🏡 Our Services

### 🌿 Gardening and Green Space Maintenance
We transform and maintain gardens, green areas, and landscaping for residential and commercial environments. Our services include:
- **Pruning and Fertilization**: Maintenance and strengthening of plants.
- **Irrigation**: Systems tailored to the needs of each plant.
- **Specific Care**: Treatments for different types of plants, respecting their characteristics.

### 💧 Rainwater Harvesting Systems
We offer complete solutions for **rainwater collection, filtration, and storage**. Our services include:
- **Sales and Installation**: Systems designed for homes and businesses.
- **Maintenance**: Ensuring efficient and sustainable operation, promoting water conservation.

### 🤖 Artificial Intelligence for Plant Care
Our exclusive **Artificial Intelligence for plant care** provides:
- **Recommendations of ideal species** based on factors such as light, humidity, and temperature of the environment.
- **Personalized maintenance tips** for each type of plant.
- **Routine tracking and reminders** to ensure the health and beauty of plants, whether ornamental, fruit-bearing, or medicinal.

---

EcoLeaf: **sustainability and technology** at your fingertips to transform your space into a green and sustainable environment. 🌱

## 👥 Developers

### FullStack
**Vitor Buzato** 15449 [Github](https://github.com/vbzt)
- **Responsibilities:** Tech Lead of the project, responsible for full server-side development, including **all CRUDs**. Developed the **Artificial Intelligence for plant recommendations** and implemented the full front-end application in **React.js**.

### Backend
**Leonardo Yudi** 15518 [Github](https://github.com/leoyudigithub)
- **Responsibilities:** Developed the **Plant Catalog CRUD** and implemented the code for the **email contact system**, ensuring communication functionality in the application.

### Frontend
**Guilherme Rigobello** 15410 [Github](https://github.com/Guilherme-Rigobello)
- **Responsibilities:** Created the design and code for the **landing page** and **form pages**. Contributed to the creation of the **Plant Catalog CRUD** along with other team members.

### UI/UX Design
**João Victor** 15905 [Github](https://github.com/ojoaox)

- **Responsibilities:** Responsible for the UI/UX design of the project, created in **Figma**. Supported front-end development and contributed ideas to improve user experience and interface usability.

## Technologies
- Backend:
    - Node.js
    - React.js (Vite)
    - MongoDB
    - Cookie sessions

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

Then create and <code>.env</code> archive in the backend root folder and add the gemini api key:
```JSON
API_KEY="YOUR_GEMINI_API_KEY"
```
<br>If you don't have an api key, get one [here](https://ai.google.dev/aistudio?hl=pt-br)


Then create and <code>.env.local</code> archive in the frontend root folder and add these variables:
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

### Blog EndPoints
## Get All Blog Posts
- **Route**: `/blog`
- **Method**: `GET`
- **Description**: Retrieves all blog posts.

### Response
- **Status**: `200 OK`
- **Body**:
    ```json
    {
      "postsData": [
        {
          "_id": "673600ba98adaf815aa7cd0b",
          "title": "blog test",
          "description": "blog test description",
          "image": "17315923786703603.jpg",
          "user": {
            "_id": "6735f349fd6189147a3bc5a3",
            "email": "test@test"
          },
          "createdAt": "2024-11-14T13:52:58.686Z",
          "updatedAt": "2024-11-14T13:52:58.686Z",
          "__v": 0
        }
      ]
    }
    ```

## Create a Blog Post
- **Route**: `/blog/create`
- **Method**: `POST`
- **Description**: Creates a new blog post.
- **File**: `Optional image file (PNG/JPG)`

### Request
- **Body**:
    ```json
    {
      "title": "blog test",
      "description": "blog test description",
      "image": "17315923786703603.jpg"
    }
    ```
  
### Response
- **Status**: `201 Created`
- **Body**:
    ```json
    {
      "message": "Post criado com sucesso!",
      "newPost": {
        "title": "blog test",
        "description": "blog test description",
        "image": "17315923786703603.jpg",
        "user": {
          "_id": "6735f349fd6189147a3bc5a3",
          "email": "test@test"
        },
        "_id": "673600ba98adaf815aa7cd0b",
        "createdAt": "2024-11-14T13:52:58.686Z",
        "updatedAt": "2024-11-14T13:52:58.686Z",
        "__v": 0
      }
    }
    ```
    ---
## Update a Blog Post by ID
- **Route**: `/blog/:id`
- **Method**: `PATCH`
- **Description**: Updates the specified fields of a blog post by its ID.
- **File**: `Optional updated image file (PNG/JPG)`

### Request
- **Body**:
    ```json
    {
      "title": "blog edit",
      "description": "blog description edit",
      "image": "17315926416295458.jpeg"
    }
    ```

### Response
- **Status**: `200 OK`
- **Body**:
    ```json
    {
      "message": "Post atualizado com sucesso",
      "newPost": {
        "title": "blog edit",
        "description": "blog description edit",
        "image": "17315926416295458.jpeg"
      }
    }
    ```

---

## Delete a Blog Post by ID
- **Route**: `/blog/:id`
- **Method**: `DELETE`
- **Description**: Deletes a blog post by its ID.

### Response
- **Status**: `200 OK`
- **Body**:
    ```json
    {
      "message": "Post excluído com sucesso!",
      "post": {
        "_id": "673600ba98adaf815aa7cd0b",
        "title": "blog edit",
        "description": "blog description edit",
        "image": "17315926416295458.jpeg",
        "user": {
          "_id": "6735f349fd6189147a3bc5a3",
          "email": "test@test"
        },
        "createdAt": "2024-11-14T13:52:58.686Z",
        "updatedAt": "2024-11-14T13:57:21.643Z",
        "__v": 0
      }
    }
    ```

---


### Contact EndPoints
## Contact Us
- **Route**: `/contate-nos`
- **Method**: `POST`
- **Description**: Sends a contact email.

### Request
- **Body**:
    ```json
    {
      "email": "johndoe@gmail.com"
    }
    ```

### Response
- **Status**: `200 OK`
- **Body**:
    ```json
    {
      "message": "Email enviado com sucesso!",
      "email": "johndoe@gmail.com"
    }
    ```

### Plant EndPoints

## Generate and Register Plant
- **Route**: `/plantas/generate-plant`
- **Method**: `POST`
- **Description**: Generates and registers a recommended plant based on user-provided conditions.

### Request
- **Body**:
    ```json
    {
      "local": "casa",
      "climate": "quente",
      "humidity": "úmido",
      "watering": "alto",
      "experience": "alta",
      "pets": "tem"
    }
    ```

### Response
- **Status**: `200 OK`
- **Body**:
    ```json
    {
      "message": "Planta gerada e cadastrada com sucesso!",
      "parsedResponse": {
        "popular": "Maranta",
        "cientifico": "Maranta leuconeura",
        "descricao": "Maranta é um género botânico da família das Marantaceae considerado por alguns autores como um sinónimo do género Ctenanthe, com cerca de 40 espécies herbáceas e rizomatosas de folhagem colorida, com tonalidades verdes, avermelhadas, creme, salpicadas, agrisalhadas e com manchas.",
        "link": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Maranta_leuconeura3.jpg/500px-Maranta_leuconeura3.jpg"
      }
    }
    ```

## Remove Plant by ID
- **Route**: `/plantas/:id`
- **Method**: `DELETE`
- **Description**: Removes a specific plant by its ID.

### Response
- **Status**: `200 OK`
- **Body**:
    ```json
    {
      "message": "Planta removida com sucesso!"
    }
    ```
