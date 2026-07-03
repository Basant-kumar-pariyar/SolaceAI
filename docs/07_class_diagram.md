# UML Class Diagram

## Project: MindEase AI – Mental Wellness Support Chatbot

---

## Class: User

### Attributes

* userId : String
* fullName : String
* email : String
* passwordHash : String
* profileImage : String
* dateOfBirth : Date
* gender : String
* accountStatus : String
* createdAt : Date
* updatedAt : Date

### Methods

* register()
* login()
* logout()
* resetPassword()
* updateProfile()

---

## Class: UserProfile

### Attributes

* profileId : String
* preferredLanguage : String
* notificationEnabled : Boolean
* themePreference : String
* emergencyContact : String

### Methods

* updatePreferences()
* changeTheme()
* updateEmergencyContact()

---

## Class: ChatSession

### Attributes

* sessionId : String
* sessionTitle : String
* sessionStatus : String
* createdAt : Date
* updatedAt : Date

### Methods

* createSession()
* endSession()
* deleteSession()
* getMessages()

---

## Class: Message

### Attributes

* messageId : String
* sender : String
* messageContent : Text
* messageType : String
* crisisDetected : Boolean
* createdAt : Date

### Methods

* sendMessage()
* receiveMessage()
* detectCrisis()
* saveMessage()

---

## Class: Mood

### Attributes

* moodId : String
* mood : String
* intensity : Integer
* note : String
* recordedAt : Date

### Methods

* logMood()
* updateMood()
* deleteMood()
* getMoodHistory()

---

## Class: Journal

### Attributes

* journalId : String
* title : String
* content : Text
* aiSummary : String
* createdAt : Date
* updatedAt : Date

### Methods

* createJournal()
* editJournal()
* deleteJournal()
* summarizeJournal()

---

## Class: CrisisAlert

### Attributes

* alertId : String
* severity : String
* status : String
* detectedAt : Date

### Methods

* analyzeMessage()
* createAlert()
* notifyUser()
* markResolved()

---

## Class: WellnessResource

### Attributes

* resourceId : String
* title : String
* category : String
* description : String
* url : String

### Methods

* addResource()
* updateResource()
* deleteResource()
* getResources()

---

## Class: Admin

### Attributes

* adminId : String
* name : String
* email : String
* passwordHash : String
* role : String

### Methods

* manageUsers()
* reviewAlerts()
* manageResources()
* viewAnalytics()

---

## Class: ReviewLog

### Attributes

* reviewId : String
* reviewStatus : String
* remarks : String
* reviewedAt : Date

### Methods

* reviewAlert()
* updateStatus()
* addRemarks()

---

# Relationships

User "1" -------- "1" UserProfile

User "1" -------- "*" ChatSession

ChatSession "1" -------- "*" Message

User "1" -------- "*" Mood

User "1" -------- "*" Journal

Message "1" -------- "0..1" CrisisAlert

Admin "1" -------- "*" ReviewLog

ReviewLog "*" -------- "1" CrisisAlert

Admin "1" -------- "*" WellnessResource
