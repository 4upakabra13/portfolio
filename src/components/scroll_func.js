import React from "react";
import '../containers/App.js'
import '../containers/App.css'

function reveal() {
    const reveals = document.querySelectorAll(".reveal");
  
    for (const i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

export default reveal;