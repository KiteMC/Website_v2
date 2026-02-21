# Backend API

## API Reference Documentation

All API endpoints use JSON for request and response bodies. Admin endpoints require `Authorization: Bearer <token>` in the request header.

## Configuration

### Get Config
- **Endpoint**: `GET /api/config`
- **Purpose**: Get frontend theme, announcement, auth methods, and other public config info.
- **Permission**: Public

## Captcha

### Generate Captcha
- **Endpoint**: `GET /api/captcha/generate`
- **Purpose**: Generate a new graphical captcha image.
- **Permission**: Public

## Email Verification

### Send Verification Code
- **Endpoint**: `POST /api/verify/send`
- **Purpose**: Send a registration verification code to the specified email.
- **Permission**: Public
- **Request Header**: `Content-Type: application/json`
- **Request Parameters**:
  | Field    | Type   | Required | Description         | Example             |
  |----------|--------|----------|---------------------|---------------------|
  | email    | string | Yes      | User email          | user@example.com    |
  | language | string | No       | Language (zh/en)    | en                  |
- **Notes**:
  - Email sending is rate-limited per day/minute to prevent abuse.
  - Email format must comply with RFC standards.

## Questionnaire

### Get Questionnaire Config
- **Endpoint**: `GET /api/questionnaire/config`
- **Purpose**: Get questionnaire questions and configuration.
- **Permission**: Public

### Submit Questionnaire
- **Endpoint**: `POST /api/questionnaire/submit`
- **Purpose**: Submit questionnaire answers for scoring.
- **Permission**: Public

## Registration

### Register
- **Endpoint**: `POST /api/register`
- **Purpose**: User submits verification code and info to register.
- **Permission**: Public
- **Request Header**: `Content-Type: application/json`
- **Request Parameters**:
  | Field    | Type   | Required | Description         |
  |----------|--------|----------|---------------------|
  | email    | string | Yes      | User email          |
  | code     | string | Yes      | Verification code   |
  | username | string | Yes      | Player name         |
  | language | string | No       | Language            |
- **Notes**:
  - Verification code is usually valid for 5 minutes.
  - Username and email must be unique.
  - Registration may require admin approval.

### Check Review Status
- **Endpoint**: `GET /api/review/status`
- **Purpose**: Check the review status of a registration.
- **Permission**: Public

## User

### Get User Status
- **Endpoint**: `GET /api/user/status`
- **Purpose**: Query the current status of a user.
- **Permission**: Public

## Authentication

### User Login
- **Endpoint**: `POST /api/login`
- **Purpose**: User login (non-admin).
- **Permission**: Public

### Admin Login
- **Endpoint**: `POST /api/admin/login`
- **Purpose**: Admin login to backend management panel.
- **Permission**: Public
- **Request Header**: `Content-Type: application/json`
- **Request Parameters**:
  | Field    | Type   | Required | Description            |
  |----------|--------|----------|------------------------|
  | username | string | Yes      | Player username        |
  | password | string | Yes      | Player password        |
  | language | string | No       | Language               |
- **Notes**:
  - Admin login verifies against registered player credentials. Only server OPs can access the admin panel.
  - All admin APIs require `Authorization: Bearer <token>` in the header after login.

## Admin Endpoints

### Verify Admin Token
- **Endpoint**: `GET /api/admin/verify`
- **Purpose**: Verify if the admin token is still valid.
- **Permission**: Admin (token required)

### Get User List
- **Endpoint**: `GET /api/admin/users`
- **Purpose**: Get users with pagination, search, and status filtering.
- **Permission**: Admin (token required)
- **Query Parameters**: `page`, `size`, `search`, `status`

### Approve User
- **Endpoint**: `POST /api/admin/user/approve`
- **Purpose**: Approve a pending user's registration.
- **Permission**: Admin (token required)

### Reject User
- **Endpoint**: `POST /api/admin/user/reject`
- **Purpose**: Reject a pending user's registration.
- **Permission**: Admin (token required)

### Delete User
- **Endpoint**: `POST /api/admin/user/delete`
- **Purpose**: Delete a user from the system.
- **Permission**: Admin (token required)

### Ban User
- **Endpoint**: `POST /api/admin/user/ban`
- **Purpose**: Ban a user (change status to banned).
- **Permission**: Admin (token required)

### Unban User
- **Endpoint**: `POST /api/admin/user/unban`
- **Purpose**: Unban a user (change status from banned to approved).
- **Permission**: Admin (token required)

### Change User Password
- **Endpoint**: `POST /api/admin/user/password`
- **Purpose**: Change a user's password.
- **Permission**: Admin (token required)

### Get Audit Logs
- **Endpoint**: `GET /api/admin/audits`
- **Purpose**: Get audit log records.
- **Permission**: Admin (token required)

### Sync AuthMe Data
- **Endpoint**: `POST /api/admin/sync`
- **Purpose**: Trigger AuthMe data synchronization.
- **Permission**: Admin (token required)

## Discord Integration

### Discord Auth
- **Endpoint**: `GET /api/discord/auth`
- **Purpose**: Initiate Discord OAuth2 authorization flow.
- **Permission**: Public

### Discord Callback
- **Endpoint**: `GET /api/discord/callback`
- **Purpose**: Handle Discord OAuth2 callback.
- **Permission**: Public

### Discord Status
- **Endpoint**: `GET /api/discord/status`
- **Purpose**: Check Discord linking status for a user.
- **Permission**: Public

### Discord Unlink
- **Endpoint**: `POST /api/discord/unlink`
- **Purpose**: Unlink a user's Discord account.
- **Permission**: Public

## Version

### Get Version
- **Endpoint**: `GET /api/version`
- **Purpose**: Get the plugin version and check for updates.
- **Permission**: Public

---

> For more APIs and parameters, see the source code or frontend `src/services/api.ts`.
