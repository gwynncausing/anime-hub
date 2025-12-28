import api from './api';

/**
 * Anime Service - Handles all anime-related API calls
 */
const animeService = {
  /**
   * Fetch top anime
   * @param {number} page - Page number (default: 1)
   * @param {number} limit - Items per page (default: 25)
   * @returns {Promise} - Anime data
   */
  async fetchTopAnime(page = 1, limit = 25) {
    try {
      const response = await api.get('/anime/top', {
        params: { page, limit }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching top anime:', error);
      throw error;
    }
  },

  /**
   * Fetch anime by ID
   * @param {string|number} id - Anime ID
   * @returns {Promise} - Anime details
   */
  async fetchAnimeById(id) {
    try {
      const response = await api.get(`/anime/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching anime ${id}:`, error);
      throw error;
    }
  },

  /**
   * Search anime by query
   * @param {string} query - Search query
   * @param {number} page - Page number (default: 1)
   * @param {number} limit - Items per page (default: 25)
   * @returns {Promise} - Search results
   */
  async searchAnime(query, page = 1, limit = 25) {
    try {
      const response = await api.get('/anime/search', {
        params: { q: query, page, limit }
      });
      return response.data;
    } catch (error) {
      console.error('Error searching anime:', error);
      throw error;
    }
  },

  /**
   * Fetch seasonal anime
   * @returns {Promise} - Current season anime
   */
  async fetchSeasonalAnime() {
    try {
      const response = await api.get('/anime/seasonal/now');
      return response.data;
    } catch (error) {
      console.error('Error fetching seasonal anime:', error);
      throw error;
    }
  },

  /**
   * Fetch anime characters
   * @param {string|number} id - Anime ID
   * @returns {Promise} - Character list
   */
  async fetchAnimeCharacters(id) {
    try {
      const response = await api.get(`/anime/${id}/characters`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching characters for anime ${id}:`, error);
      throw error;
    }
  },
};

export default animeService;
