import PropTypes from 'prop-types'

const Assembly = ({ AssemblyDetails }) => {
  return (
    <div className="mt-8 bg-white rounded-lg shadow-lg p-6 w-full max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Assembly
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries({
          'Compression Ratio': AssemblyDetails.CompressionRatio,
          'Bore and Stroke': AssemblyDetails.BoreandStroke,
          'Tyre (Front)': AssemblyDetails.TyreFront,
          'Tyre (Rear)': AssemblyDetails.TyreRear,
          'Seat Height': `${AssemblyDetails.SeatHeight} mm`,
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

Assembly.propTypes = {
  AssemblyDetails: PropTypes.shape({
    CompressionRatio: PropTypes.string.isRequired,
    BoreandStroke: PropTypes.string.isRequired,
    TyreFront: PropTypes.string.isRequired,
    TyreRear: PropTypes.string.isRequired,
    SeatHeight: PropTypes.number.isRequired,
  }).isRequired,
}

export default Assembly
