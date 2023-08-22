import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when scrolling down
  const handleScroll = () => {
    if (window.scrollY > window.innerHeight * 0.4) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Attach event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      className={`back-to-top fixed bottom-5 right-5 p-4 rounded-full ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <FaArrowUp className="text-3xl text-white  bg-gradient-to-r from-primary to-secondary p-2 rounded-full" />
    </button>
  );
}

export default BackToTop;
