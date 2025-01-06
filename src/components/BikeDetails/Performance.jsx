import PropTypes from 'prop-types'

const Performance = ({ PerformanceDetails }) => {
  return (
    <div className="mt-8 bg-white rounded-lg shadow-lg p-6 w-full max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Performance
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries({
          Displacement: `${PerformanceDetails.displacement} cc`,
          'Ground Clearance': `${PerformanceDetails.groundClearance} mm`,
          'Top Speed': `${PerformanceDetails.topSpeed || 'N/A'} km/h`,
        }).map(([label, value]) => (
          <div
            key={label}
            className="flex flex-col items-start bg-gray-50 p-4 rounded-lg shadow-sm"
          >
            <h3 className="text-sm font-medium text-gray-700">{label}</h3>
            <span className="text-gray-600">{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

Performance.propTypes = {
  PerformanceDetails: PropTypes.shape({
    displacement: PropTypes.number.isRequired,
    groundClearance: PropTypes.number.isRequired,
    topSpeed: PropTypes.number, // Optional, as it may not always be available
  }).isRequired,
}

export default Performance
