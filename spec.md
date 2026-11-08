# AI Mystery Room – Project Specification

**Version:** 1.0  
**Project Type:** AI-Powered Interactive Detective Game  
**Development Approach:** Spec-Driven Development (SDD)  
**Technology Stack:** MERN + Google Gemini API  
**Project Scope:** Single-player Web Application

---

## 1. Project Overview

AI Mystery Room is an AI-powered interactive detective investigation platform that allows users to create and solve fictional mystery cases.

Users provide a short fictional scenario, and the application uses Google Gemini AI to generate a complete mystery investigation containing suspects, motives, alibis, clues, evidence, and a predetermined culprit.

Users investigate the case by examining different types of evidence, analysing suspect profiles, connecting clues, and identifying the culprit.

After submitting their final accusation, users receive the actual solution with a detailed explanation of how the evidence reveals the culprit.

## 2. Problem Statement

Traditional mystery games generally depend on predefined stories, fixed suspects, and predetermined clues. This limits replayability and restricts users from creating their own investigations.

There is also an opportunity to develop an interactive platform that encourages logical reasoning, critical thinking, observation, and evidence-based decision-making.

## 3. Proposed Solution

Develop an AI-powered mystery investigation platform where users can submit their own fictional scenarios and receive dynamically generated detective cases.

The application will provide an interactive investigation environment containing:

- Suspect profiles
- Fictional WhatsApp-style conversations
- CCTV-style evidence
- AI-generated images
- Documents and reports
- Witness statements
- Investigation timelines
- Evidence notes and bookmarks

Users will analyse the available information and identify the culprit.

The application will verify the accusation using the solution stored securely on the backend.

## 4. Project Objectives

1. Generate unique fictional mystery cases using AI.
2. Allow users to create investigations from their own scenarios.
3. Generate multiple suspects with believable backgrounds, motives, and alibis.
4. Provide different types of interactive evidence.
5. Encourage critical thinking and logical reasoning.
6. Maintain consistency between suspects, clues, and the actual solution.
7. Provide an engaging and responsive investigation interface.
8. Reveal the solution with an evidence-based explanation.

## 5. Target Users

- Mystery and detective game enthusiasts.
- Students interested in logical reasoning.
- Puzzle and problem-solving enthusiasts.
- Users interested in AI-powered interactive entertainment.
- Creative writers and storytelling enthusiasts.

## 6. Core Features

### 6.1 Mystery Creation

- Users can enter their own fictional scenarios.
- Users can select a mystery category.
- Users can choose difficulty: Easy, Medium, or Hard.
- Users can select between 3 and 6 suspects.
- Users can optionally specify the investigation setting.

### 6.2 AI Mystery Generation

Google Gemini generates:

- Mystery title and description.
- Incident briefing.
- Suspect profiles.
- Motives and alibis.
- Investigation timeline.
- Evidence items.
- Actual culprit.
- Complete private solution.

Every generated case must contain exactly one predetermined culprit.

### 6.3 Suspect Investigation

Each suspect profile should contain:

- Name
- Age
- Occupation
- Background
- Relationship with the incident
- Possible motive
- Alibi
- Suspicious behaviour

Users should be able to examine and compare suspects.

### 6.4 Evidence Investigation

The application should support different evidence formats.

**Chat Evidence:** Fictional messaging conversations with timestamps and participants.

**Image Evidence:** AI-generated photographs of fictional scenes, objects, and locations.

**CCTV Evidence:** Fictional surveillance-style images with camera information and timestamps.

**Document Evidence:** Reports, receipts, letters, and other fictional documents.

**Witness Statements:** Statements from fictional characters related to the incident.

All evidence must contribute to the investigation and remain logically consistent with the final solution.

### 6.5 Investigation Dashboard

The investigation dashboard should provide:

- Suspect navigation.
- Evidence categories.
- Evidence viewer.
- Investigation timeline.
- Personal investigation notes.
- Important clue bookmarking.
- Investigation progress indicator.

Users should be able to revisit evidence whenever required.

### 6.6 Final Accusation

- Display all suspects.
- Allow the user to select one suspect.
- Ask for confirmation before submission.
- Allow only one final accusation in the MVP.
- Verify the selected suspect using the backend solution.

### 6.7 Solution Reveal

After the accusation, display:

- Whether the user's answer was correct.
- Actual culprit.
- Motive.
- Method.
- Opportunity.
- Complete incident timeline.
- Important clues that reveal the culprit.
- Explanation of misleading evidence.
- Reasons why the other suspects were innocent.

## 7. Technology Stack

| Component | Technology |
|---|---|
| Frontend | React.js |
| Programming Language | JavaScript |
| Styling | HTML5, CSS3 |
| Backend | Node.js |
| Backend Framework | Express.js |
| Database | MongoDB |
| Database ODM | Mongoose |
| Generative AI | Google Gemini API |
| Validation | Zod |
| API Communication | REST APIs |

## 8. System Architecture

The application follows a client-server architecture.

### Frontend

React handles the user interface, mystery creation, suspect profiles, evidence viewers, investigation dashboard, and solution display.

### Backend

Node.js and Express handle API requests, session management, AI communication, case generation, validation, and accusation verification.

### Database

MongoDB stores:

- Cases
- Suspects
- Evidence
- Private solutions
- Game sessions
- Investigation notes
- Investigation progress

### AI Integration

Google Gemini generates structured mystery cases, characters, evidence, timelines, and solutions.

A separate image-generation service may be integrated for fictional visual evidence.

## 9. Database Design

The application should use the following main collections:

1. **Cases:** Stores case titles, categories, difficulty, briefing, and status.
2. **Suspects:** Stores suspect profiles and case relationships.
3. **Evidence:** Stores evidence descriptions, content, types, and media references.
4. **Solutions:** Stores the actual culprit, motive, method, opportunity, and explanation.
5. **GameSessions:** Stores session information, accusation status, and investigation progress.
6. **InvestigationNotes:** Stores user-created notes and important clues.

The private solution must be stored separately from public case information.

## 10. Application Workflow

1. User opens the application.
2. User enters a fictional mystery scenario.
3. User selects category, difficulty, and suspect count.
4. Backend validates the submitted information.
5. Gemini generates the complete mystery.
6. Backend validates the generated case.
7. Case information is stored in MongoDB.
8. User views the case briefing.
9. User enters the investigation dashboard.
10. User examines suspects and evidence.
11. User analyses clues and saves investigation notes.
12. User submits a final accusation.
13. Backend verifies the selected suspect.
14. Application reveals the actual culprit and complete explanation.

## 11. Functional Requirements

- The system must accept user-provided fictional scenarios.
- The system must generate structured mystery cases.
- Each case must contain exactly one predetermined culprit.
- Each case must contain 3–6 suspects.
- Each case must contain at least six evidence items.
- At least three distinct evidence items must support the actual culprit.
- Evidence and timeline information must be logically consistent.
- Users must be able to inspect suspects and evidence.
- Users must be able to save notes and mark important clues.
- Investigation progress must persist after refreshing the page.
- Users must be able to submit one final accusation.
- The application must reveal the solution only after the accusation.
- The application must explain the reasoning behind the solution.

## 12. Non-Functional Requirements

### Performance
The application should provide responsive navigation and handle AI generation asynchronously.

### Security
- Gemini API keys must remain on the backend.
- Private solution data must never be exposed before resolution.
- User sessions must be securely managed.
- All user input must be validated.
- API endpoints must have appropriate rate limits.

### Reliability
Invalid AI-generated cases must be rejected or corrected before users can investigate them.

### Usability
The application must provide an intuitive and easy-to-understand interface.

### Responsiveness
The application must support mobile, tablet, and desktop devices.

### Maintainability
The frontend, backend, database models, AI services, and API routes must be organised into separate modules.

## 13. UI/UX Requirements

The application should have a cinematic detective investigation theme.

Suggested design:

- Dark navy and charcoal backgrounds.
- Red accent colours.
- Warm white text.
- Evidence cards and investigation panels.
- Clear suspect profiles.
- Realistic fictional document and chat layouts.
- Subtle animations and transitions.
- Responsive investigation dashboard.

The design should feel like a detective investigation room rather than a generic chatbot or administration dashboard.

## 14. Security and Privacy

- Store API credentials in environment variables.
- Never expose private solutions through public APIs.
- Validate all generated AI responses.
- Verify session ownership before accessing case information.
- Prevent duplicate accusation submissions.
- Avoid storing real private conversations or personal records.
- Clearly identify generated evidence as fictional.

The application is intended for fictional entertainment and educational simulations, not real-world criminal investigations.

## 15. Testing Requirements

The following must be tested:

- Scenario submission and validation.
- AI case generation.
- Suspect generation.
- Evidence generation.
- Timeline consistency.
- Private solution protection.
- Evidence navigation.
- Notes and bookmarking.
- Session persistence.
- Accusation verification.
- Result generation.
- Error handling.
- Responsive layouts.
- Backend API security.

## 16. Future Enhancements

The following features may be considered after the MVP:

- User registration and login.
- Multiplayer investigation rooms.
- Shared mystery cases.
- Leaderboards and scoring.
- AI-generated video evidence.
- Audio evidence and voice interrogation.
- AI detective assistant.
- Achievement system.
- Case-sharing functionality.
- Mobile application.

## 17. Expected Outcome

The expected outcome is a fully functional AI-powered detective investigation platform where users can create fictional mystery scenarios, investigate suspects, analyse different forms of evidence, connect clues, and identify the actual culprit.

The application should provide an engaging experience while demonstrating the practical integration of generative AI, full-stack web development, database management, and secure backend architecture.

## 18. Project Success Criteria

The project will be considered successful when:

1. Users can create mysteries using their own fictional scenarios.
2. AI generates complete and logically consistent cases.
3. Every case contains one predetermined culprit.
4. Users can investigate all available suspects and evidence.
5. Investigation progress and notes are saved.
6. The private solution remains protected during investigation.
7. Users can submit a final accusation.
8. The application reveals the correct solution with supporting evidence.
9. All major features work across desktop and mobile devices.
10. The complete user journey works without critical errors.

---

**End of SPEC.md**