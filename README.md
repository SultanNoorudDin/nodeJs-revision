# nodeJs-revision

------

# Express.js Backend

This is a simple Express.js backend application using MongoDB for database operations and EJS as the view engine.

## Installation

1. Clone the repository:

    ```bash
    git clone <repository_url>
    ```

2. Install dependencies:

    ```bash
    cd <project_folder>
    npm install
    ```

3. Set up the MongoDB connection:
   
   - Ensure MongoDB is installed and running locally.
   - Update the MongoDB connection URI in the `mongoose.connect()` method within `index.js`:

    ```javascript
    mongoose
      .connect("mongodb://127.0.0.1:27017", {
        dbName: "testBackend",
      })
      .then(() => {
        console.log("db connected");
      })
      .catch((e) => {
        console.log(e);
      });
    ```

## Usage

- Start the server:

    ```bash
    npm start
    ```

- Access the server at `http://localhost:5000/`. or any functional port

## Routes

- **POST /login:** Handles the login functionality by setting an `andarAgia` cookie with an expiration time of 60 seconds.
- **GET /:** Renders a login page or a logout page based on the existence of a token in cookies.
- **GET /add:** Adds a sample entry to the MongoDB database.
- **GET /success:** Renders a success page.

## Dependencies

- Express.js: Web application framework for Node.js
- Mongoose: MongoDB object modeling tool
- EJS: Embedded JavaScript templating
- Cookie-parser: Parse cookie header and populate `req.cookies` with an object keyed by cookie names

## Project Structure

- **index.js:** Main entry point of the application.
- **public/:** Static assets directory.
- **views/:** EJS templates for rendering HTML views.
- **models/:** Contains Mongoose schemas and models.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

---
