import { BackgroundBeams } from '@/app/components/ui/background-beam'
import React from 'react'
import BlurFade from '../magicui/blur-fade'
import { TypewriterEffect } from '../ui/typewriter-effect'
import { ChevronDown } from 'lucide-react';


const wordsTitle = [
  { text: "Construindo" },
  { text: "o" },
  { text: "futuro" , className: 'text-[#FFC700]'},
  { text: "uma" },
  { text: "linha" },
  { text: "de" },
  { text: "cada" },
  { text: "vez." }
];


const HomeSection = () => {
  return (
    <section id="section-1" className="text-white section flex h-screen justify-center flex-col items-center gap-7 section">
     <BackgroundBeams />
     <BlurFade yOffset={-1} delay={2} inView  className="bg-transparent ring-1 ring-[#FFC700] rounded-full  h-7 w-auto px-10 flex items-center justify-center gap-2">
      <img
      src="/caraquecoda-mini-logo.png"
      alt='caraquecoda-mini-logo'
      className="size-4"
      />
      <p className="text-[#FFC700]  text-xs">Boas vindas</p>
     </BlurFade>
     <TypewriterEffect  words={wordsTitle} className="md:text-7xl   text-4xl text-center  md:mx-32 relative mt-1 max-w-[1093px] mb-5 z-10  font-bold "/>
     <BlurFade  className="flex flex-col items-center gap-7"  delay={2} inView >
        <p className="md:mx-80 text-center text-sm mx-12 md:text-xl opacity-70 font-light max-w-[709px]">Transformando Visões em Realidade Digital Através de Soluções Inovadoras e Sob Medida.</p>
       
     </BlurFade>
   </section>
  )
}

export default HomeSection
