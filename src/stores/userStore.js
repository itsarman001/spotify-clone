import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)
  const token = ref(localStorage.getItem('spotify_token') || null)

  const isAuthenticated = computed(() => token.value !== null)

  function setUser(newUser) {
    user.value = newUser
  }

  function setToken(newToken) {
    token.value = newToken
    localStorage.setItem('spotify_token', newToken)
  }

  function clearAuth() {
    user.value = null
    token.value = null
    localStorage.removeItem('spotify_token')
  }

  return {
    user,
    token,
    isAuthenticated,
    setUser,
    setToken,
    clearAuth,
  }
})
