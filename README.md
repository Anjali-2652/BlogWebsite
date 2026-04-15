# Blog Website Backend

A Node.js backend for a blog website featuring user registration and profile management with social media integration.

## Project Structure

- `Backend/` - Express.js server with MongoDB, JWT authentication, and user management
  - `controllers/` - API controllers (user registration)
  - `database/` - MongoDB connection setup
  - `models/` - Mongoose schemas (User model)
  - `routes/` - API route definitions
- `Frontend/` - Frontend application (to be implemented)

## Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account (or local MongoDB instance)
- npm or yarn

## Backend Setup

1. Navigate to the Backend directory:
   ```bash
   cd Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the Backend directory
   - Add the following variables:
     ```
     MONGO_URI=your_mongodb_connection_string
     PORT=8000
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The server will run on `http://localhost:8000`.

## Database

The application uses MongoDB with Mongoose ODM. The connection is established via the `MONGO_URI` environment variable.

## API Endpoints

### User Registration
- **POST** `/api/v1/user/register`
  - Registers a new user with profile information
  - Required fields: `firstName`, `lastName`, `email`, `password`
  - Optional fields: `bio`, `occupation`, `photo`, `instagram`, `facebook`, `linkedIn`, `github`

## Features

- User registration with email validation
- Password hashing with bcrypt
- MongoDB integration with Mongoose
- JWT authentication ready (dependencies included)
- Social media profile links support

## Frontend Setup

Frontend implementation is pending. This will include the blog interface, user dashboard, and content management.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the ISC License.
