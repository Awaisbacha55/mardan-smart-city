# 🏙️ Mardan Smart City – Citizen Complaint Portal

A full-stack web application that allows citizens of Mardan to submit, track, and manage civic complaints. Built with **React (Vite)**, **Node.js (Express)**, and **PostgreSQL (Sequelize)**.

---

## 📁 Project Structure

```
Phase1/
├── frontend/                   # React + Vite application
│   ├── src/
│   │   ├── App.jsx             # Main app component (routing, layout)
│   │   └── App.css             # Global dark-theme styles
│   ├── .env                    # Frontend env vars (VITE_API_BASE_URL)
│   ├── vite.config.js          # Vite configuration
│   └── package.json
│
├── backend/                    # Node.js + Express REST API
│   ├── server.js               # App entry point
│   ├── config/
│   │   └── db.js               # PostgreSQL / Sequelize connection
│   ├── models/
│   │   ├── User.js             # User model (citizen / admin / staff)
│   │   └── Complaint.js        # Complaint model with associations
│   ├── controllers/
│   │   ├── authController.js       # Register, login, JWT
│   │   ├── complaintController.js  # CRUD + tracking + pagination
│   │   └── userController.js       # Admin user management
│   ├── routes/
│   │   ├── authRoutes.js       # /api/auth/*
│   │   ├── complaintRoutes.js  # /api/complaints/*
│   │   ├── userRoutes.js       # /api/users/*
│   │   └── categoryRoutes.js   # /api/categories
│   ├── middleware/
│   │   ├── authMiddleware.js       # JWT protect + role guards
│   │   └── validationMiddleware.js # express-validator handler
│   ├── .env                    # Backend env vars (DB, JWT, PORT)
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- PostgreSQL ≥ 14

### 1. Backend Setup

```bash
cd backend
npm install
```

Edit `backend/.env` and set your PostgreSQL credentials:

```env
DB_NAME=mardan_smart_city
DB_USER=postgres
DB_PASSWORD=your_password
```

Create the database in PostgreSQL:

```sql
CREATE DATABASE mardan_smart_city;
```

Start the backend dev server:

```bash
npm run dev       # uses nodemon (auto-restarts on file changes)
# OR
npm start         # production
```

Backend runs on **http://localhost:5000**

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on **http://localhost:5173**

---

## 🔌 API Endpoints

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/api/auth/register` | Public | Register a citizen |
| POST | `/api/auth/login` | Public | Login & receive JWT |
| GET | `/api/auth/me` | Private | Get current user |
| GET | `/api/complaints/track/:id` | Public | Track by tracking ID |
| POST | `/api/complaints` | Citizen | Submit new complaint |
| GET | `/api/complaints/my` | Citizen | My complaints list |
| GET | `/api/complaints` | Admin | All complaints (paginated) |
| PATCH | `/api/complaints/:id` | Admin | Update status/priority |
| DELETE | `/api/complaints/:id` | Admin | Delete complaint |
| GET | `/api/users` | Admin | All users |
| GET | `/api/categories` | Public | List categories |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 19, Vite 6, Vanilla CSS |
| Backend | Node.js, Express 4 |
| Database | PostgreSQL + Sequelize ORM |
| Auth | JWT (jsonwebtoken) + bcryptjs |
| Validation | express-validator |
| Security | helmet, cors |
| Dev Tools | nodemon, Vite HMR |

---

## 🏗️ Complaint Flow

1. Citizen **registers/logs in** → receives JWT
2. Submits a complaint → gets a unique **MSC-XXXXXX tracking ID**
3. Admin updates status: `pending → in_progress → resolved`
4. Citizen (or anyone) tracks complaint status publicly using tracking ID

---

## 📝 Environment Variables

### Backend (`backend/.env`)
| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `DB_NAME` | PostgreSQL database name | `mardan_smart_city` |
| `DB_USER` | PostgreSQL username | `postgres` |
| `DB_PASSWORD` | PostgreSQL password | — |
| `DB_HOST` | Database host | `localhost` |
| `JWT_SECRET` | Secret key for JWT signing | — |
| `CLIENT_URL` | Frontend URL for CORS | `http://localhost:5173` |

### Frontend (`frontend/.env`)
| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Backend API URL | `http://localhost:5000/api` |

---

## 🌐 Complaint Categories
- 🛣️ Roads & Infrastructure
- 💧 Water Supply
- ⚡ Electricity
- 🗑️ Sanitation & Waste
- 🌳 Parks & Recreation
- 🚔 Public Safety
- 🔊 Noise Pollution
- 📌 Other

---

*© 2024 Mardan Smart City. All rights reserved.*
