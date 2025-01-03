import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const UserSellBike = () => {
  const [questions, setQuestions] = useState([]);

  const formik = useFormik({
    initialValues: {
      bikeName: '',
      price: '',
      rating: '',
      engine: '',
      condition: '',
      running: '',
      images: [],
    },
    validationSchema: Yup.object({
      bikeName: Yup.string().required('Bike name is required'),
      price: Yup.number()
        .typeError('Price must be a number')
        .required('Price is required'),
      rating: Yup.number()
        .min(1, 'Rating must be between 1 and 5')
        .max(5, 'Rating must be between 1 and 5')
        .required('Rating is required'),
      engine: Yup.string().required('Engine is required'),
      condition: Yup.string().required('Condition is required'),
      running: Yup.string().required('Running status is required'),
      images: Yup.array().min(1, 'Please upload at least one image'),
    }),
    onSubmit: (values) => {
      const data = { ...values, questions };
      console.log('Form Data:', data);
      alert('Form submitted successfully');
    },
  });

  // Handle file upload
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    formik.setFieldValue('images', files);
  };

  // Add a new question and answer input
  const addQuestion = () => {
    setQuestions([...questions, { question: '', answer: '' }]);
  };

  // Update question or answer value
  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  return (
    <div className="max-w-4xl mx-auto mt-24 p-6 bg-white shadow-lg rounded-lg font-sans">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Sell Your Bike
      </h1>
      <form onSubmit={formik.handleSubmit}>
        {/* Bike Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Bike Name</label>
          <input
            type="text"
            name="bikeName"
            placeholder="Enter bike name"
            className={`w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md text-gray-800 shadow-sm ${
              formik.errors.bikeName && formik.touched.bikeName
                ? 'border-red-500'
                : 'border-gray-300'
            }`}
            value={formik.values.bikeName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.bikeName && formik.touched.bikeName && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.bikeName}</p>
          )}
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Price (PKR)</label>
          <input
            type="number"
            name="price"
            placeholder="Enter price"
            className={`w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md text-gray-800 shadow-sm ${
              formik.errors.price && formik.touched.price
                ? 'border-red-500'
                : 'border-gray-300'
            }`}
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.price && formik.touched.price && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.price}</p>
          )}
        </div>

        {/* Rating */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Rating</label>
          <input
            type="number"
            name="rating"
            placeholder="Enter rating (1-5)"
            className={`w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md text-gray-800 shadow-sm ${
              formik.errors.rating && formik.touched.rating
                ? 'border-red-500'
                : 'border-gray-300'
            }`}
            value={formik.values.rating}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.rating && formik.touched.rating && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.rating}</p>
          )}
        </div>

        {/* Engine */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Engine</label>
          <input
            type="text"
            name="engine"
            placeholder="Enter engine details"
            className={`w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md text-gray-800 shadow-sm ${
              formik.errors.engine && formik.touched.engine
                ? 'border-red-500'
                : 'border-gray-300'
            }`}
            value={formik.values.engine}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.engine && formik.touched.engine && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.engine}</p>
          )}
        </div>

        {/* Condition */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Condition</label>
          <select
            name="condition"
            className={`w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md text-gray-800 shadow-sm ${
              formik.errors.condition && formik.touched.condition
                ? 'border-red-500'
                : 'border-gray-300'
            }`}
            value={formik.values.condition}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select Condition</option>
            <option value="New">New</option>
            <option value="Old">Old</option>
          </select>
          {formik.errors.condition && formik.touched.condition && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.condition}</p>
          )}
        </div>

        {/* Running */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Running (KM)</label>
          <input
            type="text"
            name="running"
            placeholder="Enter running in KM"
            className={`w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md text-gray-800 shadow-sm ${
              formik.errors.running && formik.touched.running
                ? 'border-red-500'
                : 'border-gray-300'
            }`}
            value={formik.values.running}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.running && formik.touched.running && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.running}</p>
          )}
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Upload Images</label>
          <input
            type="file"
            name="images"
            multiple
            accept="image/*"
            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md text-gray-800 shadow-sm"
            onChange={handleImageUpload}
          />
          {formik.errors.images && formik.touched.images && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.images}</p>
          )}
          <div className="grid grid-cols-3 gap-4 mt-4">
            {formik.values.images &&
              formik.values.images.map((file, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(file)}
                  alt={`Preview ${index}`}
                  className="w-full h-32 object-cover rounded-md shadow-md"
                />
              ))}
          </div>
        </div>

        {/* Questions */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium">Questions & Answers</label>
          {questions.map((q, index) => (
            <div key={index} className="mb-4 flex gap-4">
              <input
                type="text"
                placeholder="Question"
                className="w-1/2 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md text-gray-800 shadow-sm"
                value={q.question}
                onChange={(e) =>
                  handleQuestionChange(index, 'question', e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Answer"
                className="w-1/2 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md text-gray-800 shadow-sm"
                value={q.answer}
                onChange={(e) =>
                  handleQuestionChange(index, 'answer', e.target.value)
                }
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addQuestion}
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add Question
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserSellBike;
