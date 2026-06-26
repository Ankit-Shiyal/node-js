
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



<img width="700" alt="Screenshot 2026-06-26 115837" src="https://github.com/user-attachments/assets/38228aa2-dbec-447c-a1c2-7ec7d2293b40" />


## ➜ Get All Users


<img width="700" alt="Screenshot 2026-06-26 115940" src="https://github.com/user-attachments/assets/17e25dd9-472b-4cff-89f0-ab86aa9eb5c4" />


## ➜ Login User

<img width="700" alt="Screenshot 2026-06-26 115955" src="https://github.com/user-attachments/assets/b51acf28-60ac-4ebc-bc06-d255de25e69d" />



## ➜ Get Authenticated User



<img width="700" alt="Screenshot 2026-06-26 120009" src="https://github.com/user-attachments/assets/39222e29-cd13-49dd-8e4e-21a8809ac85c" />


## ➜ Update User



<img width="700" alt="Screenshot 2026-06-26 120040" src="https://github.com/user-attachments/assets/76721a5f-a78b-485d-8e3d-26748fad7031" />


## ➜ Delete User



<img width="700" alt="Screenshot 2026-06-26 120050" src="https://github.com/user-attachments/assets/4b734e5d-988c-42bd-aa54-1c6c9f68c723" />

## ➜ Logout User

<img width="700" alt="Screenshot 2026-06-26 120020" src="https://github.com/user-attachments/assets/ac961a1e-8795-462c-babf-09e939bf1e4c" />


## ➜ Logout From All Devices



<img width="700" alt="Screenshot 2026-06-26 120028" src="https://github.com/user-attachments/assets/907aa5c3-fc01-41f3-9762-ece9e4ae1395" />


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


