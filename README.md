# Renting App Backend

This is the backend for a renting application built with Node.js, Express, and MongoDB.

## Features

- User management (CRUD)
- Item management (CRUD, search)
- CORS enabled
- RESTful API structure

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation

1. Clone the repository
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up your MongoDB connection in `db.js` or with a `.env` file
4. Start the server:
   ```sh
   node server.js
   ```

## API Endpoints

### Users

- `GET /user` - Get all users
- `POST /user` - Create a user
- `GET /user/:id` - Get user by ID
- `PUT /user/:id` - Update user

### Items

- `GET /items` - Get all items
- `POST /items` - Create an item
- `GET /items/:id` - Get item by ID
- `PUT /items/:id` - Update item
- `DELETE /items/:id` - Delete item
- `GET /items/search?searchKeyWord=keyword` - Search items by keyword

## Project Structure

```
services/
controllers/
routes/
models/
server.js
db.js
```

## License

MIT
