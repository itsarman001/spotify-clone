<script setup>
import { onMounted } from 'vue'

import MainLayout from '@/components/layouts/MainLayout.vue'
import LoginView from '@/components/authentication/LoginView.vue'

import { useSpotifyStore } from '@/stores/spotifyStore'
const spotifyStore = useSpotifyStore()

import useAuth from '@/composables/useAuth'
const { storeAuthToken } = useAuth()

onMounted(() => {
  const token = new URLSearchParams(window.location.hash.replace('#', '?')).get('access_token')
  if (token) {
    storeAuthToken()
    window.location.href = '/'
  }
})
</script>

<template>
  <div class="min-h-screen bg-primary text-primary">
    <template v-if="spotifyStore.isLoggedIn">
      <MainLayout />
    </template>
    <template v-else>
      <LoginView />
    </template>
  </div>
</template>
