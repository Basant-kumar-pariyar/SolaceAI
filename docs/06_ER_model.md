# Complete Entity Relationship (ER) Diagram

## Project: MindEase AI – Mental Wellness Support Chatbot

---

# Entity 1: User

**Primary Key (PK):** userId

### Attributes

* userId (PK)
* fullName
* email
* passwordHash
* profileImage
* dateOfBirth (Optional)
* gender (Optional)
* accountStatus
* createdAt
* updatedAt

---

# Entity 2: UserProfile

**Primary Key (PK):** profileId

**Foreign Key (FK):** userId

### Attributes

* profileId (PK)
* userId (FK)
* preferredLanguage
* notificationEnabled
* themePreference
* emergencyContact (Optional)

---

# Entity 3: ChatSession

**Primary Key (PK):** sessionId

**Foreign Key (FK):** userId

### Attributes

* sessionId (PK)
* userId (FK)
* sessionTitle
* sessionStatus
* createdAt
* updatedAt

---

# Entity 4: Message

**Primary Key (PK):** messageId

**Foreign Key (FK):** sessionId

### Attributes

* messageId (PK)
* sessionId (FK)
* sender
* messageContent
* messageType
* crisisDetected
* createdAt

---

# Entity 5: Mood

**Primary Key (PK):** moodId

**Foreign Key (FK):** userId

### Attributes

* moodId (PK)
* userId (FK)
* mood
* intensity
* note
* recordedAt

---

# Entity 6: Journal

**Primary Key (PK):** journalId

**Foreign Key (FK):** userId

### Attributes

* journalId (PK)
* userId (FK)
* title
* content
* aiSummary
* createdAt
* updatedAt

---

# Entity 7: CrisisAlert

**Primary Key (PK):** alertId

**Foreign Key (FK):**

* messageId
* userId

### Attributes

* alertId (PK)
* messageId (FK)
* userId (FK)
* severity
* status
* detectedAt

---

# Entity 8: WellnessResource

**Primary Key (PK):** resourceId

### Attributes

* resourceId (PK)
* title
* category
* description
* url
* createdAt

---

# Entity 9: Admin

**Primary Key (PK):** adminId

### Attributes

* adminId (PK)
* name
* email
* passwordHash
* role
* createdAt

---

# Entity 10: ReviewLog

**Primary Key (PK):** reviewId

**Foreign Key (FK):**

* adminId
* alertId

### Attributes

* reviewId (PK)
* adminId (FK)
* alertId (FK)
* reviewStatus
* remarks
* reviewedAt

----------------------------------------------------------------------------------------------------------


Complete Relationships
User
│
├──────────────1:M──────────────► ChatSession
│                                   │
│                                   │1:M
│                                   ▼
│                               Message
│                                   │
│                                   │1:0..1
│                                   ▼
│                              CrisisAlert
│                                   ▲
│                                   │
│                            User 1:M
│
├──────────────1:M──────────────► Mood
│
├──────────────1:M──────────────► Journal
│
└──────────────1:1──────────────► UserProfile

Admin
│
├──────────────1:M──────────────► WellnessResource
│
└──────────────1:M──────────────► ReviewLog
                                     │
                                     │M:1
                                     ▼
                               CrisisAlert

                            
------------------------------------------------------------------------------------------------------

Complete Database Tables

| Table            | Purpose                    |
| ---------------- | -------------------------- |
| User             | Authentication and account |
| UserProfile      | User preferences           |
| ChatSession      | One chat conversation      |
| Message          | Individual chat messages   |
| Mood             | Daily mood tracking        |
| Journal          | Personal journal entries   |
| CrisisAlert      | Crisis detection records   |
| WellnessResource | Self-help resources        |
| Admin            | Administrator accounts     |
| ReviewLog        | Admin review history       |


----------------------------------------------------------------------------------------------------------