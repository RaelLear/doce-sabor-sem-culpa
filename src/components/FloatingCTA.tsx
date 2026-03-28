import { useState, useEffect } from "react";

const CTA_LINK = "https://ggcheckout.app/checkout/v2/vvGdsvJyn6wBQsx56aQZ";

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
      <a href={CTA_LINK} className="cta-button w-full text-center text-sm py-3">
        QUERO APROVEITAR O DESCONTO →
      </a>
    </div>
  );
};

export default FloatingCTA;
