This project consists of a React frontend and a Django backend. The frontend interacts with the backend API to perform various operations.

## Table of Contents

- [Project Structure](#project-structure)
- Installation
- [Running the Application](#running-the-application)
- [Testing the API](#testing-the-api)
- [Common Issues](#common-issues)
- [Technologies Used](#technologies-used)

## Project Structure

```
project-root/
├── backend/
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
├── backend_app/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── migrations/
│   │   ├── __init__.py
│   │   ├── 0001_initial.py
│   ├── models.py
│   ├── serializers.py
│   ├── tests.py
│   ├── views.py
├── db.sqlite3
├── envsmart/
│   ├── .gitignore
│   ├── Lib/
│   │   ├── site-packages/
│   ├── pyvenv.cfg
│   ├── Scripts/
│   │   ├── activate
├── frontend/
│   ├── .gitignore
│   ├── build/
│   ├── package.json
│   ├── public/
│   ├── src/
├── manage.py
├── README.md
├── requirements.txt
├── static/
│   ├── js/
│   ├── styles/
├── templates/
│   ├── index.html
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
   source env/Scripts/activate  # On Windows use `env\Scripts\activate`
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

1. Navigate to the [`frontend`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fsatya%2FOneDrive%2FDesktop%2Fcalculator%2Ffrontend%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\satya\OneDrive\Desktop\calculator\frontend") directory:
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

3. Open your browser and go to [`http://localhost:3000`](command:_github.copilot.openSymbolFromReferences?%5B%22http%3A%2F%2Flocalhost%3A3000%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Csatya%5C%5COneDrive%5C%5CDesktop%5C%5Ccalculator%5C%5Cenvsmart%5C%5CLib%5C%5Csite-packages%5C%5Csetuptools%5C%5Cconfig%5C%5C_validate_pyproject%5C%5Cfastjsonschema_validations.py%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fsatya%2FOneDrive%2FDesktop%2Fcalculator%2Fenvsmart%2FLib%2Fsite-packages%2Fsetuptools%2Fconfig%2F_validate_pyproject%2Ffastjsonschema_validations.py%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fsatya%2FOneDrive%2FDesktop%2Fcalculator%2Fenvsmart%2FLib%2Fsite-packages%2Fsetuptools%2Fconfig%2F_validate_pyproject%2Ffastjsonschema_validations.py%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A718%2C%22character%22%3A13%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Csatya%5C%5COneDrive%5C%5CDesktop%5C%5Ccalculator%5C%5CReadme.md%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fsatya%2FOneDrive%2FDesktop%2Fcalculator%2FReadme.md%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fsatya%2FOneDrive%2FDesktop%2Fcalculator%2FReadme.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A102%2C%22character%22%3A32%7D%7D%5D%5D "Go to definition") to see the application in action.

## Testing the API

You can test the API endpoints using tools like Postman or cURL. Here are some example requests:

### Example Endpoint

- **URL:** [`http://localhost:8000/api/calculate/`](command:_github.copilot.openSymbolFromReferences?%5B%22http%3A%2F%2Flocalhost%3A8000%2Fapi%2Fcalculate%2F%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Csatya%5C%5COneDrive%5C%5CDesktop%5C%5Ccalculator%5C%5Cenvsmart%5C%5CLib%5C%5Csite-packages%5C%5Csetuptools%5C%5Cconfig%5C%5C_validate_pyproject%5C%5Cfastjsonschema_validations.py%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fsatya%2FOneDrive%2FDesktop%2Fcalculator%2Fenvsmart%2FLib%2Fsite-packages%2Fsetuptools%2Fconfig%2F_validate_pyproject%2Ffastjsonschema_validations.py%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fsatya%2FOneDrive%2FDesktop%2Fcalculator%2Fenvsmart%2FLib%2Fsite-packages%2Fsetuptools%2Fconfig%2F_validate_pyproject%2Ffastjsonschema_validations.py%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A718%2C%22character%22%3A13%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Csatya%5C%5COneDrive%5C%5CDesktop%5C%5Ccalculator%5C%5CReadme.md%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fsatya%2FOneDrive%2FDesktop%2Fcalculator%2FReadme.md%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fsatya%2FOneDrive%2FDesktop%2Fcalculator%2FReadme.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A102%2C%22character%22%3A32%7D%7D%5D%5D "Go to definition")
- **Method:** [`POST`](command:_github.copilot.openSymbolFromReferences?%5B%22POST%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Csatya%5C%5COneDrive%5C%5CDesktop%5C%5Ccalculator%5C%5CReadme.md%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fsatya%2FOneDrive%2FDesktop%2Fcalculator%2FReadme.md%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fsatya%2FOneDrive%2FDesktop%2Fcalculator%2FReadme.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A111%2C%22character%22%3A15%7D%7D%5D%5D "Go to definition")
- **Headers:**
  - [`Content-Type: application/json`](command:_github.copilot.openSymbolFromReferences?%5B%22Content-Type%3A%20application%2Fjson%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Csatya%5C%5COneDrive%5C%5CDesktop%5C%5Ccalculator%5C%5Cenvsmart%5C%5CLib%5C%5Csite-packages%5C%5Csetuptools%5C%5Cconfig%5C%5C_validate_pyproject%5C%5Cfastjsonschema_validations.py%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fsatya%2FOneDrive%2FDesktop%2Fcalculator%2Fenvsmart%2FLib%2Fsite-packages%2Fsetuptools%2Fconfig%2F_validate_pyproject%2Ffastjsonschema_validations.py%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fsatya%2FOneDrive%2FDesktop%2Fcalculator%2Fenvsmart%2FLib%2Fsite-packages%2Fsetuptools%2Fconfig%2F_validate_pyproject%2Ffastjsonschema_validations.py%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A720%2C%22character%22%3A1950%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Csatya%5C%5COneDrive%5C%5CDesktop%5C%5Ccalculator%5C%5CReadme.md%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fsatya%2FOneDrive%2FDesktop%2Fcalculator%2FReadme.md%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fsatya%2FOneDrive%2FDesktop%2Fcalculator%2FReadme.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A113%2C%22character%22%3A5%7D%7D%5D%5D "Go to definition")
- **Body:**
  ```json
  {
    "expression":"7884*90809"
  }
  ```

### Using Postman

1. Open Postman and create a new POST request.
2. Enter the URL: [`http://localhost:8000/api/calculate/`](command:_github.copilot.openSymbolFromReferences?%5B%22http%3A%2F%2Flocalhost%3A8000%2Fapi%2Fcalculate%2F%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Csatya%5C%5COneDrive%5C%5CDesktop%5C%5Ccalculator%5C%5Cenvsmart%5C%5CLib%5C%5Csite-packages%5C%5Csetuptools%5C%5Cconfig%5C%5C_validate_pyproject%5C%5Cfastjsonschema_validations.py%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fsatya%2FOneDrive%2FDesktop%2Fcalculator%2Fenvsmart%2FLib%2Fsite-packages%2Fsetuptools%2Fconfig%2F_validate_pyproject%2Ffastjsonschema_validations.py%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fsatya%2FOneDrive%2FDesktop%2Fcalculator%2Fenvsmart%2FLib%2Fsite-packages%2Fsetuptools%2Fconfig%2F_validate_pyproject%2Ffastjsonschema_validations.py%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A718%2C%22character%22%3A13%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Csatya%5C%5COneDrive%5C%5CDesktop%5C%5Ccalculator%5C%5CReadme.md%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fsatya%2FOneDrive%2FDesktop%2Fcalculator%2FReadme.md%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fsatya%2FOneDrive%2FDesktop%2Fcalculator%2FReadme.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A102%2C%22character%22%3A32%7D%7D%5D%5D "Go to definition")
3. Set the headers to:
   - [`Content-Type: application/json`](command:_github.copilot.openSymbolFromReferences?%5B%22Content-Type%3A%20application%2Fjson%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Csatya%5C%5COneDrive%5C%5CDesktop%5C%5Ccalculator%5C%5Cenvsmart%5C%5CLib%5C%5Csite-packages%5C%5Csetuptools%5C%5Cconfig%5C%5C_validate_pyproject%5C%5Cfastjsonschema_validations.py%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fsatya%2FOneDrive%2FDesktop%2Fcalculator%2Fenvsmart%2FLib%2Fsite-packages%2Fsetuptools%2Fconfig%2F_validate_pyproject%2Ffastjsonschema_validations.py%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fsatya%2FOneDrive%2FDesktop%2Fcalculator%2Fenvsmart%2FLib%2Fsite-packages%2Fsetuptools%2Fconfig%2F_validate_pyproject%2Ffastjsonschema_validations.py%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A720%2C%22character%22%3A1950%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Csatya%5C%5COneDrive%5C%5CDesktop%5C%5Ccalculator%5C%5CReadme.md%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fsatya%2FOneDrive%2FDesktop%2Fcalculator%2FReadme.md%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fsatya%2FOneDrive%2FDesktop%2Fcalculator%2FReadme.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A113%2C%22character%22%3A5%7D%7D%5D%5D "Go to definition")
4. In the body section, select [`raw`](command:_github.copilot.openSymbolFromReferences?%5B%22raw%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Csatya%5C%5COneDrive%5C%5CDesktop%5C%5Ccalculator%5C%5CReadme.md%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fsatya%2FOneDrive%2FDesktop%2Fcalculator%2FReadme.md%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fsatya%2FOneDrive%2FDesktop%2Fcalculator%2FReadme.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A127%2C%22character%22%3A32%7D%7D%5D%5D "Go to definition") and enter the JSON data:
   ```json
   {
     "expression": "7884*90809"
   }
   ```
5. Send the request and check the response.

### Cross-Origin Resource Sharing (CORS)

If you encounter CORS issues, you may need to update your Django settings to allow requests from your React frontend. Install [`django-cors-headers`](command:_github.copilot.openSymbolFromReferences?%5B%22django-cors-headers%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Csatya%5C%5COneDrive%5C%5CDesktop%5C%5Ccalculator%5C%5CReadme.md%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fsatya%2FOneDrive%2FDesktop%2Fcalculator%2FReadme.md%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fsatya%2FOneDrive%2FDesktop%2Fcalculator%2FReadme.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A138%2C%22character%22%3A127%7D%7D%5D%5D "Go to definition") and update your settings:

1. Install the package:
   ```bash
   pip install django-cors-headers
   ```

2. Add it to your [`INSTALLED_APPS`](command:_github.copilot.openSymbolFromReferences?%5B%22INSTALLED_APPS%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Csatya%5C%5COneDrive%5C%5CDesktop%5C%5Ccalculator%5C%5CReadme.md%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fsatya%2FOneDrive%2FDesktop%2Fcalculator%2FReadme.md%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fsatya%2FOneDrive%2FDesktop%2Fcalculator%2FReadme.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A145%2C%22character%22%3A19%7D%7D%5D%5D "Go to definition") and configure it in [`settings.py`](command:_github.copilot.openSymbolFromReferences?%5B%22settings.py%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Csatya%5C%5COneDrive%5C%5CDesktop%5C%5Ccalculator%5C%5CReadme.md%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fsatya%2FOneDrive%2FDesktop%2Fcalculator%2FReadme.md%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fsatya%2FOneDrive%2FDesktop%2Fcalculator%2FReadme.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A21%2C%22character%22%3A12%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Csatya%5C%5COneDrive%5C%5CDesktop%5C%5Ccalculator%5C%5CReadme.md%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fsatya%2FOneDrive%2FDesktop%2Fcalculator%2FReadme.md%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fsatya%2FOneDrive%2FDesktop%2Fcalculator%2FReadme.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A21%2C%22character%22%3A12%7D%7D%5D%5D "Go to definition"):
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