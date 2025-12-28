# ✅ Shortcuts & Commands Created!

## 🚀 Quick Start Command

You can now run both frontend and backend with a single command from the root directory:

```bash
npm run dev
```

This will start:
- ✅ **Backend** on `http://localhost:3000`
- ✅ **Frontend** on `http://localhost:5173` (or 5174 if 5173 is busy)

---

## 📋 Available Commands

All commands should be run from the **root directory** (`/anime-site`):

| Command | Description |
|---------|-------------|
| `npm run dev` | Start both frontend and backend servers |
| `npm run dev:backend` | Start only the backend server |
| `npm run dev:frontend` | Start only the frontend server |
| `npm run install:all` | Install dependencies for all projects |
| `./dev.sh` | Alternative: Start both with shell script |

---

## 🛑 Stopping Servers

Press `Ctrl + C` in the terminal to stop both servers at once.

---

## 🎯 How It Works

### Method 1: npm run dev (Recommended)

The root `package.json` uses **concurrently** to run both servers in parallel:

```json
"scripts": {
  "dev": "concurrently \"npm run dev:backend\" \"npm run dev:frontend\"",
  "dev:backend": "cd backend && npm run dev",
  "dev:frontend": "cd frontend && npm run dev"
}
```

### Method 2: Shell Script

The `dev.sh` script starts both servers with colored output and proper cleanup:

```bash
./dev.sh
```

---

## 🔧 What Was Fixed

### Tailwind CSS Error Fixed ✅

**Problem:** Tailwind v7 moved the PostCSS plugin to a separate package.

**Solution:** 
1. Installed `@tailwindcss/postcss`
2. Updated `postcss.config.js` to use `@tailwindcss/postcss` instead of `tailwindcss`

---

## 🌐 Access Your Application

Once running:
- **Frontend UI**: http://localhost:5173
- **Backend API**: http://localhost:3000/api/health
- **API Docs**: See `API_TESTING.md` for all endpoints

---

## 💡 Tips

1. **First time?** Run `npm run install:all` to install all dependencies
2. **Port conflict?** Vite will automatically use the next available port (5174, 5175, etc.)
3. **Backend only?** Use `npm run dev:backend`
4. **Frontend only?** Use `npm run dev:frontend`

---

## 🎉 You're All Set!

Just run:
```bash
npm run dev
```

And start coding! Both your frontend and backend will be running and watching for changes. 🚀

---

## 📁 Project Status

✅ Frontend: Vue 3 + Vite + Tailwind CSS  
✅ Backend: Express + Jikan API  
✅ Development workflow: Single command startup  
✅ Hot reload: Enabled for both projects  

Ready for Phase 3 development! 🎯
