import React,{useEffect} from "react";
import "../App.css";
import { gsap } from "gsap";
import { Power4, Elastic } from 'gsap';

const GSAP=()=>{

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

    useEffect(() => {
        const magneto = document.querySelector('.magneto');
        const magnetoText = document.querySelector('.magneto .text');

        const activeMagneto = (event) => {
            let boundBox = magneto.getBoundingClientRect();
            const magnetoStrength = 100;
            const magnetoTextStrength = 200;
            const newX = ((event.clientX - boundBox.left) / magneto.offsetWidth) - 0.5;
            const newY = ((event.clientY - boundBox.top) / magneto.offsetHeight) - 0.5;

            gsap.to(magneto, {
                duration: 1,
                x: newX * magnetoStrength,
                y: newY * magnetoStrength,
                ease: Power4.easeOut
            });
            gsap.to(magnetoText, {
                duration: 1,
                x: newX * magnetoTextStrength,
                y: newY * magnetoTextStrength,
                ease: Power4.easeOut
            });
        };

        const resetMagneto = () => {
            gsap.to(magneto, {
                duration: 1,
                x: 0,
                y: 0,
                ease: Elastic.easeOut
            });
            gsap.to(magnetoText, {
                duration: 1,
                x: 0,
                y: 0,
                ease: Elastic.easeOut
            });
        };

        magneto.addEventListener('mousemove', activeMagneto);
        magneto.addEventListener('mouseleave', resetMagneto);

        return () => {
            magneto.removeEventListener('mousemove', activeMagneto);
            magneto.removeEventListener('mouseleave', resetMagneto);
        };
    }, []);

    return (
        <button id="gsapAnimation1" className="magneto">
            <span className="text">About me</span>
        </button>
    );
};
export default GSAP;