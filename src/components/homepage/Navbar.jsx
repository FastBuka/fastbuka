"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/fastbuka.png";
import "swiper/swiper-bundle.css";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.css";

export default function Navbar() {
  return (
    <div>
      <header id="header" className="sticky-top d-flex align-items-center">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto me-md-1">
            <Link href="/">
              <Image
                src={Logo}
                className="img-fluid"
                alt="Fastbuka"
                width={70}
                height={70}
              />
            </Link>
          </h1>

          <nav
            id="navbar"
            className="navbar order-last order-lg-0 mx-md-auto mx-lg-auto"
          >
            <ul>
              <li>
                <Link href="/" className="nav-link scrollto active">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="nav-link scrollto">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link href="/partners" className="nav-link scrollto">
                  Partner
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="nav-link scrollto">
                  About Us
                </Link>
              </li>
            </ul>

            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <div className="d-flex mx-3 d-none d-lg-block">
            <Link href="/login" className="text-decoration-none">
              <button className="btn nav-btn mx-1">Login</button>
            </Link>
            <Link href="/register" className="text-decoration-none">
              <button className="btn nav-btn mx-1">Register</button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
