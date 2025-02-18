# Two-Server Application (React Frontend & Spring Boot Backend)

This repository contains a full-stack application with a React frontend and a Spring Boot backend. The frontend and backend are in separate directories and run independently.

## Project Structure

```
root/
│-- frontend/  # React application
│-- backend/   # Spring Boot application
│-- README.md
```

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (for frontend)
- [Java 17+](https://adoptium.net/) (for backend)
- [Maven Wrapper](https://maven.apache.org/wrapper/) (included in backend)

## Getting Started

### Backend (Spring Boot)

1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Run the application using the embedded Maven wrapper (Windows):
   ```sh
   ./mvnw spring-boot:run
   ```
   If using Git Bash, use:
   ```sh
   sh mvnw spring-boot:run
   ```
3. The backend should now be running on `http://localhost:8080`.

### Frontend (React)

1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
4. The frontend should now be running on `http://localhost:3000`.

## API Communication

The frontend interacts with the backend through API calls. Ensure that the frontend is configured to communicate with `http://localhost:8080` in `frontend/src/config.js` (or similar configuration file):

```js
export const API_BASE_URL = "http://localhost:8080";
```

## Building and Deploying

### Backend
To build the Spring Boot application:
```sh
cd backend
./mvnw clean package
```
The JAR file will be generated in `backend/target/`.

### Frontend
To build the React application:
```sh
cd frontend
npm run build
```
The output will be in `frontend/build/`, which can be deployed to a static hosting service.

## Contribution
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Make your changes and commit: `git commit -m "Added new feature"`.
4. Push to the branch: `git push origin feature-branch`.
5. Submit a pull request.

## License
This project is open-source and available under the [MIT License](LICENSE).

