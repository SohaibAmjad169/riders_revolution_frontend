import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const FeatureCard = ({ number, title, description, delay }) => {
  return (
    <div
      className="flex flex-col items-center text-center p-6"
      data-aos="fade-up"
      data-aos-delay={delay} // Delay for staggered animation
      data-aos-duration="1000" // Duration of the animation
      data-aos-easing="ease-in-out" // Easing function for smoother animation
    >
      <div className="relative mb-4">
        <div className="text-9xl font-bold text-blue-500 opacity-20">
          {number}
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-blue-600">
          {number}
        </div>
      </div>
      <h3 className="text-3xl font-bold text-gray-900 mb-2 font-myFont2">
        {title}
      </h3>
      <p className="text-gray-600 font-myFont2 text-lg">{description}</p>
    </div>
  )
}

const FeaturesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration for each animation
      easing: 'ease-in-out', // Smooth easing for all animations
      once: true, // Ensures the animations happen once
    })
  }, [])

  const features = [
    {
      number: '1',
      title: 'DYNAMIC BIDDING SYSTEM',
      description:
        'Buy And Sell Bikes And Parts Effortlessly With Real-Time Updates',
      delay: '0', // No delay for the first card
    },
    {
      number: '2',
      title: 'TAILORED WORKSHOPS & EVENTS',
      description:
        'Thrilling Races And Immersive Workshops For All Skill Levels',
      delay: '500', // Delay for the second card (500ms after the first)
    },
    {
      number: '3',
      title: 'EXPERT MAINTENANCE & CUSTOMIZATION',
      description:
        'Certified Mechanics And Professional Customization Services',
      delay: '1000', // Delay for the third card (1000ms after the second)
    },
  ]

  return (
    <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          number={feature.number}
          title={feature.title}
          description={feature.description}
          delay={feature.delay}
        />
      ))}
    </div>
  )
}

export default FeaturesSection
