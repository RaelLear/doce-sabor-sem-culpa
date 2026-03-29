import { useState, useEffect } from "react";

const scrollToOffer = () => {
  document.getElementById("oferta-principal")?.scrollIntoView({ behavior: "smooth" });
};

const FloatingCTA = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="floating-cta">
      <button onClick={scrollToOffer} className="cta-button w-full text-center text-sm py-3">
        QUERO APROVEITAR O DESCONTO →
      </button>
    </div>
  );
};

export default FloatingCTA;
