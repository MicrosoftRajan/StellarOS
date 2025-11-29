import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Font_Weight = {
    subtitle : {min:100, max:400, default:100},
    title: {min: 400, max: 900, default:400},

}

const rendertxt = (txt, className, baseWeight = 400) => {
    return [...txt].map((char, i) => (
        <span key = {i} className= {className} style={{fontVariationSettings:`'wght' ${baseWeight}`}}>
             {char === "" ? "\u00A0" : char}
        </span>
    ))
}


const setupHoverText = (container, type)=>{
    if(!container) return;

    const letters = container.querySelectorAll("span")
    const {min, max, default: base} = Font_Weight[type];

    const AnimateLetters = (Letter, weight, duration = 0.25) =>{
        return gsap.to(Letter, {
            duration,
            ease: "power2.out",
            fontVariationSettings:`'wght' ${weight}`
        })
    }

    const handleMouseHover = (e)=>{
        const {left} = container.getBoundingClientRect();
        const mouseX = e.clientX  - left;
        letters.forEach((letter)=> {
            const {left: l, width : w} = letter.getBoundingClientRect();
            const dist = Math.abs(mouseX - (l - left + w/ 2));
            const intensity = Math.exp(-(dist ** 2)/ 20000);
            AnimateLetters(letter, min+(max-min)*intensity)
        })
 };

    const handleMouseLeave = () => letters.forEach((letter)=>AnimateLetters(letter, base, 0.3))

    container.addEventListener("mousemove", handleMouseHover)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
    container.addEventListener("mousemove", handleMouseHover)
    container.addEventListener("mouseleave", handleMouseLeave)
    }
}


const Welcome = () => {
    const titleRef = useRef(null)
    const subtitleRef = useRef(null);

    useGSAP(() => {
        const  titlecleanUp = setupHoverText(titleRef.current,"title");
        const subtitleCleanUp = setupHoverText(subtitleRef.current, "subtitle")

        return () => {
            subtitleCleanUp();
            titlecleanUp();
        }

}, [])
  return (
    <section id='welcome'>
        <p ref={subtitleRef}>{rendertxt("Hey, Welcome to my StellerOS", "text-3xl font-georama", 100)}</p>
        <h1 ref={titleRef}>{rendertxt("Portfolio", "text-9xl italic font-grorama")}</h1>
            <div className='small-screen'>
         <p>This portfolio is designed only for Tablets/Desktop screen only.</p>
    </div>
    </section>

  )
}

export default Welcome