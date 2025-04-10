"use client";
import React, { useState } from "react";
import styles from "./ProductGrid.module.css";
import Image from "next/image";

const categories = ["LATEST", "WOMEN'S", "MEN'S"];

const products = [
  {
    id: 1,
    name: "Men's Grey Inspire Tracksuit",
    price: 1479,
    originalPrice: 2099,
    discount: "30% OFF",
    image: "https://weetkart.com/wp-content/uploads/177-1-1-1634x2048.avif",
  },
  {
    id: 2,
    name: "Women’s Peach Full Sleeve Tracksuit",
    price: 1099,
    originalPrice: 2099,
    discount: "48% OFF",
    image: "https://weetkart.com/wp-content/uploads/177-1-1-1634x2048.avif",
  },
  {
    id: 3,
    name: "Men’s Navy Summer Set",
    price: 899,
    originalPrice: 1099,
    discount: "18% OFF",
    image: "https://weetkart.com/wp-content/uploads/177-1-1-1634x2048.avif",
  },
  {
    id: 4,
    name: "https://weetkart.com/wp-content/uploads/177-1-1-1634x2048.avif",
    price: 849,
    originalPrice: 1099,
    discount: "23% OFF",
    image: "https://weetkart.com/wp-content/uploads/177-1-1-1634x2048.avif",
  },
];

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState("LATEST");

  return (
    <div className={styles.container}>
      {/* Heading above images */}
      <h2 className={styles.heading}>
        Shop Trendy & Comfortable Loungewear for Every Style – Explore Weet
        Loungewear Now!
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
      <div className={styles.gridContainer}>
        {products.map((product) => (
          <div className={styles.productCard} key={product.id}>
            <div className={styles.discountTag}>{product.discount}</div>
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={400}
              className={styles.productImage}
            />
            <div className={styles.actions}>
              <button className={styles.selectButton}>SELECT OPTIONS</button>
            </div>
            <p className={styles.productName}>{product.name}</p>
            <p className={styles.price}>
              <span className={styles.originalPrice}>
                ₹ {product.originalPrice}.00
              </span>
              <span className={styles.salePrice}>₹ {product.price}.00</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
