<template>
  <div>
    <h1 class="text-4xl font-bold mb-4">📅 Seasonal Anime</h1>
    <p class="text-gray-400 mb-8">Currently airing anime this season</p>

    <!-- Loading State -->
    <div v-if="loading" class="text-center py-20">
      <div class="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      <p class="mt-4 text-gray-400">Loading seasonal anime...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="text-center py-20">
      <p class="text-red-400 text-xl">❌ {{ error }}</p>
      <button
        @click="fetchData"
        class="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition"
      >
        Try Again
      </button>
    </div>

    <!-- Anime Grid -->
    <div v-else>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <div
          v-for="anime in animeList"
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
            <!-- Airing Badge -->
            <div class="absolute bottom-2 left-2 bg-green-500 text-white font-bold px-2 py-1 rounded text-xs">
              🎬 AIRING
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
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import animeService from '../services/animeService';

const router = useRouter();
const animeList = ref([]);
const loading = ref(false);
const error = ref(null);

const fetchData = async () => {
  loading.value = true;
  error.value = null;

  try {
    const response = await animeService.fetchSeasonalAnime();
    animeList.value = response.data || [];
  } catch (err) {
    error.value = 'Failed to load seasonal anime. Please try again.';
    console.error('Error:', err);
  } finally {
    loading.value = false;
  }
};

const goToDetail = (id) => {
  router.push(`/anime/${id}`);
};

onMounted(() => {
  fetchData();
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
