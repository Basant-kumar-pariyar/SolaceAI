# Database Design

## Project: MindEase AI – AI Mental Wellness Support Chatbot

---

# Database

MongoDB

---

# ODM

Mongoose

---

# Collection 1: users

| Field         | Data Type | Required | Unique | Default  |
| ------------- | --------- | -------- | ------ | -------- |
| _id           | ObjectId  | Yes      | Yes    | Auto     |
| fullName      | String    | Yes      | No     | -        |
| email         | String    | Yes      | Yes    | -        |
| passwordHash  | String    | Yes      | No     | -        |
| profileImage  | String    | No       | No     | null     |
| dateOfBirth   | Date      | No       | No     | null     |
| gender        | String    | No       | No     | null     |
| accountStatus | String    | Yes      | No     | Active   |
| createdAt     | Date      | Yes      | No     | Date.now |
| updatedAt     | Date      | Yes      | No     | Date.now |

---

# Collection 2: userProfiles

| Field               | Data Type           | Required |
| ------------------- | ------------------- | -------- |
| _id                 | ObjectId            | Yes      |
| userId              | ObjectId (Ref User) | Yes      |
| preferredLanguage   | String              | Yes      |
| notificationEnabled | Boolean             | Yes      |
| themePreference     | String              | Yes      |
| emergencyContact    | String              | No       |

---

# Collection 3: chatSessions

| Field         | Data Type           | Required |
| ------------- | ------------------- | -------- |
| _id           | ObjectId            | Yes      |
| userId        | ObjectId (Ref User) | Yes      |
| sessionTitle  | String              | Yes      |
| sessionStatus | String              | Yes      |
| createdAt     | Date                | Yes      |
| updatedAt     | Date                | Yes      |

---

# Collection 4: messages

| Field          | Data Type                  | Required |
| -------------- | -------------------------- | -------- |
| _id            | ObjectId                   | Yes      |
| sessionId      | ObjectId (Ref ChatSession) | Yes      |
| sender         | String                     | Yes      |
| messageContent | String                     | Yes      |
| messageType    | String                     | Yes      |
| crisisDetected | Boolean                    | Yes      |
| createdAt      | Date                       | Yes      |

---

# Collection 5: moods

| Field      | Data Type           | Required |
| ---------- | ------------------- | -------- |
| _id        | ObjectId            | Yes      |
| userId     | ObjectId (Ref User) | Yes      |
| mood       | String              | Yes      |
| intensity  | Number              | Yes      |
| note       | String              | No       |
| recordedAt | Date                | Yes      |

---

# Collection 6: journals

| Field     | Data Type           | Required |
| --------- | ------------------- | -------- |
| _id       | ObjectId            | Yes      |
| userId    | ObjectId (Ref User) | Yes      |
| title     | String              | Yes      |
| content   | String              | Yes      |
| aiSummary | String              | No       |
| createdAt | Date                | Yes      |
| updatedAt | Date                | Yes      |

---

# Collection 7: crisisAlerts

| Field      | Data Type              | Required |
| ---------- | ---------------------- | -------- |
| _id        | ObjectId               | Yes      |
| messageId  | ObjectId (Ref Message) | Yes      |
| userId     | ObjectId (Ref User)    | Yes      |
| severity   | String                 | Yes      |
| status     | String                 | Yes      |
| detectedAt | Date                   | Yes      |

---

# Collection 8: wellnessResources

| Field       | Data Type | Required |
| ----------- | --------- | -------- |
| _id         | ObjectId  | Yes      |
| title       | String    | Yes      |
| category    | String    | Yes      |
| description | String    | Yes      |
| url         | String    | Yes      |
| createdAt   | Date      | Yes      |

---

# Collection 9: admins

| Field        | Data Type | Required |
| ------------ | --------- | -------- |
| _id          | ObjectId  | Yes      |
| name         | String    | Yes      |
| email        | String    | Yes      |
| passwordHash | String    | Yes      |
| role         | String    | Yes      |
| createdAt    | Date      | Yes      |

---

# Collection 10: reviewLogs

| Field        | Data Type                  | Required |
| ------------ | -------------------------- | -------- |
| _id          | ObjectId                   | Yes      |
| adminId      | ObjectId (Ref Admin)       | Yes      |
| alertId      | ObjectId (Ref CrisisAlert) | Yes      |
| reviewStatus | String                     | Yes      |
| remarks      | String                     | No       |
| reviewedAt   | Date                       | Yes      |

---

# Database Relationships

User → UserProfile (1:1)

User → ChatSession (1:M)

ChatSession → Message (1:M)

User → Mood (1:M)

User → Journal (1:M)

Message → CrisisAlert (1:0..1)

Admin → ReviewLog (1:M)

Admin → WellnessResource (1:M)

ReviewLog → CrisisAlert (M:1)

---

# Database Indexes

Users

* email (Unique)

Chat Sessions

* userId

Messages

* sessionId

Moods

* userId

Journals

* userId

Crisis Alerts

* userId
* messageId

Review Logs

* adminId
* alertId

---

# Validation Rules

* Email must be unique.
* Password must be hashed.
* Mood intensity must be between 1 and 10.
* Journal content cannot be empty.
* Message content cannot be empty.
* Crisis severity must be Low, Medium, or High.
* Account status must be Active, Inactive, or Blocked.
