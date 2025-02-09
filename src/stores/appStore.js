import { defineStore } from 'pinia'

export const useSpotifyStore = defineStore('spotify', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || {},
    token: localStorage.getItem('authToken'),
    isAuthenticated: !!localStorage.getItem('authToken'),
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
      this.user = {}
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
