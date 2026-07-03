1 .Recommended Activity Diagrams
    User Registration
    User Login
    Chat with AI
    Mood Tracking
    Journal Management
    Crisis Detection
    Admin Manage Users

Activity Diagram 1 – User Registration
 Start
   │
   ▼
Open Registration Page
   │
   ▼
Enter User Details
   │
   ▼
Validate Input
   │
   ├── Invalid?
   │      │
   │      ▼
   │  Show Error
   │      │
   │      └──────► Enter Details Again
   │
   ▼
Email Already Exists?
   │
   ├── Yes
   │      │
   │      ▼
   │ Show "Email Exists"
   │      │
   │      └────► Enter Another Email
   │
   ▼
Hash Password
   │
   ▼
Save User
   │
   ▼
Registration Successful
   │
   ▼
Redirect to Login
   │
   ▼
End
----------------------------------------------------------------------------------------------------------
Activity Diagram 2 – Login
Start
   │
   ▼
Open Login Page
   │
   ▼
Enter Email & Password
   │
   ▼
Validate Credentials
   │
   ├── Invalid
   │      │
   │      ▼
   │ Show Error
   │      │
   │      └──► Login Again
   │
   ▼
Generate JWT
   │
   ▼
Open Dashboard
   │
   ▼
End
----------------------------------------------------------------------------------------------------------
Activity Diagram 3 – Chat with AI

Start
   │
   ▼
Open Chat
   │
   ▼
Type Message
   │
   ▼
Send Message
   │
   ▼
Store User Message
   │
   ▼
Send Prompt to AI
   │
   ▼
Generate AI Response
   │
   ▼
Detect Crisis Language?
   │
   ├── Yes
   │      │
   │      ▼
   │ Show Crisis Resources
   │
   ▼
Display AI Response
   │
   ▼
Save Chat History
   │
   ▼
Continue Chat?
   │
   ├── Yes ─────► Type Message
   │
   ▼
End
----------------------------------------------------------------------------------------------------------
Activity Diagram 4 – Mood Tracking

Start
   │
   ▼
Open Mood Tracker
   │
   ▼
Select Mood
   │
   ▼
Select Intensity
   │
   ▼
Add Note (Optional)
   │
   ▼
Save Mood
   │
   ▼
Store in Database
   │
   ▼
Update Dashboard
   │
   ▼
End
----------------------------------------------------------------------------------------------------------
Activity Diagram 5 – Journal Management

Start
   │
   ▼
Open Journal
   │
   ▼
Write Entry
   │
   ▼
Save Journal
   │
   ▼
Validate Content
   │
   ▼
Store Journal
   │
   ▼
Show Success
   │
   ▼
End
----------------------------------------------------------------------------------------------------------
Activity Diagram 6 – Crisis Detection

Start
   │
   ▼
Receive User Message
   │
   ▼
Analyze Message
   │
   ▼
High-Risk Language?
   │
   ├── No
   │      │
   │      ▼
   │ Continue Conversation
   │
   └── Yes
          │
          ▼
Flag Conversation
          │
          ▼
Display Crisis Resources
          │
          ▼
Suggest Professional Help
          │
          ▼
Continue/End Chat
          │
          ▼
End
----------------------------------------------------------------------------------------------------------
Activity Diagram 7 – Manage Users (Admin)
Start
   │
   ▼
Admin Login
   │
   ▼
Open User Management
   │
   ▼
View Users
   │
   ▼
Select User
   │
   ▼
Edit/Activate/Deactivate
   │
   ▼
Save Changes
   │
   ▼
Update Database
   │
   ▼
Show Success
   │
   ▼
End
