| Use Case ID | Use Case Name                              |
| ----------- | ------------------------------------------ |
| UC-01       | Register User                              |
| UC-02       | Login                                      |
| UC-03       | Reset Password                             |
| UC-04       | Chat with AI                               |
| UC-05       | View Chat History                          |
| UC-06       | Log Mood                                   |
| UC-07       | View Mood Trends                           |
| UC-08       | Write Journal                              |
| UC-09       | View Journal History                       |
| UC-10       | View Dashboard                             |
| UC-11       | Manage Profile                             |
| UC-12       | Logout                                     |
| UC-13       | Detect Crisis Language                     |
| UC-14       | Provide Crisis Resources                   |
| UC-15       | Manage Users                               |
| UC-16       | View Analytics                             |
| UC-17       | Manage Wellness Resources                  |
| UC-18       | Review Flagged Conversations               |
| UC-19       | Generate AI Response *(Included Use Case)* |
| UC-20       | Store Chat History *(Included Use Case)*   |


Use Case ID:
UC-01

Use Case Name:
Register User

Primary Actor:
Guest

Goal:
Create a new user account.

Preconditions:
- User is not logged in.
- User has a valid email address.

Trigger:
User clicks the "Register" button.

Main Success Scenario:
1. User opens the registration page.
2. User enters name, email, and password.
3. User clicks "Create Account".
4. System validates the information.
5. System creates the account.
6. System displays "Registration Successful".
7. User is redirected to the Login page.

Alternative Flow(s):
- If the email already exists, the system displays "Email already registered."

Exception Flow(s):
- If the server is unavailable, the system displays "Something went wrong. Please try again later."

Postconditions:
- A new user account is created successfully.
- User can log in using the registered email and password.
---------------------------------------------------------------------------------------------------------
Use Case ID:
UC-02

Use Case Name:
Login

Primary Actor:
Registered User

Goal:
Access the MindEase AI system securely.

Preconditions:

* User has already registered an account.
* User is logged out.
* User has a valid email and password.

Trigger:
User clicks the "Login" button.

Main Success Scenario:

1. User opens the Login page.
2. User enters email and password.
3. User clicks "Login".
4. System validates the credentials.
5. System authenticates the user.
6. System creates a user session (JWT).
7. User is redirected to the Dashboard.

Alternative Flow(s):

* If the email or password is incorrect, the system displays "Invalid email or password."
* If the user selects "Forgot Password", the system redirects to the Reset Password page.

Exception Flow(s):

* If the server is unavailable, the system displays "Unable to login. Please try again later."
* If the database connection fails, the system displays an appropriate error message.

Postconditions:

* User is successfully logged in.
* User can access all authorized features of the system.
----------------------------------------------------------------------------------------------------------
Use Case ID:
UC-03

Use Case Name:
Reset Password

Primary Actor:
Registered User

Goal:
Reset the account password to regain access.

Preconditions:

* User has a registered account.
* User can access the registered email address.

Trigger:
User clicks the "Forgot Password" link on the Login page.

Main Success Scenario:

1. User opens the Reset Password page.
2. User enters the registered email address.
3. User clicks "Send Reset Link".
4. System verifies that the email exists.
5. System sends a password reset link or verification code to the user's email.
6. User opens the reset link.
7. User enters a new password and confirms it.
8. User clicks "Reset Password".
9. System validates the new password.
10. System updates the password securely.
11. System displays "Password Reset Successful".
12. User is redirected to the Login page.

Alternative Flow(s):

* If the entered email is not registered, the system displays "Email not found."
* If the user enters a weak password, the system asks the user to choose a stronger password.

Exception Flow(s):

* If the reset link has expired, the system displays "Reset link has expired. Please request a new one."
* If the email service is unavailable, the system displays "Unable to send reset link. Please try again later."

Postconditions:

* User's password is updated successfully.
* User can log in using the new password.
----------------------------------------------------------------------------------------------------------
Use Case ID: UC-04

Use Case Name: Chat with AI

Primary Actor:
Registered User

Goal:
Have a supportive conversation with the AI mental wellness assistant.

Preconditions:

* User is logged in.
* Internet connection is available.
* AI service is available.

Trigger:
User opens the Chat page and sends a message.

Main Success Scenario:

1. User opens the Chat page.
2. User types a message.
3. User clicks the "Send" button.
4. System validates the message.
5. System sends the message to the AI service.
6. AI generates a supportive response.
7. System displays the AI response.
8. System saves the conversation to chat history.
9. If needed, the system checks the message for crisis-related language.
10. User continues the conversation or exits the chat.

Alternative Flow(s):

* If the user submits an empty message, the system displays "Please enter a message."
* If the AI takes longer to respond, the system displays a loading indicator until the response is received.

Exception Flow(s):

* If the AI service is unavailable, the system displays "AI service is currently unavailable. Please try again later."
* If the internet connection is lost, the system displays "Connection lost. Please check your internet connection."

Postconditions:

* The conversation is displayed to the user.
* The chat history is saved successfully.
* If crisis-related language is detected, the system provides appropriate crisis guidance and resources.
----------------------------------------------------------------------------------------------------------
Use Case ID:
UC-05

Use Case Name:
View Chat History

Primary Actor:
Registered User

Goal:
View previous conversations with the AI assistant.

Preconditions:

* User is logged in.
* At least one chat conversation exists in the user's account.

Trigger:
User clicks the "Chat History" option from the dashboard or chat page.

Main Success Scenario:

1. User opens the Chat History page.
2. System retrieves the user's previous conversations from the database.
3. System displays the list of chat sessions.
4. User selects a conversation.
5. System displays all messages in chronological order.
6. User reviews the conversation.
7. User returns to the dashboard or chat page.

Alternative Flow(s):

* If multiple chat sessions exist, the user can select any session to view.
* User can search or filter chat history (if this feature is implemented).

Exception Flow(s):

* If no chat history exists, the system displays "No chat history available."
* If the database is unavailable, the system displays "Unable to load chat history. Please try again later."

Postconditions:

* The selected conversation is displayed successfully.
* No changes are made to the stored chat history.
----------------------------------------------------------------------------------------------------------

Use Case ID:
UC-06

Use Case Name:
Log Mood

Primary Actor:
Registered User

Goal:
Record the user's current mood for daily wellness tracking.

Preconditions:

* User is logged in.
* User has access to the Mood Tracker page.

Trigger:
User clicks the "Log Mood" button.

Main Success Scenario:

1. User opens the Mood Tracker page.
2. System displays available mood options (e.g., Happy, Calm, Sad, Anxious, Stressed).
3. User selects a mood.
4. User selects the mood intensity.
5. User optionally adds a note.
6. User clicks "Save Mood".
7. System validates the entered information.
8. System stores the mood entry in the database.
9. System displays "Mood Logged Successfully."

Alternative Flow(s):

* User saves the mood without adding a note.
* User updates today's mood entry if editing is allowed.

Exception Flow(s):

* If the user does not select a mood, the system displays "Please select a mood."
* If the database is unavailable, the system displays "Unable to save mood. Please try again later."

Postconditions:

* The mood entry is successfully saved.
* The new mood is available for mood history and dashboard analytics.
----------------------------------------------------------------------------------------------------------

Use Case ID:
UC-07

Use Case Name:
View Mood Trends

Primary Actor:
Registered User

Goal:
View mood history and emotional trends over time.

Preconditions:

* User is logged in.
* At least one mood entry exists.

Trigger:
User opens the "Mood Trends" section from the Dashboard.

Main Success Scenario:

1. User opens the Mood Trends page.
2. System retrieves the user's mood history from the database.
3. System generates charts and graphs based on the recorded mood entries.
4. System displays mood trends over a selected time period (e.g., weekly or monthly).
5. User reviews the mood patterns and insights.
6. User returns to the Dashboard or another page.

Alternative Flow(s):

* User changes the time period (daily, weekly, monthly) to view different mood trends.
* User views detailed information for a specific mood entry.

Exception Flow(s):

* If no mood data is available, the system displays "No mood records found."
* If the database is unavailable, the system displays "Unable to load mood trends. Please try again later."

Postconditions:

* The user successfully views mood history and trend analysis.
* No changes are made to the stored mood data.
----------------------------------------------------------------------------------------------------------
Use Case ID:
UC-08

Use Case Name:
Write Journal

Primary Actor:
Registered User

Goal:
Create and save a personal journal entry.

Preconditions:

* User is logged in.
* User has access to the Journal page.

Trigger:
User clicks the "New Journal Entry" button.

Main Success Scenario:

1. User opens the Journal page.
2. System displays a journal entry form.
3. User enters a title.
4. User writes the journal content.
5. User clicks the "Save Journal" button.
6. System validates the entered information.
7. System stores the journal entry in the database.
8. System displays "Journal Saved Successfully."
9. The new journal entry appears in the user's journal history.

Alternative Flow(s):

* User saves the journal without entering a title (if titles are optional).
* User edits the journal entry before saving.

Exception Flow(s):

* If the journal content is empty, the system displays "Journal content cannot be empty."
* If the database is unavailable, the system displays "Unable to save the journal. Please try again later."

Postconditions:

* The journal entry is successfully saved.
* The entry is available in the user's journal history and dashboard.
----------------------------------------------------------------------------------------------------------
Use Case ID:
UC-09

Use Case Name:
View Journal History

Primary Actor:
Registered User

Goal:
View previously saved journal entries.

Preconditions:

* User is logged in.
* At least one journal entry exists.

Trigger:
User opens the "Journal History" page.

Main Success Scenario:

1. User opens the Journal History page.
2. System retrieves all journal entries associated with the user.
3. System displays the journal entries in chronological order.
4. User selects a journal entry.
5. System displays the complete journal entry.
6. User reviews the journal content.
7. User returns to the Journal page or Dashboard.

Alternative Flow(s):

* User searches for a journal entry by title or date (if search is implemented).
* User sorts journal entries by newest or oldest.

Exception Flow(s):

* If no journal entries are available, the system displays "No journal entries found."
* If the database is unavailable, the system displays "Unable to load journal history. Please try again later."

Postconditions:

* The selected journal entry is displayed successfully.
* No changes are made to the stored journal entries.
----------------------------------------------------------------------------------------------------------
Use Case ID:
UC-10

Use Case Name:
View Dashboard

Primary Actor:
Registered User

Goal:
View a summary of personal wellness activities and recent progress.

Preconditions:

* User is logged in.
* User has at least one activity (chat, mood entry, or journal entry).

Trigger:
User opens the Dashboard after logging in or clicks the "Dashboard" menu.

Main Success Scenario:

1. User opens the Dashboard.
2. System retrieves the user's recent activities.
3. System displays mood trend charts.
4. System displays journaling streaks.
5. System displays recent chat and journal activities.
6. System displays quick navigation to Chat, Mood Tracker, Journal, and Profile.
7. User reviews the information and navigates to another feature if needed.

Alternative Flow(s):

* If the user is new and has no activity, the system displays a welcome message with options to start chatting, log a mood, or write a journal.
* User refreshes the Dashboard to view the latest information.

Exception Flow(s):

* If the dashboard data cannot be loaded, the system displays "Unable to load dashboard. Please try again later."
* If the database connection fails, the system displays an appropriate error message.

Postconditions:

* The user successfully views the latest wellness information and system summary.
* No user data is modified.
----------------------------------------------------------------------------------------------------------
Use Case ID:
UC-11

Use Case Name:
Manage Profile

Primary Actor:
Registered User

Goal:
View and update personal profile information.

Preconditions:

* User is logged in.
* User has a registered account.

Trigger:
User clicks the "Profile" option from the Dashboard or navigation menu.

Main Success Scenario:

1. User opens the Profile page.
2. System displays the current profile information.
3. User updates one or more profile fields (e.g., name, profile picture, password, preferences).
4. User clicks the "Save Changes" button.
5. System validates the entered information.
6. System updates the profile in the database.
7. System displays "Profile Updated Successfully."

Alternative Flow(s):

* User updates only specific fields (e.g., name or profile picture).
* User cancels the changes, and the system keeps the existing profile information.

Exception Flow(s):

* If the entered information is invalid, the system displays the appropriate validation message.
* If the database is unavailable, the system displays "Unable to update profile. Please try again later."

Postconditions:

* The updated profile information is saved successfully.
* Future sessions use the updated profile details.
----------------------------------------------------------------------------------------------------------
Use Case ID:
UC-12

Use Case Name:
Logout

Primary Actor:
Registered User

Goal:
Securely end the current user session.

Preconditions:

* User is logged in.

Trigger:
User clicks the "Logout" button.

Main Success Scenario:

1. User clicks the "Logout" option.
2. System asks for confirmation (optional).
3. User confirms the logout request.
4. System invalidates the user's session/JWT token.
5. System clears authentication data from the browser.
6. System redirects the user to the Login or Home page.
7. System displays "Logged out successfully."

Alternative Flow(s):

* If confirmation is enabled and the user selects "Cancel," the system returns the user to the previous page without logging out.

Exception Flow(s):

* If the logout request fails due to a server issue, the system clears the local session and displays "Logout completed locally. Please log in again if needed."

Postconditions:

* The user session is terminated.
* Protected pages can no longer be accessed without logging in again.
----------------------------------------------------------------------------------------------------------
Use Case ID:
UC-13

Use Case Name:
Detect Crisis Language

Primary Actor:
System (AI Service)

Goal:
Identify messages that may indicate a mental health crisis and initiate appropriate safety guidance.

Preconditions:

* User is logged in.
* User has sent a message to the AI.
* AI response generation is in progress.

Trigger:
The system receives a user's chat message.

Main Success Scenario:

1. System receives the user's message.
2. System analyzes the message for crisis-related keywords or high-risk language.
3. System determines whether the message indicates a potential crisis.
4. If high-risk language is detected, the system flags the conversation.
5. System initiates the "Provide Crisis Resources" use case.
6. The AI responds with supportive language while emphasizing the importance of seeking professional help.

Alternative Flow(s):

* If no crisis-related language is detected, the system continues the normal AI conversation.
* If the message is unclear, the AI asks supportive follow-up questions without making assumptions.

Exception Flow(s):

* If the crisis detection service is unavailable, the system continues the conversation using general safety guidelines.
* If message analysis fails, the system logs the error and continues processing without interrupting the user.

Postconditions:

* The user's message is analyzed successfully.
* If a potential crisis is detected, appropriate safety guidance is initiated.
* The conversation status is updated for future reference.

----------------------------------------------------------------------------------------------------------
Use Case ID:
UC-14

Use Case Name:
Provide Crisis Resources

Primary Actor:
System (AI Service)

Goal:
Provide appropriate safety guidance and crisis resources when high-risk language is detected.

Preconditions:

* The "Detect Crisis Language" use case has identified potential high-risk language.
* User is engaged in an AI conversation.

Trigger:
The system detects a potential crisis during message analysis.

Main Success Scenario:

1. System identifies a high-risk message.
2. System pauses the normal conversation flow.
3. System displays a supportive and empathetic response.
4. System encourages the user to contact a trusted family member, friend, or mental health professional.
5. System provides relevant crisis helpline or emergency resource information.
6. System encourages the user to seek immediate help if they are in immediate danger.
7. User acknowledges the guidance and continues or ends the conversation.

Alternative Flow(s):

* If the detected risk level is low or moderate, the system provides general wellness resources instead of emergency guidance.
* User chooses to continue the conversation after viewing the resources.

Exception Flow(s):

* If crisis resources cannot be loaded, the system displays a generic safety message encouraging the user to contact local emergency services or a trusted person.
* If the AI service is temporarily unavailable, the system displays an appropriate error message while maintaining user safety guidance.

Postconditions:

* Crisis guidance and appropriate resources are presented to the user.
* The conversation is marked as containing a potential crisis event for future reference.

----------------------------------------------------------------------------------------------------------
Use Case ID:
UC-15

Use Case Name:
Manage Users

Primary Actor:
Administrator

Goal:
Manage user accounts to ensure proper system administration.

Preconditions:

* Administrator is logged in.
* Administrator has permission to manage users.

Trigger:
Administrator clicks the "Manage Users" option from the Admin Dashboard.

Main Success Scenario:

1. Administrator opens the User Management page.
2. System retrieves the list of registered users.
3. System displays user details.
4. Administrator searches or selects a user.
5. Administrator views the selected user's information.
6. Administrator performs an administrative action (e.g., deactivate, activate, or update user status).
7. System validates the action.
8. System updates the user's information in the database.
9. System displays "User Updated Successfully."

Alternative Flow(s):

* Administrator searches users by name or email.
* Administrator filters users based on account status (Active/Inactive).

Exception Flow(s):

* If the selected user does not exist, the system displays "User not found."
* If the database is unavailable, the system displays "Unable to retrieve or update user information. Please try again later."

Postconditions:

* User information is updated successfully.
* The changes are reflected in the system immediately.

----------------------------------------------------------------------------------------------------------
Use Case ID:
UC-16

Use Case Name:
View Analytics

Primary Actor:
Administrator

Goal:
View anonymized system analytics and usage statistics.

Preconditions:

* Administrator is logged in.
* Administrator has permission to access analytics data.

Trigger:
Administrator clicks the "Analytics" option from the Admin Dashboard.

Main Success Scenario:

1. Administrator opens the Analytics page.
2. System retrieves anonymized usage data from the database.
3. System generates charts and reports.
4. System displays statistics such as total users, active users, mood trends, chat sessions, and journal activity.
5. Administrator reviews the analytics.
6. Administrator returns to the Admin Dashboard.

Alternative Flow(s):

* Administrator filters analytics by date range.
* Administrator exports the analytics report (if export functionality is implemented).

Exception Flow(s):

* If no analytics data is available, the system displays "No analytics data available."
* If the database is unavailable, the system displays "Unable to load analytics. Please try again later."

Postconditions:

* Analytics are displayed successfully.
* No user data is modified.

----------------------------------------------------------------------------------------------------------
Use Case ID:
UC-17

Use Case Name:
Manage Wellness Resources

Primary Actor:
Administrator

Goal:
Add, update, or remove wellness resources available to users.

Preconditions:

* Administrator is logged in.
* Administrator has permission to manage wellness resources.

Trigger:
Administrator clicks the "Wellness Resources" option from the Admin Dashboard.

Main Success Scenario:

1. Administrator opens the Wellness Resources page.
2. System displays the list of existing wellness resources.
3. Administrator chooses to add, edit, or delete a resource.
4. Administrator enters or updates the resource information (e.g., title, description, category, link).
5. Administrator clicks the "Save" button.
6. System validates the entered information.
7. System updates the database.
8. System displays "Resource Updated Successfully."
9. The updated resources become available to users.

Alternative Flow(s):

* Administrator adds a new wellness resource.
* Administrator edits an existing resource.
* Administrator deletes an outdated resource after confirmation.

Exception Flow(s):

* If required fields are missing, the system displays "Please complete all required fields."
* If the database is unavailable, the system displays "Unable to update wellness resources. Please try again later."

Postconditions:

* Wellness resources are successfully added, updated, or removed.
* Users can access the latest wellness resources.

----------------------------------------------------------------------------------------------------------
Use Case ID:
UC-18

Use Case Name:
Review Flagged Conversations

Primary Actor:
Administrator

Goal:
Review conversations that have been flagged by the system for potential crisis-related content or policy violations.

Preconditions:

* Administrator is logged in.
* Administrator has permission to review flagged conversations.
* At least one conversation has been flagged by the system.

Trigger:
Administrator clicks the "Flagged Conversations" option from the Admin Dashboard.

Main Success Scenario:

1. Administrator opens the Flagged Conversations page.
2. System retrieves all flagged conversations.
3. System displays the list of flagged conversations.
4. Administrator selects a conversation to review.
5. System displays the conversation details.
6. Administrator reviews the conversation.
7. Administrator marks the conversation as "Reviewed" or updates its status.
8. System saves the updated review status.
9. System displays "Conversation Reviewed Successfully."

Alternative Flow(s):

* Administrator filters flagged conversations by date, status, or severity.
* Administrator searches for a specific flagged conversation.

Exception Flow(s):

* If no flagged conversations exist, the system displays "No flagged conversations found."
* If the database is unavailable, the system displays "Unable to load flagged conversations. Please try again later."

Postconditions:

* The selected conversation is reviewed successfully.
* The review status is updated in the system.

----------------------------------------------------------------------------------------------------------
Use Case ID:
UC-19

Use Case Name:
Generate AI Response

Primary Actor:
System (AI Service)

Goal:
Generate a supportive and context-aware response to the user's message.

Preconditions:

* User is logged in.
* User has sent a valid chat message.
* AI service is available.

Trigger:
The system receives a user's message from the Chat with AI use case.

Main Success Scenario:

1. System receives the user's message.
2. System retrieves the current conversation context.
3. System constructs the prompt using the conversation history and system instructions.
4. System sends the prompt to the LLM API.
5. The AI service generates a response.
6. System validates the AI response against safety guidelines.
7. System returns the response to the chat interface.
8. The AI response is displayed to the user.

Alternative Flow(s):

* If the AI response is too long, the system formats or truncates it before displaying it.
* If the AI response contains restricted content, the system replaces it with a safe response.

Exception Flow(s):

* If the LLM API is unavailable, the system displays "AI service is temporarily unavailable. Please try again later."
* If the response generation fails, the system logs the error and informs the user.

Postconditions:

* A safe AI response is generated and displayed to the user.
* The response is ready to be stored in the chat history.

----------------------------------------------------------------------------------------------------------
Use Case ID:
UC-20

Use Case Name:
Store Chat History

Primary Actor:
System

Goal:
Store user and AI messages securely for future reference.

Preconditions:

* User is logged in.
* A conversation between the user and the AI has occurred.
* The database is available.

Trigger:
The system generates and displays an AI response.

Main Success Scenario:

1. System receives the user's message and the AI response.
2. System creates a chat record containing both messages.
3. System associates the chat record with the user's account.
4. System stores the conversation in the database.
5. System records the date and time of the conversation.
6. System confirms that the chat history has been saved successfully.

Alternative Flow(s):

* If an existing chat session is active, the system appends the new messages to the current conversation.
* If a new conversation is started, the system creates a new chat session.

Exception Flow(s):

* If the database is unavailable, the system displays "Unable to save chat history."
* If storing the conversation fails, the system logs the error and continues the conversation without interrupting the user.

Postconditions:

* The conversation is securely stored in the database.
* The stored conversation is available through the **View Chat History** feature.

----------------------------------------------------------------------------------------------------------
