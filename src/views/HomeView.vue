<script setup>
import { onMounted } from 'vue';
import useAuth from '@/composables/useAuth';

const { storeAuthToken } = useAuth();

onMounted(() => {
  const token = new URLSearchParams(window.location.hash.replace('#', '?')).get('access_token');
  if (token) {
    storeAuthToken();
    window.location.href = '/';
  }
});
</script>

<template>
  <main class="text-center py-8 px-10">
    <h1 class="text-3xl uppercase font-bold mb-4">Spotify Web App Clone</h1>
    <p class="text-lg">Using VueJs, Vue Router, Pinia Store, Spotify Web Api, Tailwind Css, Axios</p>
  </main>
</template>
