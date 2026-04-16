import React, { useEffect, useRef } from 'react';

function Preloader() {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    function handleLoad() {
      setTimeout(() => {
        el.style.transition = 'opacity 0.5s ease';
        el.style.opacity = '0';
        setTimeout(() => {
          if (el.parentNode) el.parentNode.removeChild(el);
        }, 500);
      }, 200);
    }

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return <div ref={elRef} id="preloader"></div>;
}

export default Preloader;

