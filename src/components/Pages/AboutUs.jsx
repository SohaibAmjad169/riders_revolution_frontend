// src/components/AboutUs.jsx

import Story from '../story'
import Form from '../Form'

const AboutUs = () => {
  return (
    <div>
      <section
        className="h-auto md:h-screen bg-cover bg-center mt-20 flex items-center py-12"
        style={{ backgroundImage: "url('./about banner-01.jpg')" }}
      >
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center px-6 md:px-12 gap-8">
          {/* Round Image */}
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
            <img
              src="./about .jpg" // Replace with your actual image path
              alt="About Riders Revolution"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Box with Colored Background */}
          <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 flex flex-col justify-center text-center md:text-left w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 font-bold text-gray-800">
              About Riders Revolution
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
              Discover the story behind the ultimate ride experience
              marketplace.
            </p>
          </div>
        </div>
      </section>

      <Story />
      <Form />
    </div>
  )
}

export default AboutUs
