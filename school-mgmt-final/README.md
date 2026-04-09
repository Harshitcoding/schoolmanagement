# 🏫 SchoolMS — School Management System

A full-stack MERN web application to manage school operations — students and task/assignment management — built with React, Node.js, Express, MongoDB, and Tailwind CSS.

---

## 📁 Project Structure

```
school-mgmt/
├── backend/           ← Node.js + Express API
│   ├── models/        ← Mongoose schemas
│   ├── routes/        ← API route handlers
│   ├── middleware/    ← JWT auth middleware
│   ├── server.js      ← Entry point
│   ├── .env           ← Environment variables (ready to use)
│   └── package.json
│
├── frontend/          ← React + Tailwind CSS
│   ├── public/
│   ├── src/
│   │   ├── api/       ← Axios instance
│   │   ├── context/   ← Auth context (JWT)
│   │   ├── components/← Sidebar, Layout, PrivateRoute
│   │   ├── pages/     ← Login, Dashboard, Students, Tasks
│   │   ├── App.jsx
│   │   └── index.js
│   ├── tailwind.config.js
│   ├── .env           ← API URL config (ready to use)
│   └── package.json
│
└── README.md
```

---

## ⚙️ Prerequisites

Make sure you have these installed:

- **Node.js** v16 or higher → https://nodejs.org
- **MongoDB** (local) → https://www.mongodb.com/try/download/community
  - OR use **MongoDB Atlas** (free cloud) → https://www.mongodb.com/atlas

---

## 🚀 How to Run (Step by Step)

### Step 1 — Open project in VS Code

```
File → Open Folder → select the school-mgmt folder
```

### Step 2 — Start the Backend

Open a new terminal in VS Code (Ctrl + `):

```bash
cd backend
npm install
npm run dev
```

You should see:
```
MongoDB connected
Server running on port 5000
Default admin created
```

Backend running at: http://localhost:5000

### Step 3 — Start the Frontend

Open another terminal in VS Code (Ctrl + Shift + `):

```bash
cd frontend
npm install
npm start
```

Frontend opens at: http://localhost:3000

---

## 🔑 Login Credentials

| Field    | Value              |
|----------|--------------------|
| Email    | admin@school.com   |
| Password | admin123           |

The admin account is automatically created the first time the backend starts.

---

## ✨ Features

### Authentication
- JWT-based admin login
- Protected routes — only logged-in admin can access the dashboard
- Auto-logout on token expiry

### Student Management
- Add new students (name, roll number, class, email, phone)
- Edit student details
- Delete students (with confirmation popup)
- Search students by name, roll number, or class

### Task / Assignment Management
- Assign tasks/homework to any student
- Set subject and due date
- Mark tasks as completed / pending (click the circle)
- Filter tasks: All / Pending / Completed
- Due date warnings (Overdue, Due today, Due tomorrow)
- Delete tasks

### Dashboard
- Total students, tasks, completed, pending counts
- Recent students list
- Recent tasks list

---

## 🌐 API Endpoints

### Auth
| Method | Endpoint          | Description   |
|--------|-------------------|---------------|
| POST   | /api/auth/login   | Admin login   |

### Students (Protected)
| Method | Endpoint              | Description        |
|--------|-----------------------|--------------------|
| GET    | /api/students         | Get all students   |
| POST   | /api/students         | Add a student      |
| PUT    | /api/students/:id     | Update a student   |
| DELETE | /api/students/:id     | Delete a student   |

### Tasks (Protected)
| Method | Endpoint                  | Description          |
|--------|---------------------------|----------------------|
| GET    | /api/tasks                | Get all tasks        |
| POST   | /api/tasks                | Assign a task        |
| PATCH  | /api/tasks/:id/toggle     | Toggle completion    |
| DELETE | /api/tasks/:id            | Delete a task        |

---

## 🛠 Tech Stack

| Layer      | Technology                                              |
|------------|---------------------------------------------------------|
| Frontend   | React 18, React Router v6, Tailwind CSS, Axios          |
| Backend    | Node.js, Express.js                                     |
| Database   | MongoDB + Mongoose                                      |
| Auth       | JWT (jsonwebtoken) + bcryptjs                           |

---

## 🐛 Common Issues

**MongoDB not connecting?**
- Make sure MongoDB service is running locally
- Or replace MONGO_URI in backend/.env with your MongoDB Atlas connection string

**Port already in use?**
- Change PORT=5000 in backend/.env to another port like 5001
- Update REACT_APP_API_URL in frontend/.env accordingly

**npm install fails?**
- Make sure Node.js v16+ is installed: node --version

---

Made with love for Gridaan Technical Assignment
