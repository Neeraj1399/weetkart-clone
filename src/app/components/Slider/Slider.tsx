// import { useState, useEffect } from "react";
// import styles from "./Slider.module.css";
// const Slider = () => {
//   const images = [
//     "https://weetkart.com/wp-content/uploads/1-25.avif",
//     "https://weetkart.com/wp-content/uploads/1-1-png.avif",
//     "https://weetkart.com/wp-content/uploads/2-2-png.avif",
//     "https://weetkart.com/wp-content/uploads/3-2-png.avif",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 1000); // Change every 1 second

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="w-full flex items-center justify-center bg-black py-2">
//       <img
//         src={images[currentIndex]}
//         alt="Slider Image"
//         className="h-12 md:h-16 lg:h-20 object-contain transition-opacity duration-500 ease-in-out"
//       />
//     </div>
//   );
// };

// export default Slider;

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Slider: React.FC = () => {
  const images: string[] = [
    "https://weetkart.com/wp-content/uploads/1-25.avif",
    "https://weetkart.com/wp-content/uploads/1-1-png.avif",
    "https://weetkart.com/wp-content/uploads/2-2-png.avif",
    "https://weetkart.com/wp-content/uploads/3-2-png.avif",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Slideshow changes every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]); // ✅ Included images.length in dependency array

  return (
    <div className="w-full flex items-center justify-center bg-black py-2">
      <Image
        src={images[currentIndex]}
        alt="Slider Image"
        width={120} // ✅ Adjust width
        height={40} // ✅ Adjust height
        className="h-12 md:h-16 lg:h-20 object-contain transition-opacity duration-500 ease-in-out"
        priority
      />
    </div>
  );
};

export default Slider;
