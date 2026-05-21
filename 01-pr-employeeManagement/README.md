
# 🚀 Employee Management System


## 📌 Overview

Employee Management System is a backend project built using **Node.js**, **Express.js**, and **MongoDB**.

This project helps manage employee information with complete **CRUD operations** including:

✨ Add Employee  
✨ View Employees  
✨ Get Employee by ID  
✨ Update Employee Details  
✨ Delete Employee  
✨ Custom Error Handling  
✨ MongoDB Integration

---

# 📂 Project Structure

```bash
01-PR-EMPLOYEEMANAGEMENT
│
├── config
│   └── db.js
│
├── controller
│   └── employeeController.js
│
├── middleware
│   └── httpError.js
│
├── model
│   └── employeeModel.js
│
├── routes
│   └── employeeRoutes.js
│
├── node_modules
│
├── app.js
├── package.json
└── package-lock.json
```

---

# ⚙️ Tech Stack

| Technology | Usage |
|------------|--------|
| Node.js | Runtime Environment |
| Express.js | Backend Framework |
| MongoDB | Database |
| Mongoose | ODM |
| Nodemon | Development Server |

---

# 🔥 Features

## Employee Management

✅ Add Employee

✅ Get All Employees

✅ Find Employee By ID

✅ Update Employee Details

✅ Delete Employee

---

## Validation & Error Handling

✅ Custom Middleware

✅ Error Responses

✅ Unique Employee ID

✅ Email Validation

✅ Allowed Field Update System

---


## ➕ Add Employee

### POST

<img width="720" height="413" alt="Screenshot 2026-05-21 114241" src="https://github.com/user-attachments/assets/c8201877-6df7-4fb3-a0bb-bb00048c40ee" />

---

## 📋 Get All Employees
<img width="720"  alt="Screenshot 2026-05-21 114313" src="https://github.com/user-attachments/assets/950ce948-19f0-4ffc-b556-e115de462566" />



## ✏️ Update Employee

<img width="720" height="399" alt="Screenshot 2026-05-21 114051" src="https://github.com/user-attachments/assets/c355449e-3f1d-4f43-af90-51ba180b08c9" />


## ❌ Delete Employee

<img width="720" height="313" alt="Screenshot 2026-05-21 114127" src="https://github.com/user-attachments/assets/2080641a-6a8c-4691-9b0e-eb67b7af95c1" />

# 🗄 Employee Schema

```javascript
{
   name: String,

   EmployeeId: Number,

   email: String,

   field: String,

   phoneNumber: Number,

   salary: Number
}
```

---

# 🎯 Employee Fields

- Fullstack Development
- Graphic Design
- Video Editing
- Ui/UX
- Web Development

---

# 🛠 Error Handling

Custom middleware:

```javascript
class HttpError extends Error {
   constructor(message,statusCode){
      super(message);

      this.statusCode=statusCode;
   }
}
```

---

# 🚀 Future Improvements

🔹 JWT Authentication

🔹 Login System

🔹 Search Employee

🔹 Pagination

🔹 Sorting

🔹 Admin Panel

🔹 Dashboard

🔹 Salary Analytics

🔹 Role Management

---

# 📸 API Testing

You can test APIs using:

- Postman
- Thunder Client
- Insomnia

---
### Ankit Shiyal

