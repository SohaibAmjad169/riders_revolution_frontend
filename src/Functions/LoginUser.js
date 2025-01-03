import axios from 'axios'
import SDK from '../config'

export const loginUser = async (email, password) => {
  try {
    // Make a POST request to the backend login API
    const response = await axios.post(
      `${SDK.BASE_URL}/User/Login`,
      {
        Email: email, // Use dynamic user inputs
        Password: password,
      }
    )

    // Handle the successful login response
    console.log('Login Successful:', response.data)
    return response.data // This contains the user details from MongoDB
  } catch (error) {
    // Handle errors from the login API
    console.error(
      'Login Failed:',
      error.response?.data?.message || error.message
    )
    throw new Error(
      error.response?.data?.message || 'Login failed, please try again.'
    )
  }
}
