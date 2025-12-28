import { createRouter, createWebHistory } from 'vue-router';

// Import views (we'll create these next)
import HomePage from '../views/HomePage.vue';
import AnimeDetailPage from '../views/AnimeDetailPage.vue';
import SearchPage from '../views/SearchPage.vue';
import SeasonalPage from '../views/SeasonalPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      title: 'Home - Anime Site'
    }
  },
  {
    path: '/anime/:id',
    name: 'AnimeDetail',
    component: AnimeDetailPage,
    meta: {
      title: 'Anime Details - Anime Site'
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchPage,
    meta: {
      title: 'Search - Anime Site'
    }
  },
  {
    path: '/seasonal',
    name: 'Seasonal',
    component: SeasonalPage,
    meta: {
      title: 'Seasonal Anime - Anime Site'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFoundPage.vue'),
    meta: {
      title: '404 - Page Not Found'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

// Update page title on route change
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Anime Site';
  next();
});

export default router;
