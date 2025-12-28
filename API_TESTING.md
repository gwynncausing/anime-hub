# API Testing Guide

Test these endpoints to verify your backend is working correctly.

## Health Check
```bash
curl http://localhost:3000/api/health
```

## Get Top Anime
```bash
curl http://localhost:3000/api/anime/top
```

## Search Anime (Naruto)
```bash
curl "http://localhost:3000/api/anime/search?q=naruto"
```

## Get Anime Details (One Piece - ID: 21)
```bash
curl http://localhost:3000/api/anime/21
```

## Get Anime Characters (One Piece - ID: 21)
```bash
curl http://localhost:3000/api/anime/21/characters
```

## Get Current Seasonal Anime
```bash
curl http://localhost:3000/api/anime/seasonal/now
```

## Browser Testing

Open these URLs in your browser:
- http://localhost:3000/api/health
- http://localhost:3000/api/anime/top
- http://localhost:3000/api/anime/seasonal/now
