<script setup>
import { useSpotifyStore } from '@/stores/appStore'
import { RouterLink, useRouter } from 'vue-router'

import HomeIcon from '@/components/icons/HomeIcon.vue'
import SpotifyLogo from '@/components/icons/SpotifyLogo.vue'
import SerachBar from '@/components/ui/SearchBar.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import UserDropdown from '@/components/ui/UserDropdown.vue'

const spotifyStore = useSpotifyStore()
const router = useRouter()

const handleLogout = () => {
  spotifyStore.logout()
  router.push('/login')
}

const navigateToProfile = () => router.push('/profile')
</script>

<template>
  <nav class="flex items-center justify-between gap-4 p-4 text-text-primary">
    <div class="flex items-center gap-4">
      <SpotifyLogo height="32" width="32" fill="white" />
      <RouterLink to="/">
        <span
          class="flex items-center justify-center rounded-full p-2 bg-secondary hover:bg-secondary-hover transition-colors duration-200"
        >
          <HomeIcon height="24" width="24" fill="white" />
        </span>
      </RouterLink>
      <SerachBar />
    </div>
    <div>
      <template v-if="spotifyStore.isLoggedIn">
        <UserDropdown
          @navigateToProfile="navigateToProfile"
          @logout="handleLogout"
          :user="spotifyStore.user"
        />
      </template>
      <template v-else>
        <RouterLink to="/login"><BaseButton variant="flat" label="Login" /></RouterLink>
      </template>
    </div>
  </nav>
</template>
