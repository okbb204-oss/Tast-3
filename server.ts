import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", env: process.env.NODE_ENV });
});

async function setupApp() {
  // Vite integration for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // In production (Vercel), static files are served by Vercel CDN 
    // using the vercel.json config, but we keep this for consistency.
    const distPath = path.resolve(__dirname, "dist");
    app.use(express.static(distPath));
    // SPA fallback is handled by vercel.json rewrites in production
  }

  // Only listen if running directly (e.g., locally)
  if (process.env.NODE_ENV !== "production") {
    const PORT = 3000;
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  }
}

// Development bootstrap
if (process.env.NODE_ENV !== "production") {
  setupApp();
}

export default app;
