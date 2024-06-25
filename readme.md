# Node.js MVC Project

This is a backend created using node js with 3-layer backend architecture, including validation and CRUD operations for user management.

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Sham2003/Worko.ai---Assignment.git
cd Worko.ai---Assignment.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a .env file

```bash
DATABASE_URI=mongodb://localhost:27017/workoai
PORT=3000
```

### 4. Start the database

Iam using mongoDB because it is a flexible and one of the popular nosql databases.
Ensure you have mongodb server started , you can start it using the cmd

```bash
mongod
```

### 5. Run the server

```bash
npm start
```

## API Endpoints

### 1. List Users

- **URL**: `/workai/user`
- **Method**: `GET`
- **Description**: Retrieve a list of all users.

### 2. Get User Details

- **URL**: `/workai/user/:userId`
- **Method**: `GET`
- **URL Params**: `userId=[string]`
- **Description**: Retrieve details of a specific user by user ID.

### 3. Create User

- **URL**: `/workai/user`
- **Method**: `POST`
- **Description**: Create a new user.
- **Body**:
  ```json
  {
    "name": "John Doe",
    "age": 30,
    "email": "john.doe@example.com",
    "zipcode": 123456,
    "city": "CityName"
  }
  ```


### 4. Update User

- **URL**: `/workai/user`
- **Method**: `PUT`
- **Description**: Update an existing user's details.
- **Body**:
```json
{
  "id": "USER_ID",
  "name": "John Doe",
  "age": 30,
  "email": "john.doe@example.com",
  "zipcode": 123456,
  "city": "CityName"
}
```

### 5. Partially Update User

- **URL**: `/workai/user`
- **Method**: `PATCH`
- **Description**: Update an existing user's details.
- **Body**:
```json
{
  "id": "USER_ID",
  "name": "John Doe",
  "age": 30,
  "email": "john.doe@example.com",
  "zipcode": 123456,
  "city": "CityName"
}
```

### 6. Delete User

- **URL**: `/workai/user`
- **Method**: `DELETE`
- **Description**: Soft delete a user by user ID.
- **Body**:
```json
{
  "id": "USER_ID"
}
```


### Validation
User data is validated using joi in the userValidator.js file. Validation rules ensure that all fields are correctly formatted and meet the required criteria.