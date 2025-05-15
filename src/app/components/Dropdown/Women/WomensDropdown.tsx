// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import styles from "./WomensDropdown.module.css"; // Ensure styles are correctly defined

// const womensDropdownData = {
//   categories: [
//     {
//       title: "NIGHTWEAR",
//       type: "bigBold",
//       items: [
//         "Co-Ord Set",
//         "Pyjama Set",
//         "Shirt & Pyjama Set",
//         "Shorts Set",
//         "Short Nighty",
//       ],
//     },
//     {
//       title: "TOPWEAR",
//       type: "bigBold",
//       items: ["Casual Tshirts", "Long Length Tshirt", "Sweatshirt"],
//     },
//     { title: "BOTTOM", type: "bigBold", items: ["Pyjama", "Shorts"] },
//     { title: "ACTIVEWEAR", type: "bigBold", items: ["Tracksuit"] },
//   ],
//   image: "https://weetkart.com/wp-content/uploads/180-2-400x500.avif", // Ensure it's a valid URL
//   discount: "17% OFF",
//   productName: "Ladies Short Nighty",
//   oldPrice: "₹ 899.00",
//   newPrice: "₹ 749.00",
// };

// interface WomensDropdownProps {
//   isVisible: boolean;
// }

// const WomensDropdown: React.FC<WomensDropdownProps> = ({ isVisible }) => {
//   if (!isVisible) return null; // Don't render if not visible

//   return (
//     <div className={styles.dropdownMenu}>
//       {/* Left Side: Category List */}
//       <div className={styles.dropdownContent}>
//         {womensDropdownData.categories.map((category, idx) => (
//           <div key={idx} className={styles.dropdownColumn}>
//             <h4
//               className={
//                 category.type === "bigBold"
//                   ? styles.categoryTitleBig
//                   : styles.categoryTitle
//               }
//             >
//               {category.title}
//             </h4>
//             {category.items.length > 0 && ( // Prevent rendering empty <ul>
//               <ul>
//                 {category.items.map((item, i) => (
//                   <li key={i}>
//                     <Link
//                       href={`/womens/${item.toLowerCase().replace(/ /g, "-")}`}
//                       passHref
//                       legacyBehavior
//                     >
//                       <a className={styles.dropdownItem}>{item}</a>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Right Side: Product Display */}
//       <div className={styles.dropdownImage}>
//         <div className={styles.productCard}>
//           {womensDropdownData.discount && (
//             <span className={styles.discountTag} aria-hidden="true">
//               {womensDropdownData.discount}
//             </span>
//           )}
//           <Image
//             src={womensDropdownData.image}
//             alt={`${womensDropdownData.productName} - Buy Now`}
//             width={150}
//             height={200}
//             className={styles.productImage}
//             priority
//           />
//           <div className={styles.productInfo}>
//             <p className={styles.productName}>
//               {womensDropdownData.productName}
//             </p>
//             <p className={styles.productPrice}>
//               <span className={styles.oldPrice}>
//                 {womensDropdownData.oldPrice}
//               </span>
//               <span className={styles.newPrice}>
//                 {womensDropdownData.newPrice}
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WomensDropdown;

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./WomensDropdown.module.css"; // Ensure styles are correctly defined

const womensDropdownData = {
  categories: [
    {
      title: "NIGHTWEAR",
      type: "bigBold",
      items: [
        "Co-Ord Set",
        "Pyjama Set",
        "Shirt & Pyjama Set",
        "Shorts Set",
        "Short Nighty",
      ],
    },
    {
      title: "TOPWEAR",
      type: "bigBold",
      items: ["Casual Tshirts", "Long Length Tshirt", "Sweatshirt"],
    },
    { title: "BOTTOM", type: "bigBold", items: ["Pyjama", "Shorts"] },
    { title: "ACTIVEWEAR", type: "bigBold", items: ["Tracksuit"] },
  ],
  image: "https://weetkart.com/wp-content/uploads/180-2-400x500.avif", // Ensure it's a valid URL
  discount: "17% OFF",
  productName: "Ladies Short Nighty",
  oldPrice: "₹ 899.00",
  newPrice: "₹ 749.00",
};

interface WomensDropdownProps {
  isVisible: boolean;
}

const WomensDropdown: React.FC<WomensDropdownProps> = ({ isVisible }) => {
  if (!isVisible) return null; // Don't render if not visible

  return (
    <div className={styles.dropdownMenu}>
      {/* Left Side: Category List */}
      <div className={styles.dropdownContent}>
        {womensDropdownData.categories.map((category, idx) => (
          <div key={idx} className={styles.dropdownColumn}>
            <h4
              className={
                category.type === "bigBold"
                  ? styles.categoryTitleBig
                  : styles.categoryTitle
              }
            >
              {category.title}
            </h4>
            {category.items.length > 0 && ( // Prevent rendering empty <ul>
              <ul>
                {category.items.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={`/womens/${item.toLowerCase().replace(/ /g, "-")}`}
                      className={styles.dropdownItem} // Styling directly applied
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Right Side: Product Display */}
      <div className={styles.dropdownImage}>
        <div className={styles.productCard}>
          {womensDropdownData.discount && (
            <span className={styles.discountTag} aria-hidden="true">
              {womensDropdownData.discount}
            </span>
          )}
          <Image
            src={womensDropdownData.image}
            alt={`${womensDropdownData.productName} - Buy Now`}
            width={150}
            height={200}
            className={styles.productImage}
            priority
          />
          <div className={styles.productInfo}>
            <p className={styles.productName}>
              {womensDropdownData.productName}
            </p>
            <p className={styles.productPrice}>
              <span className={styles.oldPrice}>
                {womensDropdownData.oldPrice}
              </span>
              <span className={styles.newPrice}>
                {womensDropdownData.newPrice}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomensDropdown;
