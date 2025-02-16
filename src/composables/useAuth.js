import { ref } from 'vue'

const useAuth = () => {
  const authUrl = () => {
    const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID
    const redirectUri = import.meta.env.VITE_REDIRECT_URI
    const apiUrl = import.meta.env.VITE_APP_URL

    const scopes = [
      'user-read-playback-state',
      'user-modify-playback-state',
      'user-read-currently-playing',
      'user-read-email',
      'user-read-private',
      'user-read-playback-position',
      'user-top-read',
      'user-read-recently-played',
    ].join(' ')

    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token&show_dialog=true`
  }

  const storeAuthToken = () => {
    const storedToken = ref(localStorage.getItem('authToken') || '')
    const params = new URLSearchParams(window.location.hash.replace('#', '?'))
    const accessToken = params.get('access_token')

    if (accessToken && accessToken !== storedToken.value) {
      localStorage.setItem('authToken', accessToken)
      storedToken.value = accessToken
    }

    return storedToken
  }

  return { authUrl, storeAuthToken }
}

export default useAuth
