import { ref } from 'vue'
import axios from 'axios'
import { useSpotifyStore } from '@/stores/spotifyStore'

function useFetch() {
  const spotifyStore = useSpotifyStore()
  const accessToken = spotifyStore.token

  const data = ref(null)
  const isLoading = ref(false)
  const error = ref(null)

  const fetchData = async (query = '') => {
    if (!accessToken) {
      console.log('Access Token Not Available')
      return {
        data: null,
        isLoading: false,
        error: 'Access Token Not Available',
      }
    }

    try {
      isLoading.value = true
      error.value = null
      data.value = null
      const response = await axios.get(`https://api.spotify.com/v1/${query}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })

      data.value = response.data
      console.log(data)
    } catch (err) {
      error.value = err.message || err
      console.error('Error while using useFetch: ', error.value)
    } finally {
      isLoading.value = false
    }

    return {
      data: data.value,
      isLoading: isLoading.value,
      error: error.value,
    }
  }

  return fetchData
}

export default useFetch
