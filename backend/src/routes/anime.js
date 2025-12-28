const express = require('express');
const router = express.Router();
const jikanService = require('../services/jikanService');

// GET /api/anime/top - Get top anime
router.get('/top', async (req, res) => {
  try {
    const data = await jikanService.getTopAnime();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch top anime', message: error.message });
  }
});

// GET /api/anime/search?q=query - Search anime
router.get('/search', async (req, res) => {
  try {
    const query = req.query.q;
    if (!query) {
      return res.status(400).json({ error: 'Search query is required' });
    }
    const data = await jikanService.searchAnime(query);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to search anime', message: error.message });
  }
});

// GET /api/anime/:id - Get anime by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await jikanService.getAnimeById(id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch anime details', message: error.message });
  }
});

// GET /api/anime/:id/characters - Get anime characters
router.get('/:id/characters', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await jikanService.getAnimeCharacters(id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch anime characters', message: error.message });
  }
});

// GET /api/anime/seasonal/now - Get current season anime
router.get('/seasonal/now', async (req, res) => {
  try {
    const data = await jikanService.getSeasonalAnime();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch seasonal anime', message: error.message });
  }
});

module.exports = router;
