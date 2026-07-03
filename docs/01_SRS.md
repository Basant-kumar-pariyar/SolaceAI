Software Requirements Specification (SRS)
AI Mental Wellness Support Chatbot

Version: 1.0 (Draft)

Project Name: MindEase AI (Working Title)

Project Type: AI-Powered Mental Wellness Web Application

Prepared By: Basant Kumar

Technology Stack:

Frontend: React.js
Backend: Node.js + Express.js
Database: MongoDB
AI: LLM API (initially prompt-engineered, with RAG planned later)
1. Introduction
1.1 Purpose

The purpose of this project is to develop a secure web-based AI mental wellness support platform that provides users with supportive conversations, mood tracking, journaling, and evidence-informed coping strategies. The system is intended to support emotional well-being and self-reflection while encouraging professional help when appropriate.

The application is not intended to diagnose mental illnesses, prescribe treatments, or replace licensed mental health professionals.

1.2 Problem Statement

Many students and working professionals experience stress, anxiety, loneliness, and emotional burnout. Access to professional mental health services may be delayed due to cost, availability, geographic limitations, or stigma.

Existing AI-based wellness applications provide useful support but are often proprietary, mobile-focused, or difficult to customize for educational purposes.

This project proposes a web-based AI mental wellness assistant that combines conversational AI, mood tracking, journaling, CBT-inspired exercises, and crisis-resource guidance to provide accessible emotional support while emphasizing ethical AI usage and responsible escalation to human support when needed.

1.3 Objectives

The system aims to:

Provide supportive AI conversations.
Help users monitor emotional well-being.
Encourage healthy coping strategies.
Maintain a personal wellness journal.
Visualize emotional trends.
Detect potential crisis situations and provide appropriate guidance.
Demonstrate responsible AI system design.
1.4 Scope
Included
User authentication
AI conversation
Mood tracking
Daily journal
Dashboard
CBT-inspired exercises
Chat history
Crisis keyword detection
User profile
Excluded
Medical diagnosis
Therapy sessions
Medication recommendations
Human counselor communication
Emergency intervention
2. Overall Description
2.1 Product Perspective

The application consists of:

React frontend
Node.js REST API
MongoDB database
LLM service
Knowledge base (future RAG)
2.2 Product Functions

The system shall:

Register users
Authenticate users
Store conversations
Generate AI responses
Record mood entries
Save journals
Display analytics
Detect crisis-related language
Provide emergency resources
2.3 User Classes
Guest
View landing page
Register
Login
Registered User
Chat
Track moods
Write journals
View dashboard
Edit profile
Administrator
Manage users
View anonymized analytics
Review flagged conversations (if implemented)
Manage wellness resources
3. Functional Requirements
Authentication

FR-1

The system shall allow user registration.

FR-2

The system shall allow secure login.

FR-3

The system shall encrypt passwords.

FR-4

The system shall support password reset.

AI Chat

FR-5

The system shall generate AI responses.

FR-6

The system shall maintain conversation history.

FR-7

The AI shall respond using supportive language.

FR-8

The AI shall avoid diagnosis and medication advice.

Mood Tracking

FR-9

The system shall allow daily mood logging.

FR-10

The system shall store mood history.

FR-11

The dashboard shall visualize mood trends.

Journal

FR-12

The system shall allow daily journal entries.

FR-13

The system shall save journal history.

FR-14

The AI may summarize journal content (optional feature).

Dashboard

FR-15

Display mood charts.

FR-16

Display journaling streaks.

FR-17

Display recent activities.

Crisis Detection

FR-18

Detect crisis-related language.

FR-19

Present crisis resources and encourage contacting trusted people or local emergency services when appropriate.

FR-20

Do not continue casual conversation without also presenting safety-oriented guidance when high-risk language is detected.

4. Non-Functional Requirements
Performance
Average API response under 3 seconds (excluding LLM latency).
Support at least 100 concurrent users (project target).
Security
JWT authentication
Password hashing
HTTPS in production
Input validation
Protection against common web vulnerabilities
Reliability
Database backups
Error logging
Graceful API failure handling
Usability
Responsive UI
Accessible design
Simple navigation
Clean dashboard
Scalability

The architecture should support adding:

Voice interaction
Mobile app
RAG knowledge base
Multi-language support
Wearable integrations
5. System Architecture
React Frontend
        │
        ▼
Node.js + Express API
        │
        ▼
AI Service (LLM)
        │
        ▼
MongoDB Database
6. Database Modules
User
id
name
email
passwordHash
createdAt
Chat
id
userId
messages
timestamps
Mood
id
userId
mood
intensity
note
date
Journal
id
userId
title
content
createdAt
7. External Interfaces
User Interface
Login
Dashboard
Chat
Mood Tracker
Journal
Profile
Emergency Resources
API
Authentication API
Chat API
Mood API
Journal API
User API
8. Constraints
Internet connection required for cloud-hosted LLMs.
AI responses depend on the selected LLM provider.
The application is intended for users aged 18+ (recommended).
The application is not a substitute for professional mental healthcare.
9. Assumptions
Users provide truthful information.
Users have internet access.
AI APIs remain available.
Users understand the assistant provides wellness support rather than clinical treatment.
10. Future Enhancements
Retrieval-Augmented Generation (RAG)
Voice conversations
Emotion detection
Personalized wellness plans
Meditation timer
Habit tracking
Calendar integration
Wearable device support
11. Risks
Risk	Mitigation
Harmful AI responses	Prompt engineering, safety filters, crisis escalation
LLM downtime	Retry logic and fallback messaging
Privacy concerns	Authentication, encryption, least-privilege access
Incorrect wellness advice	Restrict scope to supportive guidance and encourage professional care
12. References

This section should be completed after your research. Include:

Research papers on AI mental health support.
CBT and mental wellness literature.
Documentation for your chosen LLM API.
Academic references used during development.