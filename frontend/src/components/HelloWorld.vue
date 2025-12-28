<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="text-center">
    <h2 class="text-2xl font-bold mb-6">{{ msg }}</h2>

    <div class="space-y-4">
      <button 
        type="button" 
        @click="count++" 
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg"
      >
        Count is {{ count }}
      </button>
      
      <p class="text-gray-300">
        Edit <code class="bg-gray-700 px-2 py-1 rounded text-sm text-blue-300">components/HelloWorld.vue</code> to test HMR
      </p>
    </div>

    <div class="mt-8 space-y-2 text-sm text-gray-400">
      <p>
        Check out
        <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank" class="text-blue-400 hover:underline">
          Vue Quick Start Guide
        </a>
      </p>
      <p>
        Learn more about
        <a href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" target="_blank" class="text-blue-400 hover:underline">
          IDE Support
        </a>
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Tailwind handles most styling */
</style>
