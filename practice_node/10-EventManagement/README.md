
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


<img width="474" height="268" alt="Screenshot 2026-06-09 112053" src="https://github.com/user-attachments/assets/d68e2c33-474d-467d-adf8-a2779b9372ae" />




### Get All Events

<img width="471" height="293" alt="Screenshot 2026-06-09 112114" src="https://github.com/user-attachments/assets/2f62088f-5350-4a91-9cdf-c39960e58976" />

### Get Event By ID
<img width="473" height="287" alt="Screenshot 2026-06-09 112145" src="https://github.com/user-attachments/assets/ee462ffb-a846-46d0-9453-1915cdd8a9cd" />


### Update Event

<img width="466" height="313" alt="Screenshot 2026-06-09 112435" src="https://github.com/user-attachments/assets/5f4772b6-8d49-45d0-b1cb-c890e3240611" />


### Delete Event

<img width="472" height="203" alt="Screenshot 2026-06-09 112347" src="https://github.com/user-attachments/assets/50ff827f-cae9-414b-990f-7cd94840f833" />


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
