<script setup>
import SpotifyBrand from '@/components/icons/SpotifyBrand.vue'
import Button from '@/components/ui/BaseButton.vue'
import useAuth from '@/composables/useAuth'
const { authUrl } = useAuth()
</script>

<template>
  <main class="bg-primary h-screen flex items-center justify-center">
    <section class="flex items-center flex-col gap-3">
      <SpotifyBrand height="100" width="300" class="text-accent" />
      <Button
        @click="authUrl"
        rounded="lg"
        size="md"
        variant="secondary"
        type="button"
        label="Login with Spotify"
        class="text-white"
      />
    </section>
  </main>
</template>
