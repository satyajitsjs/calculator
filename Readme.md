# calculator

This project consists of a React frontend and a Django backend. The frontend interacts with the backend API to perform various operations.

## Table of Contents

- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Testing the API](#testing-the-api)
- [Common Issues](#common-issues)
- [Technologies Used](#technologies-used)

## Project Structure

```
project-root/
├── backend/
│   ├── manage.py
│   ├── backend/
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── wsgi.py
│   └── api/
│       ├── __init__.py
│       ├── models.py
│       ├── views.py
│       ├── urls.py
├── frontend/
│   ├── package.json
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── components/
│   │   └── ...
├── README.md
└── ...
```

## Installation

### Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/satyajitsjs/calculator.git
   cd backend
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv env
   source env/bin/activate  # On Windows use `env\Scripts\activate`
   ```

3. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Apply the migrations:
   ```bash
   python manage.py migrate
   ```

5. Run the development server:
   ```bash
   python manage.py runserver
   ```

### Frontend

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Running the Application

1. Make sure the backend server is running:
   ```bash
   cd backend
   python manage.py runserver
   ```

2. In another terminal, start the frontend server:
   ```bash
   cd frontend
   npm start
   ```

3. Open your browser and go to `http://localhost:3000` to see the application in action.

## Testing the API

You can test the API endpoints using tools like Postman or cURL. Here are some example requests:

### Example Endpoint

- **URL:** `http://localhost:8000/api/calculate/`
- **Method:** `POST`
- **Headers:**
  - `Content-Type: application/json`
- **Body:**
  ```json
  {
    "expression":"7884*90809"
  }
  ```

### Using Postman

1. Open Postman and create a new POST request.
2. Enter the URL: `http://localhost:8000/api/calculate/`
3. Set the headers to:
   - `Content-Type: application/json`
4. In the body section, select `raw` and enter the JSON data:
   ```json
   {
     "param1": "value1",
     "param2": "value2"
   }
   ```
5. Send the request and check the response.

### Cross-Origin Resource Sharing (CORS)

If you encounter CORS issues, you may need to update your Django settings to allow requests from your React frontend. Install `django-cors-headers` and update your settings:

1. Install the package:
   ```bash
   pip install django-cors-headers
   ```

2. Add it to your `INSTALLED_APPS` and configure it in `settings.py`:
   ```python
   INSTALLED_APPS = [
       ...
       'corsheaders',
       ...
   ]

   MIDDLEWARE = [
       ...
       'corsheaders.middleware.CorsMiddleware',
       ...
   ]

   CORS_ALLOWED_ORIGINS = [
       "http://localhost:3000",
   ]
   ```

## Technologies Used

- **Frontend:**
  - React
  - Axios (for HTTP requests)

- **Backend:**
  - Django
  - Django REST framework

---
