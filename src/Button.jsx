import React from 'react';

const Button = ({ label, onClick }) => {
  return (
   <button  className="inline-block text-white text-sm sm:text-base px-4 py-[.4em] bg-gradient-to-r from-primary to-secondary rounded-[7px] hover:shadow-md active:scale-90 duration-200">
    {label}
   </button>
  );
};

export default Button;



