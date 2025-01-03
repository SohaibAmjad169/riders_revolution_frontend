import axios from 'axios'
import SDK from '../config'

export async function fetchSingleOrder(orderId) {
  try {
    // Make a GET request to the API using Axios
    const response = await axios.get(
      `${SDK.BASE_URL}/Order/GetSingleOrder?id=${orderId}`
    )

    // Return the response data
    console.log('Order Data :', response.data.Order)
    console.log('Cart Data :', response.data.Cart)
    return response.data
  } catch (error) {
    // Handle errors
    if (error.response) {
      // Server responded with a status code outside the 2xx range
      throw new Error(
        error.response.data.error || 'Failed to fetch order details'
      )
    } else if (error.request) {
      // Request was made but no response was received
      throw new Error('No response received from the server')
    } else {
      // Something else happened
      throw new Error(error.message || 'An unknown error occurred')
    }
  }
}
