# Interest Chat Application

## Overview

This is a full-stack application with a Django backend and a React frontend. Users can send interest messages, accept or reject interests, and chat in real-time.

## Prerequisites

- Python 3.x
- Node.js
- Django
- React
- Django Channels

## Backend Setup

1. **Create a Virtual Environment:**

    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```

2. **Install Django and Dependencies:**

    ```bash
    pip install django djangorestframework channels
    ```

3. **Apply Migrations:**

    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```

4. **Run the Django Server:**

    ```bash
    python manage.py runserver
    ```

## Frontend Setup

1. **Navigate to Frontend Directory:**

    ```bash
    cd frontend
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Start the React Application:**

    ```bash
    npm start
    ```

## Endpoints

- **User Authentication:**
  - `POST /api-token-auth/` - Authenticate and get a token.

- **Interests:**
  - `POST /api/interests/` - Send an interest.
  - `GET /api/interests/` - Get a list of interests.

- **Messages:**
  - `POST /api/messages/` - Send a message.
  - `GET /api/messages/` - Get a list of messages.

## WebSocket Chat

- **WebSocket Endpoint:** `ws://localhost:8000/ws/chat/`

## Testing

### Backend Testing with Postman

1. **Authenticate User:**
    - URL: `POST http://localhost:8000/api-token-auth/`
    - Body: `{ "username": "user1", "password": "password" }`

2. **Send Interest:**
    - URL: `POST http://localhost:8000/api/interests/`
    - Body: `{ "sender": 1, "receiver": 2 }`

3. **Send Message:**
    - URL: `POST http://localhost:8000/api/messages/`
    - Body: `{ "sender": 1, "receiver": 2, "content": "Hello!" }`

4. **Get Interests:**
    - URL: `GET http://localhost:8000/api/interests/`
    - Response: Should return a list of interests.

5. **Get Messages:**
    - URL: `GET http://localhost:8000/api/messages/`
    - Response: Should return a list of messages.

### Frontend Testing

- Ensure the frontend components work correctly by navigating through the application and checking if you can authenticate, send interests, and chat.

## Notes

- This is a minimal implementation and can be expanded with additional features like user profiles, improved error handling, and persistent chat history.

## Incomplete Aspects

- Real-time notifications for message receipt.
- Enhanced UI/UX design.

## Next Steps

- Add user profile management.
- Implement more comprehensive testing and error handling.

## GitHub Repository

1. **Initialize Git Repository:**

    ```bash
    git init
    ```

2. **Add Files and Commit:**

    ```bash
    git add .
    git commit -m "Initial commit"
    ```

3. **Push to GitHub:**

    ```bash
    git remote add origin <YOUR_GITHUB_REPO_URL>
    git push -u origin master
    ```

## Submission

- Submit the GitHub repository link to the provided email address: dreamjob@zentratech.com.
