import { defineStore } from 'pinia'

export const useSpotifyStore = defineStore('spotify', {
  state: () => ({
    isAuthenticated: false,
    user: null,
    currentTrack: null,
    isPlaying: false,
    playlists: [],
  }),

  actions: {
    setUser(user) {
      this.user = user
      this.isAuthenticated = true
    },
    logout() {
      this.user = null
      this.isAuthenticated = false
    },
    setCurrentTrack(track) {
      this.currentTrack = track
      this.isPlaying = true
    },
    togglePlay() {
      this.isPlaying = !this.isPlaying
    },
    setPlaylists(playlists) {
      this.playlists = playlists
    },
  },

  getters: {
    isLoggedIn: (state) => state.isAuthenticated,

    currentTrackName: (state) => state.currentTrack?.name || 'No Track Playing',

    currentArtist: (state) => state.currentTrack?.artist || 'Unknown Artist',

    isTrackPlaying: (state) => !!state.currentTrack && state.isPlaying,

    totalPlaylists: (state) => state.playlists.length,

    firstPlaylist: (state) => (state.playlists.length > 0 ? state.playlists[0] : null),

    playlistNames: (state) => state.playlists.map((playlist) => playlist.name),
  },
})
