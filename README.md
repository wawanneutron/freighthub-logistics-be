# FreightHub Logistics Backend API

Backend API for a simple logistics application where users can create, view, track, update, and cancel shipment orders.

## API Documentation

The complete API documentation is available via Postman:
[FreightHub Logistics API Documentation](https://documenter.getpostman.com/view/22253846/2sBYArUYAj)

## Tech Stack

- **Node.js**
- **Express.js**
- **TypeScript**
- **Prisma ORM**
- **MySQL**
- **Zod**

## Architecture

```text
Route
  ↓
Validation Middleware
  ↓
Controller
  ↓
Service
  ↓
Repository
  ↓
Prisma ORM
  ↓
MySQL
```

### Layer Responsibilities

- **Routes** define API endpoints.
- **Validation Middleware** validates request bodies, parameters, and query strings.
- **Controllers** handle HTTP requests and responses.
- **Services** contain business rules and application logic.
- **Repositories** contain database queries.
- **Prisma ORM** handles communication with MySQL.

## Prerequisites

Make sure the following are installed:

- Node.js
- npm
- MySQL
- Git

Recommended Node.js version:

```bash
node -v
```

Use a current Node.js LTS release | my local version is v24.19.0

## Installation

Clone the repository:

```bash
git clone <git@github.com:wawanneutron/freighthub-logistics-be.git>
cd freighthub-logistics-be
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

Example configuration:

```env
PORT=3000

DATABASE_URL="mysql://root:password@localhost:3306/freighthub_logistics"

DATABASE_HOST="localhost"
DATABASE_PORT=3306
DATABASE_USER="root"
DATABASE_PASSWORD="password"
DATABASE_NAME="freighthub_logistics"

CORS_ORIGIN="http://localhost:5173"
```

Update the database credentials according to your local MySQL configuration.

If your local MySQL user has no password:

```env
DATABASE_URL="mysql://root@localhost:3306/freighthub_logistics"

DATABASE_HOST="localhost"
DATABASE_PORT=3306
DATABASE_USER="root"
DATABASE_PASSWORD=""
DATABASE_NAME="freighthub_logistics"
```

## Database Setup

Generate Prisma Client:

```bash
npx prisma generate
```

Apply the existing migrations:

```bash
npx prisma migrate dev
```

## Running the Application

Start the development server:

```bash
npm run dev
```

The API will be available at:

```text
http://localhost:3000
```

## API Endpoints

Base URL:

```text
http://localhost:3000/api
```

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/orders` | Create a new shipment order |
| `GET` | `/orders` | Get shipment orders |
| `GET` | `/orders/track/:trackingNumber` | Track an order by tracking number |
| `PATCH` | `/orders/:id/status` | Update an order status |
| `PATCH` | `/orders/:id/cancel` | Cancel a pending order |
| `GET` | `/orders/:id` | Get details of a single order by ID |
