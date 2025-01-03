import axios from 'axios'
import SDK from '../config'
/**
 * Fetch the user's cart by userId.
 * @param {string} userId - The ID of the user.
 * @param {function} setCart - Function to update the cart state.
 * @param {function} setLoading - Function to toggle loading state.
 * @param {function} setError - Function to handle error messages.
 */
export const getCartByUserId = async (userId) => {
  try {
    const response = await axios.get(
      `${SDK.BASE_URL}/Cart/UserCart?userId=${userId}`
    )

    if (response.status === 200) {
      // console.log('Cart Data', response.data.cart)
      return response.data.cart // Update cart state
    }
  } catch (error) {
    // console.error(error)
    console.log(error.response?.data?.error || 'Failed to fetch the cart.')
  }
}
