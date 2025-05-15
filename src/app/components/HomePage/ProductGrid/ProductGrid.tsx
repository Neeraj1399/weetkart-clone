"use client";
import React, { useState, useEffect } from "react";
import styles from "./ProductGrid.module.css";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  thumbnail: string; // Ensure the thumbnail is part of the product data
};

const categories = ["LATEST", "WOMEN'S", "MEN'S"];

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState("LATEST");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        Shop Trendy & Comfortable Loungewear for Every Style – Explore Now!
      </h2>

      {/* Tabs */}
      <div className={styles.tabs}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.tab} ${
              activeCategory === cat ? styles.activeTab : ""
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      {loading ? (
        <p style={{ textAlign: "center" }}>Loading products...</p>
      ) : (
        <div className={styles.gridContainer}>
          {products.map((product) => (
            <div className={styles.productCard} key={product.id}>
              <div className={styles.discountTag}>
                {Math.round(product.discountPercentage)}% OFF
              </div>
              <Image
                src={product.thumbnail} // Using the thumbnail from dummyjson
                alt={product.title}
                width={300}
                height={400}
                className={styles.productImage}
              />
              <div className={styles.actions}>
                <button className={styles.selectButton}>SELECT OPTIONS</button>
              </div>
              <p className={styles.productName}>{product.title}</p>
              <p className={styles.price}>
                <span className={styles.originalPrice}>
                  ₹{(product.price + 200).toFixed(2)}
                </span>
                <span className={styles.salePrice}>₹{product.price}</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
