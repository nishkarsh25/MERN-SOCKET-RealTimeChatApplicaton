# MERN-SOCKET-RealTimeChatApplication Project

Welcome to the MERN (MongoDB, Express.js, React.js, Node.js) stack project! This comprehensive guide will walk you through every aspect of this project, including its structure, setup instructions, usage, API endpoints, backend, frontend, contributing guidelines, license information, and how to get in touch for support or inquiries.

## Introduction

This project is a real-time chat application built with React, Redux, and Socket.IO for WebSocket communication. It allows users to sign up, log in, and chat in real-time with other users.


## Features

- **User Authentication**: Sign up and login functionality with error handling.
- **Real-Time Messaging**: Exchange messages with other users in real-time using WebSocket.
- **User Status**: Displays online status of users.
- **Responsive Design**: Mobile-friendly layout using Tailwind CSS.
- **Redux State Management**: Manage application state using Redux and Redux Toolkit.
- **Error Handling**: Toast notifications for user-friendly error messages.
- **Routing**: Navigation between signup, login, and home pages using React Router.

## Live Demo

You can try out the live demo of the app [here](https://mern-socket-realtimechatapplicaton-2.onrender.com).

## Folder Structure

```
my-web-app/
├── backend/                   # Backend directory
│   ├── node_modules/          # Node.js modules (generated)
│   ├── src/                   # Backend source code
│   │   ├── config/            # Configuration files (e.g., database, environment)
│   │   ├── controllers/       # Route controllers
│   │   ├── middleware/        # Custom middleware
│   │   ├── models/            # Database models
│   │   ├── routes/            # API routes
│   │   └── app.js             # Express application entry point
│   ├── .env                   # Environment variables (not included in repository)
│   ├── package.json           # Node.js dependencies and scripts
│   └── ...
│
├── frontend/                  # Frontend directory
│   ├── node_modules/          # Frontend dependencies (generated)
│   ├── public/                # Public assets (e.g., index.html)
│   ├── src/                   # Frontend source code
│   │   ├── components/        # React components
│   │   ├── hooks/             # Custom hooks
│   │   ├── redux/             # Redux store configuration and slices
│   │   ├── styles/            # CSS or SCSS stylesheets
│   │   ├── App.js             # Main React application component
│   │   ├── index.js           # React application entry point
│   │   └── ...
│   ├── .env.development       # Environment variables for development (not included in repository)
│   ├── .env.production        # Environment variables for production (not included in repository)
│   ├── package.json           # Frontend dependencies and scripts
│   └── ...
│
├── .gitignore                 # Git ignore file
├── README.md                  # Project documentation
└── ...


```


## GIF's

<img src="https://github.com/nishkarsh25/MERN-SOCKET-RealTimeChatApplicaton/blob/main/Screenshots/ss1.gif" alt="Screenshot 1" width="1000"> 

## Technologies Used

- **Frontend**:
  - React: JavaScript library for building user interfaces.
  - React Router: Declarative routing for React applications.
  - Redux: State management library for JavaScript applications.
  - Tailwind CSS: Utility-first CSS framework for designing responsive UIs.
  - Axios: Promise-based HTTP client for making requests to the backend.
  - React Hot Toast: Toast notifications for React applications.

- **Backend**:
  - Node.js: JavaScript runtime environment.
  - Express: Web application framework for Node.js.
  - Socket.IO: Library for real-time web applications (WebSocket communication).
  - MongoDB: NoSQL database for storing user information and messages.
  - JWT (JSON Web Tokens): Securely transmit information between parties as a JSON object.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nishkarsh25/MERN-SOCKET-RealTimeChatApplication.git
   ```
2. Navigate to the project branch:

   ```bash
   git checkout <branch-name>
   ```
   Replace `<branch-name>` with the name of the branch you want to checkout.
   
3. Start the Backend Server: Launch the backend Node.js server.

   ```bash
   cd backend
   node index.js
   ```
4. Start the Frontend Development Server: Run the React development server for the frontend application.

   ```bash
   cd frontend
   npm start
   ```
5. Start the socket Server: Launch the backend Node.js server.

   ```bash
   cd socket
   node server.js
   ```

## Usage

1. **Run the development server**:

   ```bash
   cd client
   npm start
   ```
2. **Open your browser** and navigate to http://localhost:3000 to view the app.

## How to Use:
1. **Sign Up / Log In:**
   - Open the application in your browser.
   - If you're a new user, click on the "Sign Up" button and fill in the required details to create an account.
   - If you already have an account, click on the "Log In" button and enter your credentials.
2. **Home Page:**
   - Upon successful login, you will be directed to the home page.
   - Here, you can view posts from users you follow, like, comment, and share posts.
3. **Profile Page:**
   - Click on your profile picture or username to access your profile page.
   - View and edit your profile information, including profile picture, bio, and other details.
   - View your posts, followers, following, and other profile-related information.
4. **Chat:**
   - Navigate to the chat section to engage in real-time messaging with your friends.
   - View your chat history and send messages to other users.
5. **Search:**
   - Use the search functionality to find users, posts, or specific content on the platform.
6. **Notifications:**
   - Receive notifications for likes, comments, mentions, and other activities related to your posts or profile.
7. **Settings:**
   - Access account settings to customize privacy, security, notification preferences, and other account-related settings.
8. **Logout:**
   - Click on the logout button to securely log out of your account.

## How to Use

### User Authentication

1. **Signup**:
   - Navigate to `/signup`.
   - Fill in the signup form with your full name, username, password, confirm password, and select gender.
   - Click on the "Signup" button.
   - Upon successful signup, you will be redirected to the login page.

2. **Login**:
   - Navigate to `/login`.
   - Enter your username and password.
   - Click on the "Login" button.
   - Upon successful login, you will be redirected to the homepage.

### Real-Time Messaging

- After logging in, you will see a sidebar with a list of other users.
- Click on any user from the sidebar to start a conversation.
- Messages between you and the selected user will appear in the main message container in real-time.
- Use the input field at the bottom to type and send messages.

### User Status

- The sidebar displays online status indicators for each user.
- Green dot indicates that the user is online and available for chat.

### Responsive Design

- The application is designed to be responsive and adapts to various screen sizes, including mobile devices.


## API Endpoints

- **POST /api/v1/user/register**
  - Registers a new user with provided full name, username, password, and gender.
  - Request body:
    ```json
    {
      "fullName": "John Doe",
      "username": "johndoe",
      "password": "password",
      "confirmPassword": "password",
      "gender": "male"
    }
    ```
  - Response:
    ```json
    {
      "success": true,
      "message": "User registered successfully."
    }
    ```

- **POST /api/v1/user/login**
  - Authenticates a user with username and password.
  - Request body:
    ```json
    {
      "username": "johndoe",
      "password": "password"
    }
    ```
  - Response:
    ```json
    {
      "success": true,
      "message": "Login successful.",
      "user": {
        "_id": "user-id",
        "fullName": "John Doe",
        "username": "johndoe",
        "gender": "male",
        "profilePhoto": "profile-photo-url"
      }
    }
    ```

- **POST /api/v1/message/send/:recipientId**
  - Sends a message to a specific user identified by `recipientId`.
  - Request body:
    ```json
    {
      "message": "Hello!"
    }
    ```
  - Response:
    ```json
    {
      "success": true,
      "message": "Message sent successfully.",
      "newMessage": {
        "_id": "message-id",
        "senderId": "sender-user-id",
        "recipientId": "recipient-user-id",
        "message": "Hello!",
        "timestamp": "2024-06-17T12:00:00.000Z"
      }
    }
    ```




## Contributing

Contributions to this project are highly appreciated! Whether you discover bugs, have feature requests, or wish to contribute improvements, your input is valuable. Here's how you can contribute:

- **Report Issues:** If you encounter any bugs or issues while using MyCalculatorApp, please open an issue on the GitHub repository. Be sure to provide detailed information about the problem and steps to reproduce it.

- **Submit Pull Requests:** If you have enhancements or fixes to propose, feel free to submit a pull request. Contributions that improve the functionality, usability, or performance of this app are welcomed and encouraged.

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the Repository**.
2. **Create a New Branch** (`git checkout -b feature/your-feature-name`).
3. **Make Your Changes**.
4. **Commit Your Changes** (`git commit -am 'Add some feature'`).
5. **Push to the Branch** (`git push origin feature/your-feature-name`).
6. **Create a New Pull Request**.

## License

This project is licensed under the [The 3-Clause BSD License](LICENSE).Feel free to explore, modify, and contribute to this project as you see fit. Your feedback and contributions are greatly appreciated! 🚀✨


## Acknowledgments

This project is made possible by the contributions and support of various individuals and communities. Special thanks to:

- **Tailwind CSS Team:** For developing Tailwind CSS, a versatile CSS framework that simplifies web development and enhances user interfaces.
  
- **Open Source Community:** For fostering collaboration, innovation, and the sharing of knowledge, which enriches projects like My Form Validation and makes them accessible to all.


## Credits

This project wouldn't be possible without the contributions of the following:

- **React**: A JavaScript library for building user interfaces. Visit [React](https://reactjs.org/) for more information.

- **React Icons**: React Icons provides a comprehensive library of icons for React applications. Visit [React Icons](https://react-icons.github.io/react-icons/) for more information.
  
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs rapidly. Visit [Tailwind CSS](https://tailwindcss.com/) for more information.

- - **Daisy UI**: A component library for Tailwind CSS that provides ready-to-use UI components. Visit [Daisy UI](https://daisyui.com/) for more information.

- **FontAwesome**: A popular icon library providing a vast collection of icons for web development. Visit [FontAwesome](https://fontawesome.com/) for more information.

- **React Router**: React Router is a library for routing in React applications, allowing for navigation between different components. Visit [React Router](https://reactrouter.com/) for more information.

- **Redux**: Redux is a predictable state container for JavaScript applications, providing a centralized store for managing application state. Visit [Redux](https://redux.js.org/) for more information.

- **React Redux**: React Redux is the official React binding for Redux, enabling React components to interact with the Redux store. Visit [React Redux](https://react-redux.js.org/) for more information.

- **Axios**: Axios is a promise-based HTTP client for making asynchronous requests in JavaScript applications. Visit [Axios](https://axios-http.com/) for more information.

- **Express**: Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. Visit [Express](https://expressjs.com/) for more information.

- **Mongoose**: Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js, providing a straightforward schema-based solution for modeling application data. Visit [Mongoose](https://mongoosejs.com/) for more information.

- **JSON Web Token (JWT)**: JSON Web Token is a compact, URL-safe means of representing claims to be transferred between two parties. It is commonly used for authentication and authorization in web applications. Visit [JWT](https://jwt.io/) for more information.

- **Socket.IO**: Socket.IO enables real-time, bidirectional, and event-based communication between web clients and servers. Visit [Socket.IO](https://socket.io/) for more information.

- **Netlify**: Netlify provides seamless deployment and hosting solutions, making it easy to deploy web applications and share them with the world. Visit [Netlify](https://www.netlify.com/) for more information.

- **Render**: Render offers a modern cloud platform for deploying and running web applications, databases, and other services. Visit [Render](https://render.com/) for more information.

- **MongoDB Atlas**: MongoDB Atlas is a fully managed cloud database service for modern applications. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for more information.



## Author

- **Nishkarsh Gupta**
  - GitHub: [nishkarsh25](https://github.com/nishkash25)
  - Email: bm21btech11016@gmail.com

