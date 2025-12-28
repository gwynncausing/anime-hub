# 🧪 Testing Phase 3 Implementation

## Quick Start

1. **Make sure both servers are stopped** (press Ctrl+C if running)

2. **Start both servers:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   - Frontend: http://localhost:5173 (or 5174)
   - Backend: http://localhost:3000/api/health

---

## ✅ Test Checklist

### 1. Home Page (/)
- [ ] Page loads without errors
- [ ] Top anime displayed in grid
- [ ] Images load correctly
- [ ] Score badges show
- [ ] Hover effects work (cards scale and shadow)
- [ ] Pagination buttons functional
- [ ] Click anime card navigates to detail

### 2. Anime Detail Page (/anime/:id)
- [ ] Detail page loads when clicking anime
- [ ] Large poster image displays
- [ ] Title, synopsis, and all info show
- [ ] Genre tags display
- [ ] Back button works
- [ ] No console errors

### 3. Search Page (/search)
- [ ] Search input works
- [ ] Type "naruto" - results appear after 500ms
- [ ] Minimum 3 characters required
- [ ] Loading spinner shows while searching
- [ ] Results display in grid
- [ ] Click result navigates to detail
- [ ] Empty search shows "No results"

### 4. Seasonal Page (/seasonal)
- [ ] Current season anime loads
- [ ] "AIRING" badges show
- [ ] Grid layout matches home page
- [ ] Click anime navigates to detail

### 5. Navigation
- [ ] Header appears on all pages
- [ ] Logo link returns to home
- [ ] All nav links work (Home, Seasonal, Search)
- [ ] Active route highlights in blue
- [ ] Mobile menu works (resize browser)
- [ ] Hamburger icon toggles menu

### 6. Footer
- [ ] Footer appears on all pages
- [ ] Links are clickable
- [ ] External Jikan link works
- [ ] Copyright year is correct

### 7. Responsive Design
- [ ] Resize browser - grid adjusts columns
- [ ] Mobile view shows 2 columns
- [ ] Desktop view shows 5 columns
- [ ] Mobile menu works on small screens
- [ ] All text readable on mobile

### 8. 404 Page
- [ ] Go to http://localhost:5173/invalid-page
- [ ] 404 page displays
- [ ] "Go Home" button works

### 9. Loading & Errors
- [ ] Loading spinners appear when fetching
- [ ] Error messages show if API fails
- [ ] "Try Again" buttons work on errors

---

## 🐛 Common Issues & Fixes

### Issue: "Cannot GET /api/anime/top"
**Fix:** Backend server not running. Run `npm run dev` from root.

### Issue: "CORS error"
**Fix:** Check backend has CORS middleware enabled (should be automatic).

### Issue: Images not loading
**Fix:** Jikan API might be slow. Wait a moment or refresh.

### Issue: Tailwind styles not applying
**Fix:** Clear browser cache or restart dev server.

### Issue: "Module not found"
**Fix:** Run `npm install` in frontend directory.

### Issue: Port 5173 in use
**Fix:** Vite will auto-use 5174. Check terminal output for actual port.

---

## 📊 Expected Behavior

### Performance
- Initial page load: 1-2 seconds
- Navigation between pages: Instant
- API calls: 1-3 seconds (Jikan rate limit)
- Search debounce: 500ms delay

### Data
- Home page: 25 anime per page
- Detail page: Full anime info
- Search: Up to 25 results
- Seasonal: All current season anime

---

## 🎯 Success Criteria

Phase 3 is working if:
- ✅ All 4 main pages load and display data
- ✅ Navigation works smoothly
- ✅ Backend API connects successfully
- ✅ No console errors (check DevTools)
- ✅ Mobile responsive design works
- ✅ Search with debounce functions
- ✅ Images and anime data display correctly

---

## 📝 Notes

- The backend has rate limiting (350ms between requests)
- Jikan API is free but can be slow during peak hours
- First load might take longer (cold start)
- Browser DevTools Network tab shows API calls
- Console shows any JavaScript errors

---

## 🚀 If Everything Works

Congratulations! Your anime site is fully functional. You can now:
1. Browse thousands of anime
2. Search for specific titles
3. View detailed information
4. See seasonal anime

Ready for Phase 4 to add more features! 🎉
