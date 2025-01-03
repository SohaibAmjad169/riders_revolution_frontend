import Form from '../Form'

const ContactUs = () => {
  return (
    <div className="container mx-auto p-4 mt-24">
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-6 md:gap-12">
        {/* Contact Info */}
        <div className="w-full md:w-1/2 lg:w-1/3">
          <div className="bg-gray-100 rounded-lg p-6 mb-6 hover:scale-105 transition duration-200">
            <h2 className="font-semibold text-xl mb-4">Phone Number</h2>
            <p>+92-4567-890</p>
            <p>+92-2223-333</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 mb-6 hover:scale-105 transition duration-200">
            <h2 className="font-semibold text-xl mb-4">Email</h2>
            <p>ridersrevolution@gmail.com</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 mb-6 hover:scale-105 transition duration-200">
            <h2 className="font-semibold text-xl mb-4">Address</h2>
            <p>Lahore, Punjab, Pakistan</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 lg:w-1/3">
          <Form />
        </div>
      </div>
    </div>
  )
}

export default ContactUs
