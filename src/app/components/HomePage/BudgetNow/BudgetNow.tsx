"use client";

import Image from "next/image";
import styles from "./BudgetNow.module.css";

const products = [
  {
    src: "https://weetkart.com/wp-content/uploads/2-21.avif",
  },
  {
    src: "https://weetkart.com/wp-content/uploads/3-20.avif",
  },
  {
    src: "https://weetkart.com/wp-content/uploads/4-17.avif",
  },
  {
    src: "https://weetkart.com/wp-content/uploads/5-17.avif",
  },
  {
    src: "https://weetkart.com/wp-content/uploads/tshirts-1.avif",
  },
  {
    src: "https://weetkart.com/wp-content/uploads/7-17.avif",
  },
  {
    src: "https://weetkart.com/wp-content/uploads/tshirts.avif",
  },
  {
    src: "https://weetkart.com/wp-content/uploads/9-17.avif",
  },
];

export default function BudgetNow() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Shop Under Budget Now!</h2>
      <div className={styles.grid}>
        {products.map((product, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={product.src}
              alt="Product Image"
              width={300}
              height={400}
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
