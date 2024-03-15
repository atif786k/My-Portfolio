// import React,{useEffect} from "react";
// import "../App.css";
// import { gsap } from "gsap";
// import { Power4, Elastic } from 'gsap';

// const GSAP=()=>{

    // gsap.set('#gsapAnimation', {
    //     scale:0,
    //     transformOrigin:'50% 50%'
    // })

    // gsap.to('#gsapAnimation', {
    //     scale:1,
    //     rotation:360,
    //     duration:1.2,
    //     ease:"elastic.out",
    // })

    // let tl=gsap.timeline({

    // })
    // tl.fromTo('#gsapAnimation1', {
    //     x:1
    // },{
    //     x:200
    // })

//     useEffect(() => {
//         const magneto = document.querySelector('.magneto');
//         const magnetoText = document.querySelector('.magneto .text');

//         const activeMagneto = (event) => {
//             let boundBox = magneto.getBoundingClientRect();
//             const magnetoStrength = 100;
//             const magnetoTextStrength = 200;
//             const newX = ((event.clientX - boundBox.left) / magneto.offsetWidth) - 0.5;
//             const newY = ((event.clientY - boundBox.top) / magneto.offsetHeight) - 0.5;

//             gsap.to(magneto, {
//                 duration: 1,
//                 x: newX * magnetoStrength,
//                 y: newY * magnetoStrength,
//                 ease: Power4.easeOut
//             });
//             gsap.to(magnetoText, {
//                 duration: 1,
//                 x: newX * magnetoTextStrength,
//                 y: newY * magnetoTextStrength,
//                 ease: Power4.easeOut
//             });
//         };

//         const resetMagneto = () => {
//             gsap.to(magneto, {
//                 duration: 1,
//                 x: 0,
//                 y: 0,
//                 ease: Elastic.easeOut
//             });
//             gsap.to(magnetoText, {
//                 duration: 1,
//                 x: 0,
//                 y: 0,
//                 ease: Elastic.easeOut
//             });
//         };

//         magneto.addEventListener('mousemove', activeMagneto);
//         magneto.addEventListener('mouseleave', resetMagneto);

//         return () => {
//             magneto.removeEventListener('mousemove', activeMagneto);
//             magneto.removeEventListener('mouseleave', resetMagneto);
//         };
//     }, []);

//     return (
//         <button id="gsapAnimation1" className="magneto">
//             <span className="text">About me</span>
//         </button>
//     );
// };
// export default GSAP;

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// export const GSAP = (target, animationConfig) => {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.from(target, animationConfig);
//     gsap.to(target, {
//       scrollTrigger: {
//         trigger: target,
//         start: '0% 100%',
//         end: '100% 0%',
//         scrub: 2,
//       },
//       x:0,
//       y:0,
//       scale:,
//       opacity:1,
//     });
//   }, [target, animationConfig]);
// };
export const GSAP = (selector, animationOptions) => {
    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
  
      gsap.from(selector, {
        ...animationOptions,
        scrollTrigger: {
          trigger: selector,
          start: "top bottom",
          end: "bottom 90%",
          scrub: 2
        }
      });
    }, [selector, animationOptions]);
  };
export default GSAP;