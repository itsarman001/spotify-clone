import { ref } from 'vue'
import { useSpotifyStore } from '@/stores/spotifyStore'
import axios from 'axios'

function useFetch() {
  const spotifyStore = useSpotifyStore()
  const accessToken = spotifyStore.token

  const data = ref({})
  const isLoading = ref(false)
  const error = ref(null)

  const fn = async (query = '') => {
    if (!accessToken) {
      console.log('Access Token Not Available')
      return
    }

    try {
      isLoading.value = true
      const response = await axios.get(`https://api.spotify.com/v1/${query}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })

      data.value = response.data
    } catch (err) {
      error.value = err.message || err
      console.log('Error while using useFetch: ', error.value)
    } finally {
      isLoading.value = false
    }
  }

  return { data, isLoading, error, fn }
}

export default useFetch
