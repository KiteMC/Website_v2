# Backend API

## API Reference Documentation

## User Registration & Verification

### Send Email Verification Code
- **Endpoint**: `POST /api/send_code`
- **Purpose**: Send a registration verification code to the specified email to prevent abuse.
- **Permission**: Public (no authentication required)
- **Request Header**: `Content-Type: application/json`
- **Request Parameters**:
  | Field    | Type   | Required | Description         | Example             |
  |----------|--------|----------|---------------------|---------------------|
  | email    | string | Yes      | User email          | user@example.com    |
  | language | string | No       | Language (zh/en)    | en                  |
- **Request Example**:
  ```json
  { "email": "user@example.com", "language": "en" }
  ```
- **Response**:
  | Field   | Type    | Description      |
  |---------|---------|------------------|
  | success | boolean | Success or not   |
  | msg     | string  | Message          |
- **Success Example**:
  ```json
  { "success": true, "msg": "Verification code sent" }
  ```
- **Failure Example**:
  ```json
  { "success": false, "msg": "Invalid email format or already registered" }
  ```
- **Notes**:
  - Email sending is rate-limited per day/minute to prevent abuse.
  - Email format must comply with RFC standards.

### Register
- **Endpoint**: `POST /api/register`
- **Purpose**: User submits email verification code and info to register.
- **Permission**: Public
- **Request Header**: `Content-Type: application/json`
- **Request Parameters**:
  | Field    | Type   | Required | Description         |
  |----------|--------|----------|---------------------|
  | email    | string | Yes      | User email          |
  | code     | string | Yes      | Email verification code |
  | uuid     | string | Yes      | Player UUID         |
  | username | string | Yes      | Player name         |
  | language | string | No       | Language            |
- **Request Example**:
  ```json
  { "email": "user@example.com", "code": "123456", "uuid": "player-uuid", "username": "playername", "language": "en" }
  ```
- **Response**:
  | Field   | Type    | Description      |
  |---------|---------|------------------|
  | success | boolean | Success or not   |
  | msg     | string  | Message          |
- **Success Example**:
  ```json
  { "success": true, "msg": "Registration successful" }
  ```
- **Failure Example**:
  ```json
  { "success": false, "msg": "Verification code incorrect or expired" }
  ```
- **Notes**:
  - Verification code is usually valid for 5 minutes.
  - Username and email must be unique.
  - Registration may require admin approval.

## Admin & Review

### Admin Login
- **Endpoint**: `POST /api/admin-login`
- **Purpose**: Admin login to backend.
- **Permission**: Public
- **Request Header**: `Content-Type: application/json`
- **Request Parameters**:
  | Field    | Type   | Required | Description         |
  |----------|--------|----------|---------------------|
  | password | string | Yes      | Admin password      |
  | language | string | No       | Language            |
- **Request Example**:
  ```json
  { "password": "your_admin_password", "language": "en" }
  ```
- **Response**:
  | Field   | Type    | Description      |
  |---------|---------|------------------|
  | success | boolean | Success or not   |
  | token   | string  | JWT token        |
  | message | string  | Message          |
- **Success Example**:
  ```json
  { "success": true, "token": "JWT_TOKEN", "message": "Login successful" }
  ```
- **Failure Example**:
  ```json
  { "success": false, "message": "Incorrect password" }
  ```
- **Notes**:
  - All admin APIs require `Authorization: Bearer <token>` in the header after login.

### Get Pending User List
- **Endpoint**: `GET /api/pending-list?language=en`
- **Purpose**: Get all users pending review.
- **Permission**: Admin login required (token)
- **Request Header**: `Authorization: Bearer <token>`

### Review User
- **Endpoint**: `POST /api/review`
- **Purpose**: Admin reviews user (approve/reject).
- **Permission**: Admin login required
- **Request Header**: `Authorization: Bearer <token>`, `Content-Type: application/json`
- **Request Parameters**:
  | Field    | Type   | Required | Description         |
  |----------|--------|----------|---------------------|
  | uuid     | string | Yes      | Player UUID         |
  | action   | string | Yes      | Action (approve/reject) |
  | reason   | string | No       | Reason (if rejected) |
  | language | string | No       | Language            |

## Other APIs

### Ping
- **Endpoint**: `GET /api/ping`
- **Purpose**: Health check endpoint to verify API availability.
- **Permission**: Public
- **Response**:
  ```json
  { "msg": "pong" }
  ```

### Get Config
- **Endpoint**: `GET /api/config`
- **Purpose**: Get frontend, login, announcement and other config info.
- **Permission**: Public

### Reload Config
- **Endpoint**: `POST /api/reload-config`
- **Purpose**: Reload plugin configuration and switch theme if needed.
- **Permission**: Admin login required (token)

### Get All Users
- **Endpoint**: `GET /api/all-users`
- **Purpose**: Get all non-pending users (approved, rejected, banned).
- **Permission**: Admin login required (token)

### Delete User
- **Endpoint**: `POST /api/delete-user`
- **Purpose**: Delete a user from the system.
- **Permission**: Admin login required (token)

### Ban User
- **Endpoint**: `POST /api/ban-user`
- **Purpose**: Ban a user (change status to banned).
- **Permission**: Admin login required (token)

### Unban User
- **Endpoint**: `POST /api/unban-user`
- **Purpose**: Unban a user (change status from banned to approved).
- **Permission**: Admin login required (token)

## Proxy Plugin API

### Check Whitelist Status
- **Endpoint**: `GET /api/whitelist-check?username={username}`
- **Purpose**: Check if a player is approved to join the server.
- **Permission**: API key required (configured in proxy plugin)
- **Response**:
  ```json
  { "success": true, "approved": true, "status": "approved" }
  ```

---

> For more APIs and parameters, see the source code or frontend `src/services/api.ts`.
