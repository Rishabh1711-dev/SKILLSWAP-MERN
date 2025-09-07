import React, { useState } from "react";

export default function CTAButton({ label, type = "primary" }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
  };

  return (
    <button
      className={`btn-${type} ${clicked ? "clicked" : ""}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}
