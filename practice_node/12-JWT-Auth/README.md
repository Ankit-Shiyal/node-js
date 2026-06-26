
# 🔐 JWT Authentication API

A complete **JWT Authentication Backend API** built using **Node.js**, **Express.js**, **MongoDB**, **Mongoose**, **bcryptjs**, and **JSON Web Token (JWT)**.

This project demonstrates secure user authentication with registration, login, protected routes, profile management, account update, account deletion, logout, and logout from all devices using JWT.

---

# 🚀 Features

## 👤 User Management

✅ Register User

✅ Get All Users

✅ Login User

✅ Get Authenticated User

✅ Update User Profile

✅ Delete User Account

---

## 🔑 Authentication

✅ JWT Token Generation

✅ Password Hashing (bcryptjs)

✅ Protected Routes

✅ Authentication Middleware

✅ Multiple Device Login Support

✅ Logout Current Device

✅ Logout From All Devices

---

## 🛡 Validation & Error Handling

✅ Custom Error Middleware

✅ MongoDB Validation

✅ Request Validation

✅ Proper HTTP Status Codes

---

# 🛠 Tech Stack

| Technology     | Usage                 |
| -------------- | --------------------- |
| Node.js        | Runtime Environment   |
| Express.js     | Backend Framework     |
| MongoDB        | Database              |
| Mongoose       | ODM                   |
| bcryptjs       | Password Hashing      |
| JSON Web Token | Authentication        |
| dotenv         | Environment Variables |
| Nodemon        | Development Server    |

---

# 📂 Project Structure

```bash
12-JWT-AUTH
│
├── config
│   └── db.js
│
├── controller
│   └── userController.js
│
├── middleware
│   ├── auth.js
│   └── HttpError.js
│
├── model
│   └── userModel.js
│
├── router
│   └── userRouter.js
│
├── .env
├── package.json
├── package-lock.json
└── server.js
```

---

# 📦 User Schema

```javascript
{
    name: String,
    Email: String,
    password: String,

    tokens: [
        {
            token: String
        }
    ]
}
```

---

# 🔗 API Endpoints

## ➜ Register User

**POST** `/user/add`

📸 **Screenshot**

> Add your Postman screenshot here.

---

## ➜ Get All Users

**GET** `/user/AllUser`

📸 **Screenshot**

> Add your Postman screenshot here.

---

## ➜ Login User

**POST** `/user/Login`

📸 **Screenshot**

> Add your Postman screenshot here.

Returns

```json
{
  "success": true,
  "Users": {},
  "token": "JWT_TOKEN"
}
```

---

## ➜ Get Authenticated User

**GET** `/user/authLogin`

Header

```http
Authorization: Bearer YOUR_TOKEN
```

📸 **Screenshot**

> Add your Postman screenshot here.

---

## ➜ Update User

**PATCH** `/user/update`

Header

```http
Authorization: Bearer YOUR_TOKEN
```

Body

```json
{
    "name":"Ankit Shiyal"
}
```

📸 **Screenshot**

> Add your Postman screenshot here.

---

## ➜ Delete User

**DELETE** `/user/delete`

Header

```http
Authorization: Bearer YOUR_TOKEN
```

📸 **Screenshot**

> Add your Postman screenshot here.

---

## ➜ Logout User

**GET** `/user/logOut`

Header

```http
Authorization: Bearer YOUR_TOKEN
```

📸 **Screenshot**

> Add your Postman screenshot here.

---

## ➜ Logout From All Devices

**GET** `/user/LogoutAll`

Header

```http
Authorization: Bearer YOUR_TOKEN
```

📸 **Screenshot**

> Add your Postman screenshot here.

---

# 🔐 Authentication Flow

```text
Register User
      │
      ▼
Login User
      │
      ▼
Generate JWT Token
      │
      ▼
Store Token in MongoDB
      │
      ▼
Client Sends Token
      │
      ▼
Authentication Middleware
      │
      ▼
Protected Routes
```

---

# 🛠 Custom Error Handling

```javascript
class HttpError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

export default HttpError;
```

---

# 🔒 Security Features

✅ Password Encryption using bcryptjs

✅ JWT Authentication

✅ Protected Routes

✅ Secure Token Verification

✅ Multiple Active Sessions

✅ Hide Password & Tokens in API Response

---

# 📸 API Testing

You can test all APIs using:

* Postman
* Thunder Client
* Insomnia

---

# 📦 Installation

Clone the repository

```bash
git clone https://github.com/yourusername/12-JWT-AUTH.git
```

Install dependencies

```bash
npm install
```

Create `.env`

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run the project

```bash
npm run dev
```

Server Running

```bash
http://localhost:5000
```

---

# 🔮 Future Improvements

* Refresh Token
* Email Verification
* Forgot Password
* Reset Password
* Role-Based Authentication
* Google OAuth Login
* User Profile Image Upload
* Cloudinary Integration
* Admin Dashboard

---

# 👨‍💻 Author

## Ankit Shiyal


