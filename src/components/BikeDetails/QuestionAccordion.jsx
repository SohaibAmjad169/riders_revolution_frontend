import { useState } from 'react'
import PropTypes from 'prop-types'

const QuestionsAccordion = ({ questions }) => {
  const [accordionOpen, setAccordionOpen] = useState(null)

  const toggleAccordion = (index) => {
    setAccordionOpen(accordionOpen === index ? null : index)
  }

  return (
    <div className="mt-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Questions</h2>
      {questions.map((item, index) => (
        <div key={index} className="mb-4">
          <button
            className="w-full text-left bg-gray-200 p-3 rounded-lg focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.question}</span>
          </button>
          {accordionOpen === index && (
            <div className="mt-2 p-4 bg-gray-100 rounded-lg">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

QuestionsAccordion.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default QuestionsAccordion
