// import { useState, useEffect } from "react";

// const Slider = () => {
//   const images = ["/Slider1.png", "/Slider2.png", "/Slider3.png"];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 1000); // Change every 1 second

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="w-full flex justify-center bg-black py-2">
//       <img src={images[currentIndex]} alt="Slider Image" className="h-12" />
//     </div>
//   );
// };

// export default Slider;

import { useState, useEffect } from "react";

const Slider = () => {
  const images = [
    "https://weetkart.com/wp-content/uploads/1-25.avif",
    "https://weetkart.com/wp-content/uploads/1-1-png.avif",
    "https://weetkart.com/wp-content/uploads/2-2-png.avif",
    "https://weetkart.com/wp-content/uploads/3-2-png.avif",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black py-2 flex justify-center">
      <img
        src={images[currentIndex]}
        alt="Slider Image"
        className="h-12 transition-opacity duration-500 ease-in-out"
      />
    </div>
  );
};

export default Slider;
