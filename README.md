# Pet Shop is an app that links fluffy and cuddly pets to people looking for a tiny adorable creature to pour their hearts into. Wanna hold a fluffy and cuddly creature, here's how....

# To run the App
1. Run **pipenv install && pipenv shell** in the 'Phase-4-Project' directory
2. Run ./init.sh - which initializes the server
3. Run ./run.sh - which runs the initialized server
4. Change directories (Cd) into the client folder using 'cd client'
5. Run # npm install then npm run server to install packages and initialize the react server
6. Finally # npm start # to run the React application in your browser

# Server instructions (Instructions on interacting with the app's API)

This document provides an overview of the endpoints available in the Pet Adoption API and the expected payload for each request.

## User Authentication

### Sign Up

- **Endpoint:** `/signup`
- **Method:** `POST`
- **Payload:**
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Description:** Creates a new user account.

### Log In

- **Endpoint:** `/login`
- **Method:** `POST`
- **Payload:**
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Description:** Logs in an existing user.

## Pet Management

### Create a Pet

- **Endpoint:** `/pets`
- **Method:** `POST`
- **Payload:**
  ```json
  {
    "name": "string",
    "breed": "string",
    "pet_type": "string",
    "age": "integer",
    "gender": "string"
  }
  ```
- **Description:** Adds a new pet to the database.

### Get All Pets

- **Endpoint:** `/pets`
- **Method:** `GET`
- **Description:** Retrieves a list of all pets.

### Get Pet by ID

- **Endpoint:** `/pets/{id}`
- **Method:** `GET`
- **Description:** Retrieves information about a specific pet.

### Update Pet by ID

- **Endpoint:** `/pets/{id}`
- **Method:** `PUT`
- **Payload:**
  ```json
  {
    "name": "string",
    "breed": "string",
    "pet_type": "string",
    "is_adopted": "boolean",
    "color": "string",
    "age": "integer",
    "image_URL": "string",
    "gender": "string",
    "price": "interger"
  }
  ```
- **Description:** Updates information for a specific pet.

### Delete Pet by ID

- **Endpoint:** `/pets/{id}`
- **Method:** `DELETE`
- **Description:** Deletes a specific pet from the database.

### Get All Owners

- **Endpoint:** `/owners`
- **Method:** `GET`
- **Description:** Retrieves a list of all owners.

### Delete an Owner

- **Endpoint:** `/owners`
- **Method:** `DELETE`
- **Description:** Deletes the first owner from the database.

### Adopt a Pet

- **Endpoint:** `/adopt/{id}`
- **Method:** `PUT`
- **Payload:**
  ```json
  {
    "owner_id": "integer"
  }
  ```
- **Description:** Adopts a pet by assigning it to a specific owner.

---

*Note: Replace "string" and "integer" with the appropriate data types for your application.*
```

This Markdown document includes documentation for each endpoint in your Flask API, detailing the HTTP method, endpoint URL, expected payload for `POST` and `PUT` requests, and a brief description of each endpoint's purpose.
