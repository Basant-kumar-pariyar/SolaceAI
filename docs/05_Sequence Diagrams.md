Sequence Diagrams

# Sequence Diagram – SD-01 User Registration

**Use Case:** UC-01 Register User

**Participants:**

* User
* React Frontend
* Node.js/Express Backend
* MongoDB Database

```
User              Frontend            Backend             Database
 |                    |                   |                    |
 | Open Register Page |                   |                    |
 |------------------->|                   |                    |
 |                    | Display Form      |                    |
 |<-------------------|                   |                    |
 |                    |                   |                    |
 | Enter Details      |                   |                    |
 |------------------->|                   |                    |
 |                    |                   |                    |
 | Click Register     |                   |                    |
 |------------------->|                   |                    |
 |                    | POST /register    |                    |
 |                    |------------------>|                    |
 |                    |                   |                    |
 |                    |                   | Validate Input     |
 |                    |                   |------------------> |
 |                    |                   |                    |
 |                    |                   | Check Email Exists |
 |                    |                   |------------------> |
 |                    |                   |                    |
 |                    |                   | Email Available    |
 |                    |                   |<------------------ |
 |                    |                   |                    |
 |                    |                   | Hash Password      |
 |                    |                   |                    |
 |                    |                   | Save User          |
 |                    |                   |------------------> |
 |                    |                   |                    |
 |                    |                   | User Saved         |
 |                    |                   |<------------------ |
 |                    |                   |                    |
 |                    | Registration OK   |                    |
 |                    |<------------------|                    |
 | Registration Successful                |                    |
 |<-------------------|                   |                    |
 |                    |                   |                    |
 | Redirect to Login  |                   |                    |
 |<-------------------|                   |                    |
```

### Description

1. User opens the registration page.
2. Frontend displays the registration form.
3. User enters registration details.
4. Frontend sends a registration request to the backend.
5. Backend validates the data.
6. Backend checks whether the email already exists.
7. Backend hashes the password.
8. Backend stores the user in MongoDB.
9. Database confirms successful storage.
10. Backend returns a success response.
11. Frontend displays a success message.
12. User is redirected to the Login page.

----------------------------------------------------------------------------------------------------------

# Sequence Diagram – SD-02 User Login

**Use Case:** UC-02 Login

**Participants:**

* User
* React Frontend
* Node.js/Express Backend
* MongoDB Database

```text
User              Frontend            Backend             Database
 |                    |                   |                    |
 | Open Login Page    |                   |                    |
 |------------------->|                   |                    |
 |                    | Display Login Form|                    |
 |<-------------------|                   |                    |
 |                    |                   |                    |
 | Enter Email &      |                   |                    |
 | Password           |                   |                    |
 |------------------->|                   |                    |
 |                    |                   |                    |
 | Click Login        |                   |                    |
 |------------------->|                   |                    |
 |                    | POST /login       |                    |
 |                    |------------------>|                    |
 |                    |                   |                    |
 |                    |                   | Validate Input     |
 |                    |                   |                    |
 |                    |                   | Find User          |
 |                    |                   |------------------> |
 |                    |                   |                    |
 |                    |                   | User Details       |
 |                    |                   |<------------------ |
 |                    |                   |                    |
 |                    |                   | Verify Password    |
 |                    |                   |                    |
 |                    |                   | Generate JWT Token |
 |                    |                   |                    |
 |                    | Login Success     |                    |
 |                    |<------------------|                    |
 | Dashboard Display  |                   |                    |
 |<-------------------|                   |                    |
 |                    |                   |                    |
```

### Description

1. User opens the Login page.
2. Frontend displays the login form.
3. User enters the registered email and password.
4. User clicks the **Login** button.
5. Frontend sends a login request to the backend.
6. Backend validates the entered credentials.
7. Backend retrieves the user record from MongoDB.
8. Backend verifies the password.
9. If the credentials are valid, the backend generates a JWT token.
10. Backend sends a successful login response to the frontend.
11. Frontend stores the JWT securely and redirects the user to the Dashboard.

----------------------------------------------------------------------------------------------------------
 
# Sequence Diagram – SD-03 Chat with AI

**Use Case:** UC-04 Chat with AI

**Participants:**

* User
* React Frontend
* Node.js/Express Backend
* LLM API
* MongoDB Database

```text
User             Frontend           Backend            LLM API           Database
 |                   |                  |                  |                  |
 | Open Chat Page    |                  |                  |                  |
 |------------------>|                  |                  |                  |
 |                   | Display Chat UI  |                  |                  |
 |<------------------|                  |                  |                  |
 |                   |                  |                  |                  |
 | Type Message      |                  |                  |                  |
 |------------------>|                  |                  |                  |
 |                   |                  |                  |                  |
 | Click Send        |                  |                  |                  |
 |------------------>|                  |                  |                  |
 |                   | POST /chat       |                  |                  |
 |                   |----------------->|                  |                  |
 |                   |                  |                  |                  |
 |                   |                  | Retrieve Chat History               |
 |                   |                  |------------------------------->      |
 |                   |                  |                                    |
 |                   |                  | Chat History                       |
 |                   |                  |<-------------------------------      |
 |                   |                  |                                    |
 |                   |                  | Send Prompt                        |
 |                   |                  |----------------->|                  |
 |                   |                  |                  |                  |
 |                   |                  |                  | Generate Reply   |
 |                   |                  |                  |                  |
 |                   |                  | AI Response      |                  |
 |                   |                  |<-----------------|                  |
 |                   |                  |                                    |
 |                   |                  | Store Conversation                 |
 |                   |                  |------------------------------->      |
 |                   |                  |                                    |
 |                   |                  | Saved Successfully                 |
 |                   |                  |<-------------------------------      |
 |                   | AI Response      |                                    |
 |                   |<-----------------|                                    |
 | Display Response  |                  |                                    |
 |<------------------|                  |                                    |
```

### Description

1. User opens the Chat page.
2. Frontend displays the chat interface.
3. User types a message and clicks **Send**.
4. Frontend sends the message to the backend.
5. Backend retrieves previous chat history from MongoDB.
6. Backend combines the user's message with the conversation history.
7. Backend sends the prompt to the LLM API.
8. The LLM API generates a supportive AI response.
9. Backend receives the AI response.
10. Backend stores both the user message and AI response in MongoDB.
11. Database confirms the conversation has been saved.
12. Backend returns the AI response to the frontend.
13. Frontend displays the response to the user.

----------------------------------------------------------------------------------------------------------
# Sequence Diagram – SD-04 Mood Tracking

**Use Case:** UC-06 Log Mood

**Participants:**

* User
* React Frontend
* Node.js/Express Backend
* MongoDB Database

```text id="1m8pqo"
User              Frontend            Backend             Database
 |                    |                   |                    |
 | Open Mood Tracker  |                   |                    |
 |------------------->|                   |                    |
 |                    | Display Mood Form |                    |
 |<-------------------|                   |                    |
 |                    |                   |                    |
 | Select Mood        |                   |                    |
 |------------------->|                   |                    |
 |                    |                   |                    |
 | Select Intensity   |                   |                    |
 |------------------->|                   |                    |
 |                    |                   |                    |
 | Add Note(Optional) |                   |                    |
 |------------------->|                   |                    |
 |                    |                   |                    |
 | Click Save         |                   |                    |
 |------------------->|                   |                    |
 |                    | POST /mood        |                    |
 |                    |------------------>|                    |
 |                    |                   |                    |
 |                    |                   | Validate Data      |
 |                    |                   |                    |
 |                    |                   | Save Mood Entry    |
 |                    |                   |------------------> |
 |                    |                   |                    |
 |                    |                   | Mood Saved         |
 |                    |                   |<------------------ |
 |                    | Mood Saved        |                    |
 |                    |<------------------|                    |
 | Success Message    |                   |                    |
 |<-------------------|                   |                    |
 |                    |                   |                    |
```

### Description

1. User opens the Mood Tracker page.
2. Frontend displays the mood logging form.
3. User selects a mood.
4. User selects the mood intensity.
5. User optionally enters a note.
6. User clicks the **Save** button.
7. Frontend sends the mood data to the backend.
8. Backend validates the mood information.
9. Backend stores the mood entry in MongoDB.
10. Database confirms successful storage.
11. Backend returns a success response.
12. Frontend displays a confirmation message to the user.

----------------------------------------------------------------------------------------------------------
# Sequence Diagram – SD-05 Journal Management

**Use Case:** UC-08 Write Journal

**Participants:**

* User
* React Frontend
* Node.js/Express Backend
* MongoDB Database

```text id="q2wt5g"
User              Frontend            Backend             Database
 |                    |                   |                    |
 | Open Journal Page  |                   |                    |
 |------------------->|                   |                    |
 |                    | Display Journal   |                    |
 |<-------------------|                   |                    |
 |                    |                   |                    |
 | Write Journal      |                   |                    |
 |------------------->|                   |                    |
 |                    |                   |                    |
 | Click Save         |                   |                    |
 |------------------->|                   |                    |
 |                    | POST /journal     |                    |
 |                    |------------------>|                    |
 |                    |                   |                    |
 |                    |                   | Validate Entry     |
 |                    |                   |                    |
 |                    |                   | Save Journal       |
 |                    |                   |------------------> |
 |                    |                   |                    |
 |                    |                   | Journal Saved      |
 |                    |                   |<------------------ |
 |                    | Save Successful   |                    |
 |                    |<------------------|                    |
 | Success Message    |                   |                    |
 |<-------------------|                   |                    |
 |                    |                   |                    |
```

### Description

1. User opens the **Journal** page.
2. Frontend displays the journal writing form.
3. User enters the journal title (optional) and journal content.
4. User clicks the **Save** button.
5. Frontend sends the journal data to the backend.
6. Backend validates the journal content.
7. Backend stores the journal entry in MongoDB.
8. Database confirms the journal has been saved.
9. Backend returns a success response.
10. Frontend displays a **"Journal Saved Successfully"** message to the user.
11. The saved journal becomes available in **Journal History** and on the **Dashboard**.

----------------------------------------------------------------------------------------------------------
# Sequence Diagram – SD-06 Crisis Detection

**Use Case:** UC-13 Detect Crisis Language & UC-14 Provide Crisis Resources

**Participants:**

* User
* React Frontend
* Node.js/Express Backend
* LLM API
* MongoDB Database

```text id="g9v4xm"
User             Frontend           Backend            LLM API           Database
 |                   |                  |                  |                  |
 | Send Message      |                  |                  |                  |
 |------------------>|                  |                  |                  |
 |                   | POST /chat       |                  |                  |
 |                   |----------------->|                  |                  |
 |                   |                  |                  |                  |
 |                   |                  | Send Prompt      |                  |
 |                   |                  |----------------->|                  |
 |                   |                  |                  |                  |
 |                   |                  |                  | Analyze Message  |
 |                   |                  |                  | Detect Crisis?   |
 |                   |                  |                  |                  |
 |                   |                  | Crisis Detected  |                  |
 |                   |                  |<-----------------|                  |
 |                   |                  |                  |                  |
 |                   |                  | Save Flagged Chat                  |
 |                   |                  |------------------------------->      |
 |                   |                  |                                    |
 |                   |                  | Saved Successfully                 |
 |                   |                  |<-------------------------------      |
 |                   |                  |                                    |
 |                   | Crisis Guidance |                                    |
 |                   |<-----------------|                                    |
 | View Crisis       |                  |                                    |
 | Resources         |                  |                                    |
 |<------------------|                  |                                    |
```

### Description

1. User sends a message through the chat interface.
2. Frontend forwards the message to the backend.
3. Backend sends the conversation context to the LLM API.
4. The LLM API analyzes the message for crisis-related language.
5. If high-risk language is detected, the LLM returns a crisis flag along with a safe, supportive response.
6. Backend stores the flagged conversation in MongoDB for review (if implemented).
7. Backend sends crisis guidance and emergency resource information to the frontend.
8. Frontend displays the supportive response and crisis resources to the user.
9. The user can continue the conversation or leave the application.

----------------------------------------------------------------------------------------------------------
# Sequence Diagram – SD-07 Manage Users (Admin)

**Use Case:** UC-15 Manage Users

**Participants:**

* Administrator
* React Frontend
* Node.js/Express Backend
* MongoDB Database

```text id="r7n3kp"
Administrator      Frontend            Backend             Database
      |                 |                   |                    |
      | Open Admin      |                   |                    |
      | Dashboard       |                   |                    |
      |---------------->|                   |                    |
      |                 | Display Dashboard |                    |
      |<----------------|                   |                    |
      |                 |                   |                    |
      | Open User       |                   |                    |
      | Management      |                   |                    |
      |---------------->|                   |                    |
      |                 | GET /users        |                    |
      |                 |------------------>|                    |
      |                 |                   |                    |
      |                 |                   | Retrieve Users     |
      |                 |                   |------------------> |
      |                 |                   |                    |
      |                 |                   | User List          |
      |                 |                   |<------------------ |
      |                 | User List         |                    |
      |                 |<------------------|                    |
      | View Users      |                   |                    |
      |<----------------|                   |                    |
      |                 |                   |                    |
      | Update User     |                   |                    |
      | Status          |                   |                    |
      |---------------->|                   |                    |
      |                 | PUT /users/{id}   |                    |
      |                 |------------------>|                    |
      |                 |                   |                    |
      |                 |                   | Update User        |
      |                 |                   |------------------> |
      |                 |                   |                    |
      |                 |                   | Update Success     |
      |                 |                   |<------------------ |
      |                 | Update Success    |                    |
      |                 |<------------------|                    |
      | Success Message |                   |                    |
      |<----------------|                   |                    |
```

### Description

1. Administrator logs in and opens the **Admin Dashboard**.
2. Administrator navigates to the **Manage Users** page.
3. Frontend sends a request to the backend to retrieve all registered users.
4. Backend fetches the user data from MongoDB.
5. Database returns the user list.
6. Backend sends the user list to the frontend.
7. Frontend displays the users.
8. Administrator updates a user's status (e.g., activate or deactivate).
9. Frontend sends the update request to the backend.
10. Backend updates the user's information in MongoDB.
11. Database confirms the update.
12. Backend returns a success response.
13. Frontend displays **"User Updated Successfully."**
