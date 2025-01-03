import { useEffect, useState } from 'react'
import { createOrder } from '../../Functions/CreateOrder'
import { useSelector } from 'react-redux'
import { getCartByUserId } from '../../Functions/GetCart'
import { useNavigate } from 'react-router-dom'

const OrderForm = () => {
  const Navigate = useNavigate()
  const User = useSelector((state) => state.Auth)
  const [CartData, setCartData] = useState(null) // Initialize as null
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    userId: '',
    Cart: '',
    ShippingAddress: {
      street: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
    },
    PaymentMethod: 'Cash On Delivery',
    TotalAmount: 0,
    Notes: '',
  })

  const fetchCartData = async () => {
    try {
      if (User.user) {
        const data = await getCartByUserId(User.user._id)
        if (data) {
          setCartData(data)
          setFormData((prev) => ({
            ...prev,
            userId: User.user._id,
            Cart: data._id,
            TotalAmount: data.totalPrice,
          }))
        }
      }
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchCartData()
  }, [User]) // Run when User changes

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle nested ShippingAddress changes
  const handleAddressChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      ShippingAddress: {
        ...prev.ShippingAddress,
        [name]: value,
      },
    }))
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const Id = await createOrder(formData)
      if (Id) {
        alert('Order placed successfully!')
        Navigate(`/PostOrder/${Id}`)
      }
    } catch (err) {
      console.error(err)
      alert('Failed to place order.')
    }
  }

  if (!CartData) {
    return <div>Loading cart data...</div>
  }

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white my-20 rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold mb-4">Create Order</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="Name"
          placeholder="Full Name"
          value={formData.Name}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
        <input
          type="email"
          name="Email"
          placeholder="Email"
          value={formData.Email}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
        {/* <input
          type="text"
          name="userId"
          placeholder="User ID"
          value={formData.userId}
          className="w-full border rounded p-2"
          readOnly
        /> */}
        {/* <input
          type="number"
          name="TotalAmount"
          placeholder="Total Amount"
          value={formData.TotalAmount}
          className="w-full border rounded p-2"
          readOnly
        /> */}
        <textarea
          name="Notes"
          placeholder="Additional Notes (optional)"
          value={formData.Notes}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />

        <h3 className="text-lg font-semibold">Shipping Address</h3>
        <input
          type="text"
          name="street"
          placeholder="Street"
          value={formData.ShippingAddress.street}
          onChange={handleAddressChange}
          className="w-full border rounded p-2"
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.ShippingAddress.city}
          onChange={handleAddressChange}
          className="w-full border rounded p-2"
          required
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.ShippingAddress.state}
          onChange={handleAddressChange}
          className="w-full border rounded p-2"
          required
        />
        <input
          type="text"
          name="postalCode"
          placeholder="Postal Code"
          value={formData.ShippingAddress.postalCode}
          onChange={handleAddressChange}
          className="w-full border rounded p-2"
          required
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.ShippingAddress.country}
          onChange={handleAddressChange}
          className="w-full border rounded p-2"
          required
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Place Order
        </button>
      </form>
    </div>
  )
}

export default OrderForm
