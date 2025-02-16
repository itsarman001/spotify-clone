<script setup>
import useFetch from '@/composables/useFetch'
import Navbar from '@/components/navigation/Navbar.vue'

import { useSpotifyStore } from '@/stores/spotifyStore'
const spotifyStore = useSpotifyStore()

const { data: userData, fn: fetchUser } = useFetch()

fetchUser('me')
spotifyStore.setUser(userData)
</script>

<template>
  <div class="min-h-screen bg-primary text-primary">
    <Navbar />
    <RouterView />
  </div>
</template>
