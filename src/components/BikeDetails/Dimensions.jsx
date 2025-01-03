import PropTypes from 'prop-types'

const Dimensions = ({ DimensionsDetails }) => {
  return (
    <div className="mt-8 bg-white rounded-lg shadow-lg p-6 w-full max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Dimensions
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries({
          Length: `${DimensionsDetails.Length} mm`,
          Width: `${DimensionsDetails.Width} mm`,
          Height: `${DimensionsDetails.Height} mm`,
          Weight: `${DimensionsDetails.Weight} kg`,
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

Dimensions.propTypes = {
  DimensionsDetails: PropTypes.shape({
    Length: PropTypes.number.isRequired,
    Width: PropTypes.number.isRequired,
    Height: PropTypes.number.isRequired,
    Weight: PropTypes.number.isRequired,
  }).isRequired,
}

export default Dimensions
