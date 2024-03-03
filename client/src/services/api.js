import axios from 'axios'

const API_URL = 'http://localhost:8080/api'

export const fetchData = async (search, sortBy) => {
  try {
    const response = await axios.get(`${API_URL}/data`, {
      params: { search, sortBy },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching data:', error)
    return []
  }
}
