"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { FiSearch, FiHeart, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import styles from "./Header.module.css";
import Slider from "../Slider/Slider";
import WomensDropdown from "../Dropdown/Women/WomensDropdown";

const socialIcons = [
  { icon: <FaFacebookF />, link: "#" },
  { icon: <FaLinkedinIn />, link: "#" },
  { icon: <FaInstagram />, link: "#" },
  { icon: <FaTwitter />, link: "#" },
];

const navItems = [
  { label: "HOME", link: "/" },
  { label: "WOMENS", link: "/womens", dropdown: true },
  { label: "MENS", link: "/mens" },
  { label: "CHARACTER", link: "/character" },
  { label: "PRODUCT SHOWCASE", link: "/product-showcase" },
  { label: "ABOUT US", link: "/about" },
  { label: "CONTACT US", link: "/contact" },
];

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
    setActiveDropdown(null); // Close dropdowns when menu toggles
  };

  const isDropdownVisible = (label: string) => activeDropdown === label;

  return (
    <header className={styles.header}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.socialIcons}>
          {socialIcons.map(({ icon, link }, index) => (
            <a
              key={index}
              href={link}
              className={styles.icon}
              aria-label="Social link"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Centered Slider */}
        <div className={styles.sliderContainer}>
          <Slider />
        </div>

        {/* Login Button */}
        <Link href="/login" className={styles.loginButton} aria-label="Login">
          <FaUser /> Login
        </Link>
      </div>

      {/* Navigation Bar */}
      <nav className={styles.navBar} role="navigation">
        <Link href="/" className={styles.brand}>
          <Image
            src="https://weetkart.com/wp-content/uploads/weet-logo-2-png.avif"
            alt="Weet Loungewear"
            width={150}
            height={50}
            priority
          />
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          className={styles.menuToggle}
          onClick={handleMenuToggle}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <FiX className={styles.menuIcon} />
          ) : (
            <FiMenu className={styles.menuIcon} />
          )}
        </button>

        {/* Navigation Menu */}
        <ul className={`${styles.navMenu} ${menuOpen ? styles.showMenu : ""}`}>
          {navItems.map(({ label, link, dropdown }) => (
            <li
              key={label}
              className={styles.navItem}
              onMouseEnter={() => setActiveDropdown(label)}
              onMouseLeave={() => setActiveDropdown(null)}
              onClick={() => {
                if (!dropdown) setMenuOpen(false); // Close only for non-dropdown items
                setActiveDropdown(null);
              }}
            >
              <Link href={link}>{label}</Link>

              {/* Women's Dropdown Component */}
              {dropdown && label === "WOMENS" && (
                <WomensDropdown isVisible={isDropdownVisible(label)} />
              )}
            </li>
          ))}
        </ul>

        {/* Right Side Icons */}
        <div className={styles.icons}>
          <FiSearch className={styles.icon} aria-label="Search" />
          <FiHeart className={styles.icon} aria-label="Wishlist" />
          <FiShoppingBag className={styles.icon} aria-label="Cart" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
