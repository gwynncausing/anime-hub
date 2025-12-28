# 🚀 Quick Start Guide

This guide shows you how to run your anime site project easily.

---

## 🎯 Method 1: Using npm (Recommended)

Run both frontend and backend with a single command:

```bash
npm run dev
```

This will start:
- ✅ Backend on `http://localhost:3000`
- ✅ Frontend on `http://localhost:5173`

**Other npm commands:**

```bash
# Install dependencies for all projects (run once)
npm run install:all

# Run backend only
npm run dev:backend

# Run frontend only
npm run dev:frontend
```

---

## 🎯 Method 2: Using Shell Script

Run the dev script:

```bash
./dev.sh
```

This does the same thing as `npm run dev` but with colored output!

---

## 🛑 Stopping the Servers

Press `Ctrl + C` in the terminal to stop both servers.

---

## 📦 First Time Setup

If this is your first time, install all dependencies:

```bash
npm run install:all
```

Or manually:
```bash
# Root (for concurrently)
npm install

# Backend
cd backend
npm install

# Frontend
cd frontend
npm install
```

---

## 🌐 Access Your App

Once running:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000/api/health
- **API Docs**: See `API_TESTING.md`

---

## ⚡ Quick Commands Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start both servers |
| `npm run dev:backend` | Start backend only |
| `npm run dev:frontend` | Start frontend only |
| `npm run install:all` | Install all dependencies |
| `./dev.sh` | Start with shell script |

---

## 🐛 Troubleshooting

**Port already in use?**
```bash
# Kill process on port 3000 (backend)
lsof -ti:3000 | xargs kill -9

# Kill process on port 5173 (frontend)
lsof -ti:5173 | xargs kill -9
```

**Script permission denied?**
```bash
chmod +x dev.sh
```

**Dependencies missing?**
```bash
npm run install:all
```

---

## 🎉 You're All Set!

Just run `npm run dev` from the root folder and start coding! 🚀
