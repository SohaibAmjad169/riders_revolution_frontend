import { useFormik } from 'formik'
import * as Yup from 'yup'

const Form = () => {
  // Formik initialization with validation schema
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      subject: Yup.string().required('Subject is required'),
      message: Yup.string().required('Message is required')
    }),
    onSubmit: async (values) => {
      const json = JSON.stringify(values)
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      }).then((res) => res.json())

      if (res.success) {
        console.log('Success', res)
        alert('Sent successfully!')
        formik.resetForm() // Reset form on success
      } else {
        alert('Something went wrong, please try again.')
      }
    },
  })

  return (
    <div>
      <h2 className="text-4xl font-bold text-grey-900 my-16 text-center">
        Contact{' '}
        <span className="relative inline-block">
          Us
          <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-400 -z-10"></span>
        </span>
      </h2>
      <h2 className="text-3xl font-Poppins text-grey-900 my-12 text-center">
        Get in Touch
      </h2>
      <form onSubmit={formik.handleSubmit}>
        {/* Name Field */}
        <div className="mx-12 my-8">
          <label className="block text-sm font-medium text-gray-700">
            Your Name
            <input
              type="text"
              className={`mt-2 w-full px-6 py-3 border ${formik.errors.name && formik.touched.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300`}
              name="name"
              placeholder="Your Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.errors.name && formik.touched.name && (
              <p className="text-red-500 text-xs mt-2">{formik.errors.name}</p>
            )}
          </label>
        </div>

        {/* Email Field */}
        <div className="mx-12 my-8">
          <label className="block text-sm font-medium text-gray-700">
            Your Email
            <input
              type="text"
              className={`mt-2 w-full px-6 py-3 border ${formik.errors.email && formik.touched.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300`}
              name="email"
              placeholder="Your Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.errors.email && formik.touched.email && (
              <p className="text-red-500 text-xs mt-2">{formik.errors.email}</p>
            )}
          </label>
        </div>

        {/* Subject Field */}
        <div className="mx-12 my-8">
          <label className="block text-sm font-medium text-gray-700">
            Subject
            <input
              type="text"
              className={`mt-2 w-full px-6 py-3 border ${formik.errors.subject && formik.touched.subject ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300`}
              name="subject"
              placeholder="Subject"
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.errors.subject && formik.touched.subject && (
              <p className="text-red-500 text-xs mt-2">{formik.errors.subject}</p>
            )}
          </label>
        </div>

        {/* Message Field */}
        <div className="mx-12 my-8">
          <label className="block text-sm font-medium text-gray-700">
            Your Message
            <textarea
              className={`mt-2 w-full px-6 py-3 border ${formik.errors.message && formik.touched.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300`}
              name="message"
              placeholder="Your Message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.errors.message && formik.touched.message && (
              <p className="text-red-500 text-xs mt-2">{formik.errors.message}</p>
            )}
          </label>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-gray-100 md:text-xl font-Poppins text-sky-500 rounded hover:bg-sky-500 hover:text-white transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
