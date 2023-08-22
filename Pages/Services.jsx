// import React from "react";
// import { FiCode, FiUsers, FiSettings, FiPackage } from "react-icons/fi";
// import { motion } from "framer-motion"; // Import Framer Motion
// import Card from "./Card";

// function CardsContainer() {
//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, staggerChildren: 0.2 }}
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//       >
//         <Card
//           icon={<FiCode className="text-white" />}
//           heading="Web Development"
//           text="Build modern websites using the latest technologies."
//           buttonText="Learn More"
//         />
//         <Card
//           icon={<FiUsers className="text-white" />}
//           heading="Community"
//           text="Connect with a global community of developers."
//           buttonText="Join Us"
//         />
//         <Card
//           icon={<FiSettings className="text-white" />}
//           heading="Customization"
//           text="Tailor solutions to fit your business needs."
//           buttonText="Explore"
//         />
//         <Card
//           icon={<FiPackage className="text-white" />}
//           heading="Packages"
//           text="Discover our tailored packages for businesses."
//           buttonText="View Packages"
//         />
//       </motion.div>
//     </div>
//   );
// }

// export default CardsContainer;


import React from "react";



const NotFound = () => {

  return (


      <div className="flex flex-col justify-center items-center gap-8 h-screen">
      <h1 className="text-6xl text_gradient font-bold" >Page not found</h1>
     
    </div>

    
  );
};

export default NotFound;

