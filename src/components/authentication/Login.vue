<script setup>
import SpotifyBrand from '@/components/icons/SpotifyBrand.vue';
import Button from '@/components/ui/BaseButton.vue';
import useAuth from '@/composables/useAuth';
const authUrl = useAuth();
const handleLogin = () => authUrl()
</script>

<template>
  <main class="bg-gray-900 h-screen flex items-center justify-center">
    <section class="flex items-center flex-col gap-3">
      <SpotifyBrand height="100" width="300" />
      <Button @click="handleLogin" rounded="lg" size="md" variant="secondary" type="button" label="Login with Spotify"
        class="text-white" />
    </section>
  </main>
</template>
