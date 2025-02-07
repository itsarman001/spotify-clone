import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSpotifyStore = defineStore('spotify', {
  state: () => ({
    user: ref(localStorage.getItem('user') || {}),
    token: ref(localStorage.getItem('authToken') || null),
    isAuthenticated: !!this.token.value,
  }),

  actions: {
    setUser(user) {
      this.user = user
      this.isAuthenticated = true
      localStorage.setItem('user', JSON.stringify(user))
    },

    setToken(token) {
      this.token = token
      this.isAuthenticated = true
      localStorage.setItem('authToken', token)
    },

    logout() {
      this.user = null
      this.token = null
      this.isAuthenticated = false
      localStorage.removeItem('user')
      localStorage.removeItem('authToken')
    },
  },

  getters: {
    isLoggedIn: (state) => state.isAuthenticated,
    getUser: (state) => state.user,
  },
})
