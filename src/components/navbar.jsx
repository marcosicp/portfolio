import React, { useState, useEffect, useRef } from "react";

import logo1 from "../img/male1.png";
import logo2 from "../img/male.png";

function Navbar() {
  const [logo, setLogo] = useState(logo1);
  const navRef = useRef(null);

  useEffect(() => {
    const navHeight = navRef.current ? navRef.current.offsetHeight : 0;

    // Toggle navbar-reduce when mobile toggler is clicked
    const toggler = document.querySelector(".navbar-toggler");
    function handleTogglerClick() {
      const mainNav = document.getElementById("mainNav");
      if (mainNav && !mainNav.classList.contains("navbar-reduce")) {
        mainNav.classList.add("navbar-reduce");
      }
    }
    toggler?.addEventListener("click", handleTogglerClick);

    // Collapse navbar on nav link click
    function handleNavLinkClick() {
      const collapse = document.querySelector(".navbar-collapse");
      collapse?.classList.remove("show");
    }
    const jsScrollLinks = document.querySelectorAll(".js-scroll");
    jsScrollLinks.forEach((link) => link.addEventListener("click", handleNavLinkClick));

    // Smooth scroll for anchor links
    function handleSmoothScroll(e) {
      const href = this.getAttribute("href");
      if (!href || !href.startsWith("#") || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight + 5;
      window.scrollTo({ top, behavior: "smooth" });
    }
    const anchorLinks = document.querySelectorAll('a.js-scroll[href*="#"]:not([href="#"])');
    anchorLinks.forEach((link) => link.addEventListener("click", handleSmoothScroll));

    // Scroll-based style swap
    function handleScroll() {
      const navbar = document.querySelector(".navbar-expand-md");
      if (!navbar) return;
      if (window.pageYOffset > 50) {
        navbar.classList.add("navbar-reduce");
        navbar.classList.remove("navbar-trans");
        setLogo(logo2);
      } else {
        navbar.classList.add("navbar-trans");
        navbar.classList.remove("navbar-reduce");
        setLogo(logo1);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      toggler?.removeEventListener("click", handleTogglerClick);
      jsScrollLinks.forEach((link) => link.removeEventListener("click", handleNavLinkClick));
      anchorLinks.forEach((link) => link.removeEventListener("click", handleSmoothScroll));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav ref={navRef} className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll" href="#page-top">
          <img src={logo} alt="logo" style={{ height: "65px" }} />
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarDefault"
          aria-controls="navbarDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll active" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="#about">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="#work">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="#contact">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

