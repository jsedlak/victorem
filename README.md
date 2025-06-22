# Victorem

A headless championship management platform. Organize multiple championships, event schedules, results and leaderboards from a single platform.

# Running Locally

1. Clone the repository
2. Run the visual studio solution, `victorem.sln`
3. Right-click on the app host and select "Manage User Secrets". Note the keycloak password.
4. Log into the keycloak backend with the password. Username is "admin"
5. Regenerate the `victorem-frontend` client secret
6. Generate an `AUTH_SECRET` value via `openssl rand -base64 32`
7. Create a `.env.local` file in the `app` directory with the following contents
8. Run the app `npm run dev`

```
AUTH_URL=http://localhost:3000
AUTH_KEYCLOAK_ID=victorem-frontend
AUTH_KEYCLOAK_SECRET=<YOUR GENERATED SECRET>
AUTH_KEYCLOAK_ISSUER=http://localhost:8080/realms/victorem
AUTH_SECRET=<YOUR AUTH SECRET VALUE>

# Public
NEXT_PUBLIC_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_AUTH_KEYCLOAK_ID=victorem-frontend
NEXT_PUBLIC_AUTH_KEYCLOAK_ISSUER=http://localhost:8080/realms/victorem

NODE_TLS_REJECT_UNAUTHORIZED=0
```
