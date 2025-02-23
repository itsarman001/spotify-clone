<script setup>
import useFetch from '@/composables/useFetch'
import Navbar from '@/components/navigation/Navbar.vue'
import { useSpotifyStore } from '@/stores/spotifyStore'
import { onBeforeMount } from 'vue'

const spotifyStore = useSpotifyStore()

const fetchUser = useFetch()

onBeforeMount(async () => {
  const { data, isLoading, error } = await fetchUser('me')

  if (!isLoading && !error.value) {
    spotifyStore.setUser(data.value)
  }
})
</script>

<template>
  <div class="min-h-screen bg-primary text-primary">
    <Navbar />
    <RouterView />
  </div>
</template>
