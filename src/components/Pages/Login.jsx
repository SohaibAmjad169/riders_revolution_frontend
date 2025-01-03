import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { loginUser } from '../../Functions/LoginUser'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { loginSuccess } from '../../../utils/Redux/Store/LoginSlice'
import { registerUser } from '../../Functions/SignUp'

function AuthModal() {
  const [activeTab, setActiveTab] = useState('login')
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue, // To reset fields on tab switch
  } = useForm()
  const dispatch = useDispatch() // Access the dispatch function

  // Handle tab switch
  const handleTabSwitch = (tab) => {
    setActiveTab(tab)
    setValue('email', '') // Reset fields when switching tabs
    setValue('password', '')
  }

  // Handle login submit
  const handleLoginSubmit = async (data) => {
    const { email, password } = data
    try {
      // Attempt login and get user details from Firebase
      const user = await loginUser(email, password)
      dispatch(loginSuccess(user)) // Dispatch login success action
      localStorage.setItem('user', JSON.stringify(user)) // Store user details in local storage
      console.log('User Logged In:', user)
    } catch (err) {
      console.log(err.message)
    }
  }

  // Handle signup submit
  const handleSignupSubmit = async (data) => {
    const { name, email, password } = data
    try {
      // Use the imported registerUser function
      const user = await registerUser(name, email, password)
      dispatch(loginSuccess(user)) // Dispatch login success action
      localStorage.setItem('user', JSON.stringify(user)) // Store user details in local storage
      toast.success('Signup Successful! Please login.')
    } catch (err) {
      toast.error(err.message || 'Signup failed')
    }
  }

  return (
    <div>
      {/* Modal */}
      <dialog id="auth_modal" className="modal">
        <div className="modal-box">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById('auth_modal').close()}
          >
            ✕
          </button>

          {/* Tabs */}
          <div className="tabs mb-4 flex justify-center">
            <button
              className={`tab tab-bordered ${
                activeTab === 'login' ? 'tab-active' : ''
              }`}
              onClick={() => handleTabSwitch('login')}
            >
              Login
            </button>
            <button
              className={`tab tab-bordered ${
                activeTab === 'signup' ? 'tab-active' : ''
              }`}
              onClick={() => handleTabSwitch('signup')}
            >
              Signup
            </button>
          </div>

          {/* Login Form */}
          {activeTab === 'login' && (
            <form onSubmit={handleSubmit(handleLoginSubmit)}>
              <h3 className="font-bold text-lg mb-4 text-center">Login</h3>
              <div className="space-y-4">
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border rounded-md outline-none"
                    {...register('email', { required: 'Email is required' })}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div>
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full px-3 py-2 border rounded-md outline-none"
                    {...register('password', {
                      required: 'Password is required',
                    })}
                  />
                  {errors.password && (
                    <span className="text-red-500 text-sm">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-pink-500 w-full py-2 text-white rounded-md hover:bg-pink-700 transition"
                >
                  Login
                </button>
              </div>
            </form>
          )}

          {/* Signup Form */}
          {activeTab === 'signup' && (
            <form onSubmit={handleSubmit(handleSignupSubmit)}>
              <h3 className="font-bold text-lg mb-4 text-center">Signup</h3>
              <div className="space-y-4">
                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-3 py-2 border rounded-md outline-none"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border rounded-md outline-none"
                    {...register('email', { required: 'Email is required' })}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div>
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full px-3 py-2 border rounded-md outline-none"
                    {...register('password', {
                      required: 'Password is required',
                    })}
                  />
                  {errors.password && (
                    <span className="text-red-500 text-sm">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-pink-500 w-full py-2 text-white rounded-md hover:bg-pink-700 transition"
                >
                  Signup
                </button>
              </div>
            </form>
          )}
        </div>
      </dialog>

      {/* Trigger Button */}
      <button
        className="btn bg-blue-500 text-white"
        onClick={() => document.getElementById('auth_modal').showModal()}
      >
        Login
      </button>
    </div>
  )
}

export default AuthModal
