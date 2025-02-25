"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { FiSearch, FiHeart, FiShoppingBag } from "react-icons/fi";
import styles from "./Header.module.css";
import Slider from "../Slider/Slider";

const socialIcons = [
  { icon: <FaFacebookF />, link: "#" },
  { icon: <FaLinkedinIn />, link: "#" },
  { icon: <FaInstagram />, link: "#" },
  { icon: <FaTwitter />, link: "#" },
];

const navItems = [
  { label: "HOME", link: "/" },
  { label: "WOMENS", link: "/womens" },
  { label: "MENS", link: "/mens" },
  { label: "CHARACTER", link: "/character" },
  { label: "PRODUCT SHOWCASE", link: "/product-showcase" },
  { label: "ABOUT US", link: "/about" },
  { label: "CONTACT US", link: "/contact" },
];

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.socialIcons}>
          {socialIcons.map(({ icon, link }, index) => (
            <a key={index} href={link} className={styles.icon}>
              {icon}
            </a>
          ))}
        </div>
        <Slider></Slider>
        <Link href="/login" className={styles.loginButton}>
          <FaUser /> Login
        </Link>
      </div>
      <nav className={styles.navBar}>
        <Link href="/" className={styles.brand}>
          <Image
            src="https://weetkart.com/wp-content/uploads/weet-logo-2-png.avif"
            alt="Weet Loungewear"
            width={150}
            height={50}
            priority
          />
        </Link>
        <ul className={styles.navMenu}>
          {navItems.map(({ label, link }) => (
            <li key={label}>
              <Link href={link}>{label}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.icons}>
          <FiSearch />
          <FiHeart />
          <FiShoppingBag />
        </div>
      </nav>
    </header>
  );
};

export default Header;
