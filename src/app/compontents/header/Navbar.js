// components/Navbar.js
'use client';
import "../header/Navbar.css";
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Resume', href: '/resume' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <div className="header-container">
      <div className="logo-container">
        <Link href="/">
          <Image
            width={200}
            height={200}
            className="logo-image"
            src="/images/bits-of-progress-logo.png"
            alt="Logo Image BOP"
          />
        </Link>
      </div>

      <button
        className={`hamburger-menu ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </button>

      {/* Desktop Navigation */}
      <div className="nav-wrapper">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.name} className="nav-item">
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-list">
          {navItems.map((item) => (
            <li key={item.name} className="mobile-nav-item">
              <Link href={item.href} onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}