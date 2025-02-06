const useAuth = () => {
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

  const authUrl = () =>
    (window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token&show_daialog=true;`)

  return authUrl
}

export default useAuth
