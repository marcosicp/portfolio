import React, { useEffect, useRef } from "react";

function BackToTop() {
  const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    function handleScroll() {
      if (!btn) return;
      if (window.pageYOffset > 100) {
        btn.classList.remove("fadeOut");
        btn.style.display = "block";
        btn.classList.add("fadeIn");
      } else {
        btn.classList.remove("fadeIn");
        btn.classList.add("fadeOut");
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      ref={btnRef}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="back-to-top animated"
      style={{ backgroundColor: "#C88A35", border: "none", cursor: "pointer" }}
      aria-label="Back to top"
    >
      <i className="fa fa-chevron-up"></i>
    </button>
  );
}

export default BackToTop;


