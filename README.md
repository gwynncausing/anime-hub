# Anime Site

A full-stack anime browsing application built with Vue 3 and Express.js for learning purposes.

## 🚀 Tech Stack

### Frontend
- **Vue 3** - Progressive JavaScript framework
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client
- **Vue Router** - Official router for Vue.js

### Backend
- **Express.js** - Web framework for Node.js
- **Axios** - HTTP client for API calls
- **Jikan API** - Unofficial MyAnimeList API

## 📁 Project Structure

```
anime-site/
├── frontend/          # Vue 3 frontend application
│   ├── src/
│   │   ├── components/   # Reusable Vue components
│   │   ├── views/        # Page components
│   │   ├── services/     # API service layer
│   │   ├── router/       # Vue Router configuration
│   │   └── composables/  # Composable functions
│   └── package.json
│
└── backend/           # Express API server
    ├── src/
    │   ├── routes/       # API routes
    │   ├── services/     # Business logic
    │   └── middleware/   # Custom middleware
    ├── server.js
    └── package.json
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Quick Start (Run Both Servers)

From the root directory:

```bash
# First time only - install all dependencies
npm run install:all

# Start both frontend and backend
npm run dev
```

Both servers will start automatically!
- Backend: `http://localhost:3000`
- Frontend: `http://localhost:5173`

### Manual Setup (Optional)

**Backend:**
```bash
cd backend
npm install
npm run dev
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

## 📝 Environment Variables

### Backend (.env)
```
PORT=3000
NODE_ENV=development
JIKAN_API_URL=https://api.jikan.moe/v4
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:3000/api
```

## 🔗 API Endpoints

### Backend API Routes

- `GET /api/health` - Health check
- `GET /api/anime/top` - Get top anime
- `GET /api/anime/search?q=query` - Search anime
- `GET /api/anime/:id` - Get anime details by ID
- `GET /api/anime/:id/characters` - Get anime characters
- `GET /api/anime/seasonal/now` - Get current season anime

## 🚦 Getting Started

### Option 1: Run Everything (Easiest)

```bash
# Install all dependencies (first time only)
npm run install:all

# Start both servers
npm run dev
```

### Option 2: Run Manually

1. **Backend:**
   ```bash
   cd backend
   npm install
   npm run dev
   ```

2. **Frontend (in a new terminal):**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

### Option 3: Use Shell Script

```bash
./dev.sh
```

## 📚 Learning Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Express.js Documentation](https://expressjs.com/)
- [Jikan API Documentation](https://docs.api.jikan.moe/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

## 🎯 Features (Planned)

- [x] Basic project setup
- [x] Backend API with Express
- [x] Jikan API integration
- [ ] Vue Router setup
- [ ] Home page with top anime
- [ ] Anime detail page
- [ ] Search functionality
- [ ] Seasonal anime page
- [ ] Responsive design
- [ ] Dark/Light mode
- [ ] Favorites/Watchlist (local storage)

## 📄 License

This project is for educational purposes only.

## 👤 Author

Created for personal learning.
