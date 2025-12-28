<template>
  <footer class="bg-gray-800 border-t border-gray-700 mt-auto">
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- About Section -->
        <div>
          <h3 class="text-white font-bold text-lg mb-3">🎌 AnimeHub</h3>
          <p class="text-gray-400 text-sm">
            Your personal anime discovery platform. Browse, search, and explore thousands of anime titles.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-white font-bold text-lg mb-3">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/" class="text-gray-400 hover:text-white text-sm transition">
                Home
              </router-link>
            </li>
            <li>
              <router-link to="/seasonal" class="text-gray-400 hover:text-white text-sm transition">
                Seasonal Anime
              </router-link>
            </li>
            <li>
              <router-link to="/search" class="text-gray-400 hover:text-white text-sm transition">
                Search
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Data Source -->
        <div>
          <h3 class="text-white font-bold text-lg mb-3">Data Source</h3>
          <p class="text-gray-400 text-sm mb-2">
            Powered by
            <a
              href="https://jikan.moe/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-400 hover:underline"
            >
              Jikan API
            </a>
          </p>
          <p class="text-gray-400 text-sm">
            Unofficial MyAnimeList API
          </p>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-8 pt-6 border-t border-gray-700 text-center">
        <p class="text-gray-500 text-sm">
          © {{ currentYear }} AnimeHub. Built for learning purposes.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>
