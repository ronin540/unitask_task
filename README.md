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
- View Profile (Restricted): `POST /api/users/me`
- Get Random Joke (Restricted): `GET /api/random-joke`
- User Logout (Restricted): `POST /api/users/logout`

**Note:** The restricted endpoints (`/api/users/me`, `/api/users/logout` and `/api/random-joke`) require authentication. Include the user's session ID in Cookie in the request headers.

Additionally, please note that all the necessary API information, including endpoints, request methods, and request/response details, can be found in the api-collection.json file provided. Make sure to import the collection file into Thunder Client to access and interact with the APIs seamlessly.

## Error Handling

The project includes a custom error handling middleware that catches and logs any errors that occur during the request processing. Internal server errors are returned with a status code of 500 and an error message.
