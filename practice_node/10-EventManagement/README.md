
# 🎉 Event Management System

A complete Event Management Backend Application built using **Node.js**, **Express.js**, **MongoDB**, **Mongoose**, and **Multer**.

This project allows users to manage events with complete CRUD operations and upload multiple event-related files including images, banners, posters, speaker images, and documents.

---

## 🚀 Features

### Event Management

✅ Add Event

✅ Get All Events

✅ Get Event By ID

✅ Update Event Details

✅ Delete Event

---

### File Upload Management

✅ Multiple Event Images Upload

✅ Event Banner Upload

✅ Event Poster Upload

✅ Event Speaker Images Upload

✅ Event Document Upload (PDF)

✅ Automatic Folder Creation

✅ File Deletion During Update

✅ File Deletion During Event Remove

---

### Validation & Error Handling

✅ Custom Error Middleware

✅ File Type Validation

✅ Request Validation

✅ Proper HTTP Status Codes

✅ MongoDB Schema Validation

---

## 🛠 Tech Stack

| Technology | Usage               |
| ---------- | ------------------- |
| Node.js    | Runtime Environment |
| Express.js | Backend Framework   |
| MongoDB    | Database            |
| Mongoose   | ODM                 |
| Multer     | File Upload         |
| Nodemon    | Development Server  |

---

## 📂 Project Structure

```bash
10-EVENTMANAGEMENT
│
├── config
│   └── db.js
│
├── controller
│   └── EventController.js
│
├── middlewares
│   ├── HttpError.js
│   └── upload.js
│
├── model
│   └── EventModel.js
│
├── router
│   └── EventRouter.js
│
├── upload
│   ├── EventImages
│   ├── EventBanner
│   ├── EventPoster
│   ├── EventSpeaker
│   └── EventDocument
│
├── .env
├── server.js
├── package.json
└── package-lock.json
```

---

## 📦 Event Schema

```javascript
{
  EventName: String,
  EventDate: Date,
  EventVenue: String,
  EventDescription: String,
  ticketPrice: Number,

  EventImages: [String],
  EventBanner: [String],
  EventPoster: String,
  EventSpeaker: [String],
  EventDocument: String
}
```

---

## 🔗 API Endpoints

### Add Event

```http
POST /event/add
```

### Get All Events

```http
GET /event/allEvent
```

### Get Event By ID

```http
GET /event/:id
```

### Update Event

```http
PATCH /event/:id
```

### Delete Event

```http
DELETE /event/:id
```

---

## 📁 Supported Upload Fields

| Field Name    | Type            |
| ------------- | --------------- |
| EventImages   | Multiple Images |
| EventBanner   | Multiple Images |
| EventPoster   | Single Image    |
| EventSpeaker  | Multiple Images |
| EventDocument | PDF File        |

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/EventManagement.git
```

### Move Into Project

```bash
cd EventManagement
```

### Install Dependencies

```bash
npm install
```

### Create Environment File

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### Start Development Server

```bash
npm run dev
```

---

## 🛠 Custom Error Handling

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

## 🔒 File Validation

Allowed File Types:

* JPG
* JPEG
* PNG
* PDF

Maximum File Size:

```javascript
10 MB
```

---

## 📸 API Testing

You can test APIs using:

* Postman
* Thunder Client
* Insomnia

---

## 🔮 Future Improvements

* JWT Authentication
* User Login & Registration
* Cloudinary Integration
* Event Categories
* Search Events
* Pagination
* Event Booking System
* Payment Gateway Integration
* Admin Dashboard
* Event Analytics

---

## 👨‍💻 Author

### Ankit Shiyal

Aspiring Full Stack Developer passionate about building scalable backend applications using Node.js, Express.js, MongoDB, and modern web technologies.

⭐ If you like this project, don't forget to give it a star on GitHub.
