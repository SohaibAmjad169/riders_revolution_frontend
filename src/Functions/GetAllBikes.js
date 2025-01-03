import axios from 'axios'
import SDK from '../config'

export const FetchBikes = async () => {
  try {
    const response = await axios.get(
      `${SDK.BASE_URL}/Bike/GetAllBikes`
    )
    if (response.status === 200) {
      console.log('Fetched Bikes:', response.data.bikes)
      return response.data.bikes
    } else {
      console.error('Unexpected response status:', response.status)
      return []
    }
  } catch (error) {
    console.error('Error fetching the bikes:', error.message)
    return []
  }
}
