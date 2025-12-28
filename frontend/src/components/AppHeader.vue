<template>
  <header class="bg-gray-800 shadow-lg sticky top-0 z-50">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2 hover:opacity-80 transition">
          <span class="text-3xl">🎌</span>
          <span class="text-2xl font-bold text-white">AnimeHub</span>
        </router-link>

        <!-- Navigation Links -->
        <div class="hidden md:flex items-center space-x-6">
          <router-link
            to="/"
            class="text-gray-300 hover:text-white transition-colors"
            active-class="text-blue-400"
          >
            Home
          </router-link>
          <router-link
            to="/seasonal"
            class="text-gray-300 hover:text-white transition-colors"
            active-class="text-blue-400"
          >
            Seasonal
          </router-link>
          <router-link
            to="/search"
            class="text-gray-300 hover:text-white transition-colors"
            active-class="text-blue-400"
          >
            Search
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden text-white focus:outline-none"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!mobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden mt-4 pb-4 space-y-3"
      >
        <router-link
          to="/"
          @click="closeMobileMenu"
          class="block text-gray-300 hover:text-white transition-colors"
          active-class="text-blue-400"
        >
          Home
        </router-link>
        <router-link
          to="/seasonal"
          @click="closeMobileMenu"
          class="block text-gray-300 hover:text-white transition-colors"
          active-class="text-blue-400"
        >
          Seasonal
        </router-link>
        <router-link
          to="/search"
          @click="closeMobileMenu"
          class="block text-gray-300 hover:text-white transition-colors"
          active-class="text-blue-400"
        >
          Search
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};
</script>
