# 🏫 SchoolMS — School Management System

A full-stack MERN web application built for the **Gridaan Full Stack Developer Technical Assignment**.  
Manage students, assign homework/tasks, and track completion — all behind a secure admin login.

---

## 📸 Page Overview

| Page | Description |
|------|-------------|
| `/login` | Admin login with JWT auth |
| `/dashboard` | Stats overview + recent students & tasks |
| `/students` | Add / Edit / Delete / Search students |
| `/tasks` | Assign / Complete / Filter / Delete tasks |

---

## ✨ Features

- **Admin Auth** — JWT login, protected routes, auto-logout on token expiry
- **Student Management** — Add, edit, delete, search by name / roll no / class
- **Task Management** — Assign to students, set due date & subject, mark complete, filter by All / Pending / Completed
- **Dashboard** — Stats cards + recent students & tasks at a glance

---

## 📁 Project Structure

```
school-mgmt/
├── backend/
│   ├── middleware/auth.js
│   ├── models/          # Admin, Student, Task
│   ├── routes/          # auth, students, tasks
│   ├── server.js
│   └── .env
└── frontend/
    └── src/
        ├── api/          # Axios instance
        ├── components/   # Sidebar, Layout, PrivateRoute
        ├── context/      # AuthContext
        └── pages/        # Login, Dashboard, Students, Tasks
```

---

## 🚀 How to Run

### Backend
```bash
cd backend
npm install
npm run dev
```
Runs at **http://localhost:5000**

### Frontend
```bash
cd frontend
npm install
npm start
```
Runs at **http://localhost:3000**

> 🔑 Login: `admin@school.com` / `admin123`

---

## 🌐 API Reference

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/login` | Admin login, returns JWT |

### Students *(🔒 Protected)*
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/students` | Get all students |
| `POST` | `/api/students` | Add a student |
| `PUT` | `/api/students/:id` | Update a student |
| `DELETE` | `/api/students/:id` | Delete a student |

### Tasks *(🔒 Protected)*
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/tasks` | Get all tasks |
| `POST` | `/api/tasks` | Assign a task |
| `PATCH` | `/api/tasks/:id/toggle` | Toggle completed status |
| `DELETE` | `/api/tasks/:id` | Delete a task |

---

Made with ❤️ by Harshit — Gridaan Technical Assignment