# Library Management API

This project is a library management API that provides three main endpoints: 

- **Get All Books**: Retrieve a list of all books in the library.
- **Add a Book**: Add a new book to the library.
- **Update a Book**: Update the details of an existing book in the library with book ID.

## Instructions

To run this project, follow these steps:

1. Clone the repository to your local machine:

  ```bash
  clone this repo
  ```

2. Navigate to the project directory:

  ```bash
  cd "to repo"
  ```

3. Install the project dependencies:

  ```bash
  npm install
  ```

4. Set the .env file with correct Mongodb URL:

  ```bash
  rename the .env.example file to .env and complete the mongodb URL there
  ```

5. Start the server:

  ```bash
  node app.js
  ```

5. Once the server is running, you can access the API endpoints using the following URLs:

  - Get All Books (GET): `http://localhost:5000/api/books`
  - Add a Book (POST): `http://localhost:5000/api/books`
  - Update a Book (PUT): `localhost:5000/api/books/:id`

  Replace `:id` with the ID of the book you want to update.

That's it! You should now be able to run and use the Library Management API. Happy coding!
