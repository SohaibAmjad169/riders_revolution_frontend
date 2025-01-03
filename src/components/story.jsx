const Story = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-screen-lg mx-auto px-6 space-y-16">
        {/* Our Story Section */}
        <div className="bg-blue-500 rounded-lg shadow-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h2>
          <p className="text-lg md:text-xl leading-relaxed">
            Founded by passionate bikers, Riders Revolution was born out of a
            desire to create a comprehensive platform that caters to all the
            needs of bike enthusiasts. From finding the perfect bike to getting
            the best customization, our platform offers it all.
          </p>
        </div>

        {/* Our Mission Section */}
        <div className="bg-blue-500 rounded-lg shadow-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg md:text-xl leading-relaxed">
            To revolutionize the biking experience for enthusiasts by providing
            a seamless platform for buying, selling, and customizing bikes, and
            connecting with the vibrant biking community.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Story
