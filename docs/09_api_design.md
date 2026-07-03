# REST API Design

## Project: MindEase AI – AI Mental Wellness Support Chatbot

---

# Base URL

```
http://localhost:5000/api
```

Production Example

```
https://mindease-ai.onrender.com/api
```

---

# Authentication APIs

## Register User

POST /auth/register

Request

```json
{
  "fullName": "Basant Kumar",
  "email": "basant@gmail.com",
  "password": "Password@123"
}
```

Response (201)

```json
{
  "success": true,
  "message": "User registered successfully."
}
```

---

## Login

POST /auth/login

Request

```json
{
  "email": "basant@gmail.com",
  "password": "Password@123"
}
```

Response

```json
{
  "token": "JWT_TOKEN",
  "user": {}
}
```

---

## Forgot Password

POST /auth/forgot-password

---

## Reset Password

POST /auth/reset-password

---

## Logout

POST /auth/logout

---

# User APIs

## Get Profile

GET /users/profile

Authorization

Bearer Token Required

---

## Update Profile

PUT /users/profile

---

# Chat APIs

## Send Message

POST /chat

Request

```json
{
   "message":"I feel stressed today."
}
```

---

## Get Chat Sessions

GET /chat/sessions

---

## Get Chat History

GET /chat/:sessionId

---

## Delete Chat Session

DELETE /chat/:sessionId

---

# Mood APIs

## Log Mood

POST /moods

Request

```json
{
  "mood":"Happy",
  "intensity":8,
  "note":"Feeling much better."
}
```

---

## Get Mood History

GET /moods

---

## Update Mood

PUT /moods/:id

---

## Delete Mood

DELETE /moods/:id

---

# Journal APIs

## Create Journal

POST /journals

---

## Get Journals

GET /journals

---

## Get Journal

GET /journals/:id

---

## Update Journal

PUT /journals/:id

---

## Delete Journal

DELETE /journals/:id

---

# Dashboard APIs

GET /dashboard

Returns

* Mood Analytics
* Journal Streak
* Recent Chats
* Recent Journals

---

# Crisis APIs

GET /crisis/resources

Returns

* Helplines
* Wellness Resources

---

# Admin APIs

GET /admin/users

PUT /admin/users/:id

DELETE /admin/users/:id

GET /admin/analytics

GET /admin/crisis-alerts

PUT /admin/crisis-alerts/:id

POST /admin/resources

PUT /admin/resources/:id

DELETE /admin/resources/:id

---

# HTTP Status Codes

200 OK

201 Created

400 Bad Request

401 Unauthorized

403 Forbidden

404 Not Found

409 Conflict

500 Internal Server Error

---

# Authentication

JWT Token

Authorization

Bearer <token>

---

# Content Type

application/json

---

# API Version

v1
