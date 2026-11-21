# vibelegit-demo-vulnerable

Intentionally vulnerable demo code for VibeLegit scan demos. All secrets are fake. Do not use in production.

This project exists only so the VibeLegit GitHub Deep Code Scan has something to
find. Every "secret" below is a non-functional placeholder (zeros, or AWS's
public docs example key). Do not deploy it and do not copy any pattern from it.

## What's deliberately wrong

| File | Vulnerability |
|---|---|
| `.env` | A committed environment file |
| `lib/secrets.js` | Hardcoded fake Stripe/AWS/JWT secrets + a DB connection string with credentials |
| `lib/db.js` | SQL built by string interpolation/concatenation (SQL injection) |
| `pages/api/run.js` | `eval()` of request data + unvalidated request input |
| `components/Profile.jsx` | `dangerouslySetInnerHTML` fed a user variable (XSS) |
| `.env.example` | Harmless — confirms the scanner does NOT flag `*.example` files |
