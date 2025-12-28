# Anime Site Implementation Plan

## Project Overview
A full-stack anime browsing application with Vue 3 frontend and Express backend for personal learning.

---

## 🎯 Tech Stack

### Frontend
- **Framework**: Vue 3 (Composition API)
- **Build Tool**: Vite
- **Language**: JavaScript/TypeScript
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **State Management**: Pinia (optional, for later)
- **Router**: Vue Router

### Backend
- **Framework**: Express.js
- **Language**: JavaScript/TypeScript
- **HTTP Client**: Axios (for API calls)
- **Middleware**: CORS, Express Rate Limit
- **Cache**: Node-cache (optional)

### API
- **Primary**: Jikan API (MyAnimeList unofficial)
- **Alternative**: AniList GraphQL API

---

## 📋 Phase 1: Project Setup (Week 1) ✅ COMPLETE

### 1.1 Initialize Projects
- [x] Create `frontend` folder with Vite + Vue 3
- [x] Create `backend` folder with Express
- [x] Set up Git repository structure
- [x] Create `.gitignore` files
- [x] Initialize `package.json` for both projects
- [x] Create root `package.json` with shortcuts

### 1.2 Basic Configuration
- [x] Configure Vite for Vue
- [x] Set up Tailwind CSS in frontend
- [x] Configure CORS in Express
- [x] Set up environment variables (.env files)
- [x] Create basic folder structure
- [x] Install all dependencies (axios, vue-router, etc.)

### 1.3 Development Environment
- [x] Test frontend dev server (npm run dev)
- [x] Test backend server (nodemon)
- [x] Verify cross-origin requests work
- [x] Create `npm run dev` shortcut to run both servers
- [x] Create `dev.sh` shell script alternative
- [x] Fix Tailwind CSS PostCSS configuration

**Deliverables**: Both projects running locally ✅

---

## 📋 Phase 2: Backend API Layer (Week 1-2) ✅ COMPLETE

### 2.1 Basic Express Setup
- [x] Create `server.js` entry point
- [x] Set up Express middleware (cors, json parser)
- [x] Configure port and basic routes
- [x] Add health check endpoint (`/api/health`)

### 2.2 Jikan API Integration
- [x] Create `services/jikanService.js`
- [x] Implement API wrapper functions:
  - [x] `getTopAnime()` - Get top/popular anime
  - [x] `getAnimeById(id)` - Get anime details
  - [x] `searchAnime(query)` - Search anime by name
  - [x] `getSeasonalAnime()` - Get current season anime
  - [x] `getAnimeCharacters(id)` - Get character list

### 2.3 API Routes
- [x] Create `routes/anime.js`
- [x] Define endpoints:
  - [x] `GET /api/anime/top` - Top anime
  - [x] `GET /api/anime/:id` - Anime details
  - [x] `GET /api/anime/search?q=query` - Search
  - [x] `GET /api/anime/seasonal/now` - Seasonal anime
  - [x] `GET /api/anime/:id/characters` - Characters

### 2.4 Error Handling & Rate Limiting
- [x] Add global error handler middleware
- [x] Implement rate limiting (350ms delay for Jikan)
- [x] Add request logging
- [x] Handle Jikan API errors gracefully

**Deliverables**: Working REST API with anime data endpoints ✅

---

## 📋 Phase 3: Frontend Foundation (Week 2-3) ✅ COMPLETE

### 3.1 Project Structure
```
frontend/src/
├── components/        # Reusable components ✅
├── views/            # Page components ✅
├── services/         # API calls ✅
├── router/           # Vue Router config ✅
├── assets/           # Images, styles ✅
└── composables/      # Reusable logic ✅
```

### 3.2 Setup Core Features
- [x] Tailwind CSS configured and working
- [x] Create basic styling with Tailwind
- [x] Install and configure Vue Router
- [x] Create layout components:
  - [x] `AppHeader.vue` - Navigation bar with mobile menu
  - [x] `AppFooter.vue` - Footer with links
  - [x] `AppLayout.vue` - Main layout wrapper
- [x] Create color scheme and design tokens (Tailwind defaults)

### 3.3 API Service Layer
- [x] Create `services/api.js` - Axios instance with interceptors
- [x] Create `services/animeService.js`:
  - [x] `fetchTopAnime()` - Get top anime with pagination
  - [x] `fetchAnimeById(id)` - Get anime details
  - [x] `searchAnime(query)` - Search with debounce
  - [x] `fetchSeasonalAnime()` - Get current season anime
  - [x] `fetchAnimeCharacters(id)` - Get character list

### 3.4 Basic Routing
- [x] Create routes:
  - [x] `/` - Home page (top anime)
  - [x] `/anime/:id` - Anime details page
  - [x] `/search` - Search page with debounce
  - [x] `/seasonal` - Seasonal anime page
  - [x] `/*` - 404 Not Found page
- [x] Set up route guards and page titles
- [x] Add page transition animations

**Deliverables**: Vue app with routing and API integration ✅

---

## 📋 Phase 4: Core Features (Week 3-4)

### 4.1 Home Page
- [ ] Create `views/HomePage.vue`
- [ ] Display top/popular anime
- [ ] Create `AnimeCard.vue` component:
  - [ ] Show poster image
  - [ ] Display title, score, year
  - [ ] Add hover effects
  - [ ] Link to detail page
- [ ] Add loading states
- [ ] Add error handling

### 4.2 Anime Detail Page
- [ ] Create `views/AnimeDetailPage.vue`
- [ ] Display comprehensive anime info:
  - [ ] Large banner/poster
  - [ ] Title (English & Japanese)
  - [ ] Synopsis
  - [ ] Score, rank, popularity
  - [ ] Episodes, status, aired dates
  - [ ] Genres, studios, themes
  - [ ] Trailer embed (if available)
- [ ] Create `CharacterList.vue` component
- [ ] Add loading skeleton

### 4.3 Search Functionality
- [ ] Create `views/SearchPage.vue`
- [ ] Add search input with debounce
- [ ] Display search results in grid
- [ ] Add filters (optional):
  - [ ] Type (TV, Movie, OVA, etc.)
  - [ ] Status (Airing, Completed)
  - [ ] Genre
- [ ] Handle empty results
- [ ] Add pagination

### 4.4 Seasonal Anime Page
- [ ] Create `views/SeasonalPage.vue`
- [ ] Display current season anime
- [ ] Add season selector (Winter, Spring, Summer, Fall)
- [ ] Year selector
- [ ] Grid layout with anime cards

**Deliverables**: Fully functional anime browsing experience

---

## 📋 Phase 5: Enhanced Features (Week 4-5)

### 5.1 UI/UX Improvements
- [ ] Add loading spinners/skeletons
- [ ] Implement infinite scroll or pagination
- [ ] Add animations and transitions
- [ ] Make responsive (mobile, tablet, desktop)
- [ ] Add dark/light mode toggle
- [ ] Improve accessibility (aria labels, keyboard nav)

### 5.2 Additional Components
- [ ] `AnimeList.vue` - Different view modes (grid/list)
- [ ] `FilterSidebar.vue` - Advanced filtering
- [ ] `GenreTag.vue` - Clickable genre tags
- [ ] `ScoreDisplay.vue` - Visual score representation
- [ ] `TrailerModal.vue` - Video player modal

### 5.3 Backend Enhancements
- [ ] Add response caching (node-cache)
- [ ] Implement request retry logic
- [ ] Add API response transformation
- [ ] Create utility functions for data formatting
- [ ] Add request/response logging

### 5.4 State Management (Optional)
- [ ] Install Pinia
- [ ] Create anime store
- [ ] Manage favorites/watchlist (local storage)
- [ ] Cache API responses in store

**Deliverables**: Polished, production-ready features

---

## 📋 Phase 6: Advanced Features (Week 5-6)

### 6.1 User Features (Local Storage)
- [ ] Favorites/Bookmarks system
- [ ] Watchlist (Plan to Watch, Watching, Completed)
- [ ] Local storage persistence
- [ ] Import/export watchlist

### 6.2 Additional Pages
- [ ] Top anime by category (Movies, TV, OVA)
- [ ] Upcoming anime
- [ ] Anime recommendations
- [ ] Genre browse page
- [ ] Studio page

### 6.3 Performance Optimization
- [ ] Lazy load images
- [ ] Code splitting (route-based)
- [ ] Optimize bundle size
- [ ] Add service worker (PWA, optional)
- [ ] Implement virtual scrolling for long lists

### 6.4 Testing (Optional but Recommended)
- [ ] Write unit tests for services
- [ ] Test Vue components
- [ ] API endpoint testing
- [ ] E2E testing basics

**Deliverables**: Feature-complete application

---

## 📋 Phase 7: Deployment (Week 6)

### 7.1 Prepare for Production
- [ ] Environment variables for production
- [ ] Build frontend (`npm run build`)
- [ ] Optimize backend for production
- [ ] Add production error handling
- [ ] Set up logging

### 7.2 Deployment Options

**Frontend:**
- [ ] Vercel (recommended, zero config)
- [ ] Netlify
- [ ] GitHub Pages

**Backend:**
- [ ] Render (free tier)
- [ ] Railway
- [ ] Heroku
- [ ] DigitalOcean

### 7.3 Final Steps
- [ ] Configure CORS for production domain
- [ ] Set up custom domain (optional)
- [ ] Add analytics (optional)
- [ ] Create README with setup instructions
- [ ] Document API endpoints

**Deliverables**: Live, deployed application

---

## 🎓 Learning Objectives

By completing this project, you will learn:

### Frontend Skills
- ✅ Vue 3 Composition API
- ✅ Component-based architecture
- ✅ State management
- ✅ Routing and navigation
- ✅ API integration and async operations
- ✅ Responsive design
- ✅ CSS frameworks (Tailwind)

### Backend Skills
- ✅ Express.js server setup
- ✅ RESTful API design
- ✅ Middleware patterns
- ✅ Error handling
- ✅ Rate limiting
- ✅ External API integration
- ✅ Caching strategies

### Full-Stack Skills
- ✅ Frontend-backend communication
- ✅ CORS configuration
- ✅ Environment management
- ✅ Deployment and DevOps basics
- ✅ Git workflow

---

## 📚 Resources

### Documentation
- Vue 3: https://vuejs.org/guide/introduction.html
- Vite: https://vitejs.dev/guide/
- Express: https://expressjs.com/
- Jikan API: https://docs.api.jikan.moe/
- Tailwind CSS: https://tailwindcss.com/docs

### Tutorials
- Vue Mastery (video courses)
- Vue School
- Express.js tutorials on YouTube
- MDN Web Docs

---

## 🚀 Getting Started Commands

### Initial Setup
```bash
# Create frontend
npm create vite@latest frontend -- --template vue
cd frontend
npm install
npm install -D tailwindcss postcss autoprefixer
npm install axios vue-router
npx tailwindcss init -p

# Create backend
cd ..
mkdir backend
cd backend
npm init -y
npm install express cors dotenv axios
npm install -D nodemon
```

### Development
```bash
# Terminal 1 - Frontend
cd frontend
npm run dev

# Terminal 2 - Backend
cd backend
npm run dev
```

---

## 📊 Project Timeline

**Total Duration**: 6 weeks (adjustable based on your pace)

- **Week 1**: Setup + Backend API
- **Week 2**: Frontend Foundation + Core Features
- **Week 3-4**: Main Features (Home, Detail, Search)
- **Week 5**: Enhanced Features + Polish
- **Week 6**: Advanced Features + Deployment

**Flexible**: Take more time if needed. This is for learning!

---

## 💡 Tips

1. **Start Simple**: Get basic features working before adding complexity
2. **Commit Often**: Use Git regularly to track progress
3. **Test Frequently**: Test in browser constantly as you build
4. **Console Log**: Use console.log for debugging
5. **Read Docs**: When stuck, check official documentation
6. **Break Tasks**: Divide large tasks into smaller steps
7. **Take Breaks**: Prevent burnout, learning takes time
8. **Ask Questions**: Use ChatGPT, Stack Overflow, Discord communities

---

## 🎉 Success Criteria

Your project is complete when:
- ✅ Users can browse popular anime
- ✅ Users can search for specific anime
- ✅ Users can view detailed anime information
- ✅ UI is responsive and looks good
- ✅ Error states are handled gracefully
- ✅ Application is deployed and accessible online

---

**Good luck with your learning journey! 🚀 Enjoy building your anime site!**
