import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const UserSellBike = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user?.Name || "User";

  const [questions, setQuestions] = useState([{ question: "", answer: "" }]);

  const formik = useFormik({
    initialValues: {
      bikeName: "",
      price: "",
      rating: "",
      engine: "",
      condition: "",
      images: [],
    },
    validationSchema: Yup.object({
      bikeName: Yup.string().required("Bike name is required"),
      price: Yup.number()
        .typeError("Price must be a number")
        .required("Price is required"),
      rating: Yup.number()
        .min(1, "Rating must be between 1 and 5")
        .max(5, "Rating must be between 1 and 5")
        .required("Rating is required"),
      engine: Yup.string().required("Engine is required"),
      condition: Yup.string().required("Condition is required"),
    }),
    onSubmit: (values) => {

      const bikeData = {
        name: values.bikeName,
        price: values.price,
        rating: values.rating,
        engine: values.engine,
        condition: values.condition,
        userName,
        imageUrl: values.images,
        petrolCapacity: 13,
        starting: "Electric/Kick Start",
        transmission: "5-Speed",
        groundClearance: 160,
        displacement: 125,
        compressionRatio: "10.0:1",
        boreAndStroke: "54.0 x 54.0 mm",
        tyreFront: "2.75 – 18",
        tyreRear: "90/90 – 18",
        seatHeight: 775,
        length: 2005,
        width: 760,
        height: 1110,
        weight: 130,
      };
     
      const dataToSend = {
        bikeData: bikeData,
        images: values.images.map((file) => ({
          fileName: file.name,
          fileData: file,
        })),
      };

      console.log(dataToSend);
      console.log(bikeData);
    
    },
  });

  // Handle file upload
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files); 
    formik.setFieldValue("imageUrl", files); 
  };

  // Add a new question
  const addQuestion = () => {
    setQuestions([...questions, { question: "", answer: "" }]);
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
            className={`w-full px-4 py-2 border ${formik.errors.bikeName && formik.touched.bikeName ? "border-red-500" : "border-gray-300"} rounded-md text-gray-800`}
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
            className={`w-full px-4 py-2 border ${formik.errors.price && formik.touched.price ? "border-red-500" : "border-gray-300"} rounded-md text-gray-800`}
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
            min="1"
            max="5"
            placeholder="Enter rating (1-5)"
            className={`w-full px-4 py-2 border ${formik.errors.rating && formik.touched.rating ? "border-red-500" : "border-gray-300"} rounded-md text-gray-800`}
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
            placeholder="Enter engine type"
            className={`w-full px-4 py-2 border ${formik.errors.engine && formik.touched.engine ? "border-red-500" : "border-gray-300"} rounded-md text-gray-800`}
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
            className={`w-full px-4 py-2 border ${formik.errors.condition && formik.touched.condition ? "border-red-500" : "border-gray-300"} rounded-md text-gray-800`}
            value={formik.values.condition}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select condition</option>
            <option value="New">New</option>
            <option value="Old">Old</option>
          </select>
          {formik.errors.condition && formik.touched.condition && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.condition}</p>
          )}
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Upload Images</label>
          <input
            type="file"
            name="images"
            multiple
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800"
            onChange={handleImageUpload}
          />
          {formik.errors.images && formik.touched.images && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.images}</p>
          )}
        </div>

        {/* Questions Section */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium">
            Questions & Answers
          </label>
          {questions.map((q, index) => (
            <div key={index} className="mb-4 flex gap-4">
              <input
                type="text"
                placeholder="Question"
                className="w-1/2 px-4 py-2 border border-gray-300 rounded-md"
                value={q.question}
                onChange={(e) =>
                  handleQuestionChange(index, "question", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Answer"
                className="w-1/2 px-4 py-2 border border-gray-300 rounded-md"
                value={q.answer}
                onChange={(e) =>
                  handleQuestionChange(index, "answer", e.target.value)
                }
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addQuestion}
            className="px-4 py-2 bg-blue-500 text-white rounded-md mt-2"
          >
            Add Another Question
          </button>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserSellBike;
