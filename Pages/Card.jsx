import React from "react";
import { motion } from "framer-motion";

const Card = ({ icon, heading, text, buttonText }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
      className="bg-white p-8 rounded-lg text-center"
    >
      <div className="text-4xl mb-4 text-blue-500">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{heading}</h3>
      <p className="text-gray-600 mb-4">{text}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
        {buttonText}
      </button>
    </motion.div>
  );
};

export default Card;
