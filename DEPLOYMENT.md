# Deployment Guide — Vercel & Firebase

Follow these steps to deploy this application to Vercel and ensure everything works correctly.

## 1. Environment Variables
You must set the following variables in your **Vercel Project Settings > Environment Variables**.

### API Keys
| Variable | Description |
|----------|-------------|
| `GEMINI_API_KEY` | Your Google AI SDK key (Required for AI features) |
| `NODE_ENV` | Set to `production` |

### Firebase Configuration
You need to provide the contents of your `firebase-applet-config.json` as individual variables OR just ensure the file is present in the repo. If you prefer to use environment variables in code, set these:

- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`

## 2. Vercel Configuration (`vercel.json`)
The project includes a `vercel.json` file that handles the full-stack setup:
- Routes `/api/*` to the Express server (`server.ts`).
- Routes everything else to the built React SPA (`index.html`).
- Ensures proper static file serving from `dist/`.

## 3. Common 403 Forbidden Causes
- **Missing API Routes:** If the Express server isn't correctly exported or the rewrite in `vercel.json` is wrong.
- **Environment Variables:** If `GEMINI_API_KEY` or Firebase keys are missing, the server or client might crash or return unauthorized.
- **Firestore Rules:** If your security rules block a path your app expects to read. Check `firestore.rules`.
- **Vercel Output Directory:** Ensure Vercel is set to use `dist` as the Output Directory (this is handled in `vercel.json`).

## 4. Deployment Steps
1. Push your changes to GitHub.
2. Link the repo to Vercel.
3. Configure the environment variables listed above.
4. Deployment will trigger automatically.
5. If you see a "403" or "Not Found" error, check the **Vercel Function Logs** to see if the Express server is reporting an error.
