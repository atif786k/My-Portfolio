import React, { useEffect } from "react";
import { gsap, Power4, Elastic } from "gsap";

const Magneto = ({
  buttonText,
  buttonClass,
  buttonClass1,
  textClass,
  x,
  y,
}) => {
  useEffect(() => {
    const magneto = document.querySelector(`.${buttonClass}`);
    const magnetoText = document.querySelector(`.${buttonClass} .${textClass}`);

    const activeMagneto = (event) => {
      let boundBox = magneto.getBoundingClientRect();
      const magnetoStrength = x;
      const magnetoTextStrength = y;
      const newX = (event.clientX - boundBox.left) / magneto.offsetWidth - 0.5;
      const newY = (event.clientY - boundBox.top) / magneto.offsetHeight - 0.5;

      gsap.to(magneto, {
        duration: 1,
        x: newX * magnetoStrength,
        y: newY * magnetoStrength,
        ease: Power4.easeOut,
      });
      gsap.to(magnetoText, {
        duration: 1,
        x: newX * magnetoTextStrength,
        y: newY * magnetoTextStrength,
        ease: Power4.easeOut,
      });
    };

    const resetMagneto = () => {
      gsap.to(magneto, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut,
      });
      gsap.to(magnetoText, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut,
      });
    };

    magneto.addEventListener("mousemove", activeMagneto);
    magneto.addEventListener("mouseleave", resetMagneto);

    return () => {
      magneto.removeEventListener("mousemove", activeMagneto);
      magneto.removeEventListener("mouseleave", resetMagneto);
    };
  }, []);

  return (
    <button className={`${buttonClass} ${buttonClass1}`}>
      <span className={textClass}>{buttonText}</span>
    </button>
  );
};

export default Magneto;
