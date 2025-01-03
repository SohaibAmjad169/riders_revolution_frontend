import PropTypes from 'prop-types'
import { BsFillFuelPumpFill } from 'react-icons/bs'
import { ImPowerCord } from 'react-icons/im'
import { IoSpeedometerSharp } from 'react-icons/io5'
import { PiEngineFill } from 'react-icons/pi'
import Performance from './Performance'
import Assembly from './Assembly'
import Dimensions from './Dimensions'

const BikeData = ({ bikeData }) => {
  return (
    <div className="mt-8 mx-auto bg-white rounded-lg shadow-lg p-6 w-full max-w-7xl">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Bike Specifications
      </h2>

      {/* Specifications Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Engine */}
        <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm">
          <PiEngineFill className="text-3xl text-blue-500" />
          <div>
            <h3 className="text-sm font-medium text-gray-700">Engine</h3>
            <span className="text-gray-600">{bikeData.Engine}</span>
          </div>
        </div>

        {/* Petrol Capacity */}
        <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm">
          <BsFillFuelPumpFill className="text-3xl text-green-500" />
          <div>
            <h3 className="text-sm font-medium text-gray-700">
              Petrol Capacity
            </h3>
            <span className="text-gray-600">
              {bikeData.PetrolCapacity} liters
            </span>
          </div>
        </div>

        {/* Starting */}
        <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm">
          <ImPowerCord className="text-3xl text-purple-500" />
          <div>
            <h3 className="text-sm font-medium text-gray-700">Starting</h3>
            <span className="text-gray-600">{bikeData.Starting}</span>
          </div>
        </div>

        {/* Transmission */}
        <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm">
          <IoSpeedometerSharp className="text-3xl text-red-500" />
          <div>
            <h3 className="text-sm font-medium text-gray-700">Transmission</h3>
            <span className="text-gray-600">{bikeData.Transmission}</span>
          </div>
        </div>
      </div>

      {/* Subcomponents */}
      <Performance PerformanceDetails={bikeData} />
      <Assembly AssemblyDetails={bikeData} />
      <Dimensions DimensionsDetails={bikeData} />
    </div>
  )
}

// Prop validation
BikeData.propTypes = {
  bikeData: PropTypes.shape({
    Engine: PropTypes.string.isRequired,
    PetrolCapacity: PropTypes.number.isRequired,
    Starting: PropTypes.string.isRequired,
    Transmission: PropTypes.string.isRequired,
    GroundClearance: PropTypes.number.isRequired,
    Displacement: PropTypes.number.isRequired,
    CompressionRatio: PropTypes.string.isRequired,
    BoreandStroke: PropTypes.string.isRequired,
    TyreFront: PropTypes.string.isRequired,
    TyreRear: PropTypes.string.isRequired,
    SeatHeight: PropTypes.number.isRequired,
    Length: PropTypes.number.isRequired,
    Width: PropTypes.number.isRequired,
    Height: PropTypes.number.isRequired,
    Weight: PropTypes.number.isRequired,
  }).isRequired,
}

export default BikeData
