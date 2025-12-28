const axios = require('axios');

const JIKAN_BASE_URL = process.env.JIKAN_API_URL || 'https://api.jikan.moe/v4';

// Helper function to handle API requests with delay (Jikan rate limit: 3 req/sec)
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Axios instance with default config
const jikanAPI = axios.create({
  baseURL: JIKAN_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Get top anime
const getTopAnime = async (page = 1, limit = 25) => {
  try {
    await delay(350); // Rate limiting
    const response = await jikanAPI.get('/top/anime', {
      params: { page, limit }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching top anime:', error.message);
    throw error;
  }
};

// Search anime by query
const searchAnime = async (query, page = 1, limit = 25) => {
  try {
    await delay(350); // Rate limiting
    const response = await jikanAPI.get('/anime', {
      params: { q: query, page, limit }
    });
    return response.data;
  } catch (error) {
    console.error('Error searching anime:', error.message);
    throw error;
  }
};

// Get anime by ID
const getAnimeById = async (id) => {
  try {
    await delay(350); // Rate limiting
    const response = await jikanAPI.get(`/anime/${id}/full`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching anime ${id}:`, error.message);
    throw error;
  }
};

// Get anime characters
const getAnimeCharacters = async (id) => {
  try {
    await delay(350); // Rate limiting
    const response = await jikanAPI.get(`/anime/${id}/characters`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching characters for anime ${id}:`, error.message);
    throw error;
  }
};

// Get current seasonal anime
const getSeasonalAnime = async () => {
  try {
    await delay(350); // Rate limiting
    const response = await jikanAPI.get('/seasons/now');
    return response.data;
  } catch (error) {
    console.error('Error fetching seasonal anime:', error.message);
    throw error;
  }
};

module.exports = {
  getTopAnime,
  searchAnime,
  getAnimeById,
  getAnimeCharacters,
  getSeasonalAnime
};
