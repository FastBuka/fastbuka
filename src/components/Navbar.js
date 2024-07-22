// components/NavbarScript.jsx
"use client";

import { useEffect } from "react";
import Swiper from "swiper";
import Isotope from "isotope-layout";
import GLightbox from "glightbox";
import AOS from "aos";
import PureCounter from "@srexi/purecounterjs";

const NavbarScript = () => {
    useEffect(() => {
      const select = (el, all = false) => {
        el = el.trim();
        if (all) {
          return [...document.querySelectorAll(el)];
        } else {
          return document.querySelector(el);
        }
      };
  
      const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all);
        if (selectEl) {
          if (all) {
            selectEl.forEach((e) => e.addEventListener(type, listener));
          } else {
            selectEl.addEventListener(type, listener);
          }
        }
      };
  
      on("click", ".mobile-nav-toggle", function (e) {
        const navbar = select("#navbar");
        navbar.classList.toggle("navbar-mobile");
        this.classList.toggle("bi-list");
        this.classList.toggle("bi-x");
      });
    }, []);
  
    return null;
  };

export default NavbarScript;
