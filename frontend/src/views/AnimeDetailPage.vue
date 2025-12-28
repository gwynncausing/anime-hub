<template>
  <div>
    <!-- Loading State -->
    <div v-if="loading" class="text-center py-20">
      <div class="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      <p class="mt-4 text-gray-400">Loading anime details...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="text-center py-20">
      <p class="text-red-400 text-xl mb-4">❌ {{ error }}</p>
      <button
        @click="$router.go(-1)"
        class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition"
      >
        Go Back
      </button>
    </div>

    <!-- Anime Detail -->
    <div v-else-if="anime">
      <!-- Back Button -->
      <button
        @click="$router.go(-1)"
        class="mb-6 text-gray-400 hover:text-white transition flex items-center gap-2"
      >
        ← Back
      </button>

      <!-- Anime Header -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <!-- Poster Image -->
        <div class="lg:col-span-1">
          <img
            :src="anime.images?.jpg?.large_image_url || anime.images?.jpg?.image_url"
            :alt="anime.title"
            class="w-full rounded-lg shadow-2xl"
          />
        </div>

        <!-- Anime Info -->
        <div class="lg:col-span-2">
          <h1 class="text-4xl font-bold mb-2">{{ anime.title }}</h1>
          <p v-if="anime.title_english" class="text-xl text-gray-400 mb-4">
            {{ anime.title_english }}
          </p>

          <!-- Stats -->
          <div class="flex flex-wrap gap-4 mb-6">
            <div v-if="anime.score" class="bg-yellow-500 text-gray-900 font-bold px-4 py-2 rounded-lg">
              ⭐ {{ anime.score }}
            </div>
            <div class="bg-gray-700 px-4 py-2 rounded-lg">
              {{ anime.type }}
            </div>
            <div class="bg-gray-700 px-4 py-2 rounded-lg">
              {{ anime.status }}
            </div>
            <div v-if="anime.episodes" class="bg-gray-700 px-4 py-2 rounded-lg">
              {{ anime.episodes }} Episodes
            </div>
          </div>

          <!-- Synopsis -->
          <div class="mb-6">
            <h2 class="text-2xl font-bold mb-3">Synopsis</h2>
            <p class="text-gray-300 leading-relaxed">
              {{ anime.synopsis || 'No synopsis available.' }}
            </p>
          </div>

          <!-- Additional Info -->
          <div class="grid grid-cols-2 gap-4 text-sm">
            <div v-if="anime.aired?.string">
              <span class="text-gray-400">Aired:</span>
              <span class="ml-2">{{ anime.aired.string }}</span>
            </div>
            <div v-if="anime.studios?.length">
              <span class="text-gray-400">Studios:</span>
              <span class="ml-2">{{ anime.studios.map(s => s.name).join(', ') }}</span>
            </div>
            <div v-if="anime.genres?.length">
              <span class="text-gray-400">Genres:</span>
              <div class="mt-2 flex flex-wrap gap-2">
                <span
                  v-for="genre in anime.genres"
                  :key="genre.mal_id"
                  class="bg-blue-500 px-2 py-1 rounded text-xs"
                >
                  {{ genre.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import animeService from '../services/animeService';

const route = useRoute();
const anime = ref(null);
const loading = ref(false);
const error = ref(null);

const fetchAnimeDetail = async () => {
  loading.value = true;
  error.value = null;

  try {
    const response = await animeService.fetchAnimeById(route.params.id);
    anime.value = response.data;
  } catch (err) {
    error.value = 'Failed to load anime details. Please try again.';
    console.error('Error:', err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchAnimeDetail();
});
</script>
