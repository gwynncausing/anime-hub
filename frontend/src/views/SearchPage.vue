<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">🔍 Search Anime</h1>

    <!-- Search Input -->
    <div class="mb-8">
      <div class="relative max-w-2xl mx-auto">
        <input
          v-model="searchQuery"
          @input="onSearchInput"
          type="text"
          placeholder="Search for anime..."
          class="w-full px-6 py-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div class="absolute right-4 top-1/2 transform -translate-y-1/2">
          <svg
            class="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="text-center py-20">
      <div class="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      <p class="mt-4 text-gray-400">Searching...</p>
    </div>

    <!-- No Search Yet -->
    <div v-else-if="!hasSearched" class="text-center py-20">
      <p class="text-gray-400 text-xl">Enter a search term to find anime</p>
    </div>

    <!-- No Results -->
    <div v-else-if="searchResults.length === 0 && !loading" class="text-center py-20">
      <p class="text-gray-400 text-xl">No results found for "{{ searchQuery }}"</p>
    </div>

    <!-- Search Results -->
    <div v-else>
      <p class="text-gray-400 mb-6">Found {{ searchResults.length }} results for "{{ searchQuery }}"</p>
      
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <div
          v-for="anime in searchResults"
          :key="anime.mal_id"
          class="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
          @click="goToDetail(anime.mal_id)"
        >
          <!-- Anime Image -->
          <div class="relative aspect-[2/3] overflow-hidden bg-gray-700">
            <img
              :src="anime.images?.jpg?.large_image_url || anime.images?.jpg?.image_url"
              :alt="anime.title"
              class="w-full h-full object-cover"
              loading="lazy"
            />
            <!-- Score Badge -->
            <div v-if="anime.score" class="absolute top-2 right-2 bg-yellow-500 text-gray-900 font-bold px-2 py-1 rounded text-sm">
              ⭐ {{ anime.score }}
            </div>
          </div>

          <!-- Anime Info -->
          <div class="p-4">
            <h3 class="font-bold text-sm mb-2 line-clamp-2 min-h-[2.5rem]">
              {{ anime.title }}
            </h3>
            <div class="flex items-center justify-between text-xs text-gray-400">
              <span>{{ anime.type || 'N/A' }}</span>
              <span>{{ anime.year || 'N/A' }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import animeService from '../services/animeService';

const router = useRouter();
const searchQuery = ref('');
const searchResults = ref([]);
const loading = ref(false);
const hasSearched = ref(false);

let searchTimeout = null;

const onSearchInput = () => {
  // Debounce search
  clearTimeout(searchTimeout);
  
  if (searchQuery.value.trim().length < 3) {
    searchResults.value = [];
    hasSearched.value = false;
    return;
  }

  searchTimeout = setTimeout(() => {
    performSearch();
  }, 500);
};

const performSearch = async () => {
  if (!searchQuery.value.trim()) return;

  loading.value = true;
  hasSearched.value = true;

  try {
    const response = await animeService.searchAnime(searchQuery.value);
    searchResults.value = response.data || [];
  } catch (err) {
    console.error('Search error:', err);
    searchResults.value = [];
  } finally {
    loading.value = false;
  }
};

const goToDetail = (id) => {
  router.push(`/anime/${id}`);
};
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
