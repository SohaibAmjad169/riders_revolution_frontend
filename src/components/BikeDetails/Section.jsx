import PropTypes from 'prop-types'

const Section = ({ title, items }) => (
  <div className="mb-4 ">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <ul className="grid grid-cols-2 gap-4">
      {items.map((item, index) => (
        <li key={index} className="flex items-center">
          <span className="material-icons text-blue-500 mr-2">
            {item.icon ? <item.icon /> : ''}
          </span>
          <p>
            {item.label}: {item.value}
          </p>
        </li>
      ))}
    </ul>
  </div>
)

Section.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Section
