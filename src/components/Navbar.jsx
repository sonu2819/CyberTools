"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        ⚡ CyberTools
      </div>

      <input
        type="checkbox"
        id="menu-toggle"
      />

      <label
        htmlFor="menu-toggle"
        className="hamburger"
      >
        ☰
      </label>

      <div className="menu">

        <Link href="/">
          Home
        </Link>

        <Link href="/#tools">
          Tools
        </Link>

        <Link href="/about">
          About
        </Link>

        <Link href="/contact">
          Contact
        </Link>

      </div>

    </header>
  );
}