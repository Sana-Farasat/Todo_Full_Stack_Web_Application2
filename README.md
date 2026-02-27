# Todo Web Application

A full-stack todo list application built with **Next.js** (frontend) and **FastAPI** (backend). Users can sign up, sign in, and manage their tasks with a clean, modern interface.

---

## 🚀 Features

- **User Authentication** – Sign up and sign in securely
- **Task Management** – Create, view, update, and delete tasks
- **Dashboard** – See all your tasks in one place
- **Profile & Settings** – Manage your account
- **Responsive Design** – Works on desktop and mobile
- **Dark/Light Theme** – Easy on the eyes

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **UI Components:** Radix UI, shadcn/ui
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **State Management:** Jotai
- **Forms:** React Hook Form + Zod
- **Notifications:** Sonner
- **Icons:** Lucide React

### Backend
- **Framework:** FastAPI
- **Database ORM:** SQLModel + SQLAlchemy
- **Database:** PostgreSQL
- **Migrations:** Alembic
- **Authentication:** JWT (JSON Web Tokens)
- **Async Support:** AsyncPG

---

## 📦 Installation & Setup

### Prerequisites
- **Node.js 20+** and npm
- **Python 3.11+**
- **PostgreSQL** database

---

### 1. Clone the Repository

```bash
git clone https://github.com/Sana-Farasat/Todo_Full_Stack_Web_Application2.git
cd Todo_Full_Stack_Web_Application2
```

---

### 2. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Create .env.local file and add your environment variables
# Example:
# DATABASE_URL=postgresql://user:password@localhost:5432/your_db
# NEXT_PUBLIC_API_URL=http://localhost:8000

# Run development server
npm run dev
```

Frontend will run on: **http://localhost:3000**

---

### 3. Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv .venv

# Activate virtual environment
# Windows:
.venv\Scripts\activate
# Mac/Linux:
source .venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file and add your environment variables
# Example:
# DATABASE_URL=postgresql://user:password@localhost:5432/your_db
# SECRET_KEY=your_secret_key
# ALGORITHM=HS256
# ACCESS_TOKEN_EXPIRE_MINUTES=30

# Run database migrations
alembic upgrade head

# Start the server
uvicorn main:app --reload
```

Backend will run on: **http://localhost:8000**

---

## 📁 Project Structure

```
grok_todo/
├── frontend/          # Next.js application
│   ├── app/           # Pages and routes
│   ├── components/    # Reusable UI components
│   ├── lib/           # Utilities and helpers
│   └── public/        # Static files
│
├── backend/           # FastAPI application
│   ├── routes/        # API endpoints
│   ├── middleware/    # Auth and other middleware
│   ├── alembic/       # Database migrations
│   └── models.py      # Database models
│
└── README.md
```

---

## 🔑 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/sign-up` | Register new user |
| POST | `/api/auth/sign-in` | Login user |
| POST | `/api/auth/sign-out` | Logout user |
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Create new task |
| PUT | `/api/tasks/{id}` | Update task |
| DELETE | `/api/tasks/{id}` | Delete task |

---

## 🎯 Usage

1. **Sign Up** – Create a new account
2. **Sign In** – Login with your credentials
3. **Dashboard** – View and manage your tasks
4. **Add Task** – Click "Add Task" to create a new todo
5. **Complete Task** – Mark tasks as done
6. **Delete Task** – Remove tasks you no longer need

---

## 📝 Environment Variables

### Frontend (`.env.local`)
```env
DATABASE_URL=postgresql://user:password@localhost:5432/your_db
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Backend (`.env`)
```env
DATABASE_URL=postgresql://user:password@localhost:5432/your_db
SECRET_KEY=your_secret_key_here
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

---

## 🧪 Testing

### Frontend
```bash
cd frontend
npm run lint
```

### Backend
```bash
cd backend
pytest
```

---

## 🚢 Deployment

### Frontend
Deploy on [Vercel](https://vercel.com) (recommended for Next.js):
```bash
npm run build
vercel deploy
```

### Backend
Deploy on any platform that supports FastAPI (Railway, Render, Heroku, etc.):
```bash
uvicorn main:app --host 0.0.0.0 --port $PORT
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👤 Author

**Sana Farasat**

GitHub: [@Sana-Farasat](https://github.com/Sana-Farasat)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org)
- [FastAPI](https://fastapi.tiangolo.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)

---

**Happy Coding! 🎉**
