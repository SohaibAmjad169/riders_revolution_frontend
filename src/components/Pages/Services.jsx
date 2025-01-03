import { useEffect, useState } from 'react'
import axios from 'axios'
import AddToCart from '../Services/AddToCart'
import SDK from '../../config'
import Spinner from '../loader/Spinner'

export default function ServicesPage() {
  const [services, setServices] = useState({
    maintenance: [],
    customization: [],
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          `${SDK.BASE_URL}/Service/GetServices`
        ) 

        if (response.status === 200) {
          const maintenance = response.data.filter(
            (service) => service.category === 'Maintenance'
          )
          const customization = response.data.filter(
            (service) => service.category === 'Customization'
          )

          setServices({
            maintenance,
            customization,
          })
        } else {
          setError('Failed to fetch services')
        }
      } catch (err) {
        setError('Server error')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])


  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6 ">
      <h1 className="text-4xl font-extrabold text-center mt-16 mb-12 text-gray-800">
        Our Services
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Maintenance Section */}
          <div className="flex-1">
            <h2 className="text-3xl font-semibold mb-6 text-blue-600">
              Maintenance
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {services.maintenance.map((service, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                    <p className="text-blue-500 font-semibold mt-3">
                      {service.price} PKR
                    </p>
                  </div>
                  <AddToCart _id={service._id} />
                </div>
              ))}
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-px bg-gray-300"></div>

          {/* Customization Section */}
          <div className="flex-1">
            <h2 className="text-3xl font-semibold mb-6 text-green-600">
              Customization
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {services.customization.map((service, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                    <p className="text-green-500 font-semibold mt-3">
                      {service.price} PKR
                    </p>
                  </div>
                  <AddToCart _id={service._id} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
