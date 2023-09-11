import React, { useEffect, useRef } from 'react'
import group1 from '../../image/group1.png'
import group2 from '../../image/group2.png'
import group3 from '../../image/group3.png'
import group4 from '../../image/group4.png'
import group5 from '../../image/group5.png'
import group6 from '../../image/group6.png'
import group7 from '../../image/group7.png'
import group8 from '../../image/group8.png'
import group9 from '../../image/group9.png'
import group10 from '../../image/group10.png'

const ImgEffect = () => {
    const logoRef = useRef(null);
    const imagesRef = useRef([]);

    useEffect(() => {
        const logo = logoRef.current;
        const images = logo.querySelectorAll("img");
        imagesRef.current = images;
    
        const getActive = () => document.body.dataset.active === "true";
        const setActiveTo = (active) => (document.body.dataset.active = active);
    
        const shift = (image, index, rangeX, rangeY) => {
            const active = getActive();
    
            const translationIntensity = active ? 8 : 2;
            const maxTranslation = translationIntensity * (index + 1);
            const currentTranslation = `${maxTranslation * rangeX}% ${maxTranslation * rangeY}%`;
    
            const scale = active ? 1 + index * 0.2 : 1;
    
            image.animate(
                { translate: currentTranslation, scale },
                { duration: 750, fill: "forwards", easing: "ease" }
            );
        };
    
        const shiftAll = (images, rangeX, rangeY) =>
            images.forEach((image, index) => shift(image, index, rangeX, rangeY));
    
        const shiftLogo = (e) => {
            const rect = logo.getBoundingClientRect();
            const areaWidth = rect.width * 0.6; // Ancho del área acotada
            const areaHeight = rect.height * 0.6; // Alto del área acotada
    
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
    
            let rangeX = (e.clientX - centerX) / (areaWidth / 2);
            let rangeY = (e.clientY - centerY) / (areaHeight / 2);
    
            // Limitar el rango de movimiento dentro del área acotada (-1 a 1)
            rangeX = Math.max(Math.min(rangeX, 1), -1);
            rangeY = Math.max(Math.min(rangeY, 1), -1);
    
            shiftAll(imagesRef.current, rangeX, rangeY);
        };
    
        const resetLogo = () => {
            setActiveTo(false);
            shiftAll(imagesRef.current, 0.4, -0.7);
        };
    
        window.onmousemove = (e) => shiftLogo(e);
        document.body.onmouseleave = () => {
            if (!getActive()) resetLogo();
        };
    
        resetLogo();
    }, []);
  return (
    <div id="logo" className="w-[100%] h-[100%] flex items-center justify-center " ref={logoRef}>
    <img src={group5} draggable="false" />
    <img src={group4} draggable="false" />
    <img src={group3} draggable="false" />
    <img src={group2} draggable="false" />
    <img src={group1} draggable="false" />
    {/* <img src={group10} draggable="false"/>
    <img src={group9} draggable="false" />
    <img src={group8} draggable="false" />
    <img src={group7} draggable="false" />
    <img src={group6} draggable="false" /> */}

</div>
  )
}

export default ImgEffect