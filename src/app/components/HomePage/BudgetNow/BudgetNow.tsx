"use client";

import { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import Image from "next/image";
import styles from "./BudgetNow.module.css";

const BudgetNow = () => {
  type products = {
    id: number;
    title: string;
    thumbnail: string;
    // Add more fields as needed
  };
  const [products, setProducts] = useState<products[]>([]);

  useEffect(() => {
    // Use axios to fetch data
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products); // Set the fetched products from dummyjson
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Shop Under Budget Now!</h2>
      <div className={styles.grid}>
        {products.map((product, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={product.thumbnail} // Use the thumbnail from dummyjson
              alt={product.title}
              width={300}
              height={400}
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetNow;
