# System Architecture Diagram

## Project: MindEase AI – AI Mental Wellness Support Chatbot

---

## Architecture Style

Client–Server Architecture (3-Tier Architecture)

* Presentation Layer
* Application Layer
* Data Layer

---

# High-Level Architecture

```text
                                +---------------------------+
                                |          USER             |
                                |  (Web Browser / Mobile)   |
                                +-------------+-------------+
                                              |
                                              | HTTPS
                                              |
                                              ▼
+--------------------------------------------------------------------------+
|                         PRESENTATION LAYER                               |
|                                                                          |
|                       React.js Frontend Application                      |
|                                                                          |
|  • Landing Page                                                          |
|  • Register / Login                                                      |
|  • Dashboard                                                             |
|  • AI Chat                                                               |
|  • Mood Tracker                                                          |
|  • Journal                                                               |
|  • Profile                                                               |
|  • Admin Dashboard                                                       |
+-----------------------------------+--------------------------------------+
                                    |
                                    | REST API (HTTPS + JSON)
                                    ▼
+--------------------------------------------------------------------------+
|                     APPLICATION LAYER (Node.js)                          |
|                                                                          |
|                    Express.js Backend REST API                           |
|                                                                          |
|  Authentication Module (JWT)                                             |
|  User Management Module                                                  |
|  AI Chat Module                                                          |
|  Mood Tracking Module                                                    |
|  Journal Module                                                          |
|  Dashboard Module                                                        |
|  Crisis Detection Module                                                 |
|  Admin Module                                                            |
|  Wellness Resource Module                                                |
+---------+---------------------+--------------------+----------------------+
          |                     |                    |
          |                     |                    |
          ▼                     ▼                    ▼
+----------------+     +----------------+    +------------------------+
| Authentication |     | AI Integration |    | Business Logic         |
| JWT            |     | OpenAI / LLM   |    | Validation             |
| Password Hash  |     | Prompt Engine  |    | Authorization          |
+----------------+     +----------------+    | Error Handling         |
                                              +-----------+------------+
                                                          |
                                                          |
                                                          ▼
+--------------------------------------------------------------------------+
|                           DATA LAYER                                     |
|                                                                          |
|                         MongoDB Database                                 |
|                                                                          |
| Collections:                                                             |
| • Users                                                                  |
| • UserProfiles                                                           |
| • ChatSessions                                                           |
| • Messages                                                               |
| • Moods                                                                  |
| • Journals                                                               |
| • CrisisAlerts                                                           |
| • WellnessResources                                                      |
| • Admins                                                                 |
| • ReviewLogs                                                             |
+--------------------------------------------------------------------------+

                             External Services

                 +--------------------------------------+
                 |           LLM API                    |
                 | (OpenAI / Gemini / Claude)           |
                 +----------------+---------------------+
                                  |
                                  |
                                  ▼
                      AI Response Generation
                      Prompt Engineering
                      Crisis Detection

                 +--------------------------------------+
                 |      Email Service (Optional)        |
                 |  OTP / Password Reset / Verification |
                 +--------------------------------------+

                 +--------------------------------------+
                 |   Future RAG Knowledge Base          |
                 | (Pinecone / Chroma / FAISS)          |
                 +--------------------------------------+
```

---

# Technology Stack

### Frontend

* React.js
* React Router
* Axios
* Tailwind CSS
* Chart.js / Recharts

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose ODM

### Authentication

* JWT
* bcrypt

### AI Layer

* OpenAI API / Compatible LLM
* Prompt Engineering

### Security

* HTTPS
* Helmet
* CORS
* Input Validation
* Rate Limiting

### Future Enhancements

* Retrieval-Augmented Generation (RAG)
* Voice Interaction
* Multi-language Support
* Push Notifications
* Mobile Application

---

# Request Flow

1. User sends a request from the React application.
2. React sends an HTTPS REST request to the Express API.
3. Express authenticates the user using JWT.
4. The request is processed by the appropriate module.
5. If AI is required, the backend sends the prompt to the LLM API.
6. The AI response is validated for safety.
7. Data is stored or retrieved from MongoDB.
8. The backend returns a JSON response.
9. React updates the UI for the user.

---

# Architecture Layers

Presentation Layer

* React UI
* User Interaction
* Form Validation

↓

Application Layer

* Express REST API
* Authentication
* Business Logic
* AI Integration

↓

Data Layer

* MongoDB
* Collections
* Data Persistence

↓

External Services

* LLM API
* Email Service
* Future RAG
