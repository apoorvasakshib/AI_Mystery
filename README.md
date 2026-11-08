# Casefile · AI Mystery Room

An AI-powered detective game based on [spec.md](./spec.md). Create a fictional case, inspect evidence, compare suspects, keep investigation notes, and submit one final accusation.

## Run locally

1. Install Node.js 20 or newer and MongoDB Community Server (optional for a quick demo).
2. Run `npm install`.
3. Copy `.env.example` to `.env` and set `MONGODB_URI` and `GEMINI_API_KEY` if available.
4. Run `npm run dev` and open <http://localhost:5173>.

Without a Gemini key, the server generates a complete sample museum theft case. Without MongoDB, the demo runs with in-memory sessions; case progress is not retained after the server restarts. With MongoDB configured, cases and progress are stored persistently.

## Stack

- React + Vite client
- Express REST API
- MongoDB + Mongoose persistence
- Gemini structured mystery generation, with a built-in sample case fallback
- Zod request validation and API rate limiting

## API

- `GET /api/health` — API and database status
- `POST /api/cases` — validate inputs, create a case and investigation session
- `GET /api/session` — load public case data and saved progress
- `PATCH /api/session` — save notes, bookmarks, and viewed evidence
- `POST /api/session/accuse` — submit the single final accusation and reveal the solution

The case solution is stored separately as a private field in MongoDB and is omitted from the public case response until the accusation endpoint resolves the session. The browser holds a random session token in local storage; this MVP does not include user accounts.

## Deploy from GitHub

GitHub stores the source code; deploy the API and static client to a host such as Render.

1. Push this project to a GitHub repository. Keep `.env` out of GitHub; commit `.env.example` instead.
2. On Render, create a **Web Service** from the repository. Use build command `npm install` and start command `npm start`.
3. In the API service's environment settings, add `MONGODB_URI`, `GEMINI_API_KEY`, `GEMINI_MODEL` (`gemini-3.8-flash`), and `CLIENT_ORIGIN` (the deployed client URL).
4. Create a **Static Site** from the same repository. Use build command `npm install && npm run build` and publish directory `dist`.
5. Set the static site's `VITE_API_URL` to the API service URL followed by `/api`, for example `https://your-api.onrender.com/api`.
6. Redeploy the API after setting `CLIENT_ORIGIN`, and redeploy the client after setting `VITE_API_URL`.

GitHub Pages hosts static files only and cannot run the Express API. The Vite development proxy is local-only; production uses `VITE_API_URL` to reach the deployed API.

## Project structure

```text
src/                 React application and visual styles
server/index.js      Express routes and session handling
server/generate.js   Gemini prompt, validation, and demo mystery
server/models.js     Mongoose case and game-session models
```
