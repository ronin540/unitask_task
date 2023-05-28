# Node.js REST APIs

## Requirements

- Node.js (v12 or higher)
- NPM (Node Package Manager)
- MySQL

## Installation

1. Clone the repository or download the source code:

2. Install the dependencies using NPM:

3. Rename the sample.env file to .env and modify according to your configuration and database has to be created manually but table will be created automaticaly.

4. Run the application:

- npm start

The server will start running on http://localhost:3000.

## API Endpoints

- User Signup: `POST /api/users/signup`
- User Login: `POST /api/users/login`
- View Profile (Restricted): `GET /api/users/me`
- Get Random Joke: `GET /api/random-joke`
- User Logout (Restricted): `POST /api/users/logout`

**Note:** The restricted endpoints (`/api/users/me` and `/api/users/logout`) require authentication. Include the user's session ID in Cookie in the request headers.

## Error Handling

The project includes a custom error handling middleware that catches and logs any errors that occur during the request processing. Internal server errors are returned with a status code of 500 and an error message.
