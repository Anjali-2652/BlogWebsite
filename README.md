# Full-Stack Blog Application

A modern full-stack blog website built with React (frontend) and Node.js/Express (backend), featuring user authentication, theme switching, and responsive design.

## Project Structure

- `Backend/` - Express.js server with MongoDB, JWT authentication, and user management
  - `controllers/` - API controllers (user registration, login, logout)
  - `database/` - MongoDB connection setup
  - `models/` - Mongoose schemas (User model)
  - `routes/` - API route definitions
- `Frontend/` - React application with Vite, Tailwind CSS, and Redux
  - `src/Components/` - Reusable UI components (Navbar, Hero, etc.)
  - `src/Pages/` - Page components (Home, Blogs, About, Login, SignUp)
  - `src/redux/` - State management with Redux Toolkit
  - `src/lib/` - Utility functions

## Tech Stack

### Frontend
- React 18
- Vite (build tool)
- Tailwind CSS (styling)
- Redux Toolkit (state management)
- React Router (routing)
- Lucide React & React Icons (icons)
- Sonner (toasts)
- Radix UI (components)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (authentication)
- bcrypt (password hashing)
- CORS (cross-origin requests)

## Prerequisites

- Node.js (v16 or higher)
- MongoDB Atlas account (or local MongoDB instance)
- npm or yarn

## Installation & Setup

### Backend Setup

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
     JWT_SECRET=your_jwt_secret_key
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The backend server will run on `http://localhost:8000`.

### Frontend Setup

1. Navigate to the Frontend directory:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will run on `http://localhost:5173` (default Vite port).

## Features

### Frontend Features
- Responsive design with mobile-first approach
- Dark/Light theme toggle
- User authentication (Login/SignUp)
- Protected routes and user dashboard
- Search functionality (desktop)
- Modern UI with Tailwind CSS
- Toast notifications

### Backend Features
- User registration and authentication
- JWT-based session management
- Password hashing and security
- MongoDB integration
- CORS enabled for frontend communication
- Social media profile links support

## API Endpoints

### Authentication
- **POST** `/api/v1/user/register` - Register a new user
- **POST** `/api/v1/user/login` - User login
- **GET** `/api/v1/user/logout` - User logout

### User Management
- **GET** `/api/v1/user/profile` - Get user profile
- **PUT** `/api/v1/user/profile` - Update user profile

## Usage

1. Start the backend server
2. Start the frontend development server
3. Open `http://localhost:5173` in your browser
4. Register a new account or login
5. Explore the blog features

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.
