import { ChevronDown } from 'lucide-react'
import React from 'react'
const CardAbout = () => {
  return (
    <div id='section-2' className="h-screen flex w-full text-white">
      <div className="flex flex-col gap-6 md:gap-12 w-full md:w-[70%] p-8 md:p-32">
        <p className="opacity-70 text-base md:text-lg">Sobre nós</p>
        <h3 className="text-3xl md:text-6xl font-bold w-full md:w-[900px]">
          Somos <span className="text-[#FFC700]">criadores</span> de experiências únicas.
        </h3>
        <img
          src="/caraquecoda-logo.png"
          alt="caraquecoda-logo"
          className="w-[200px] md:w-[300px] h-auto"
        />
        <p className="text-xs md:text-sm opacity-70">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.
        </p>
        <a href="#section-3" className="hover:bg-zinc-900 w-28 md:w-32 h-10 md:h-12 p-2 md:p-3 rounded-[8px] flex items-center gap-2">
          Descubra <ChevronDown className="size-4" />
        </a>
      </div>
    </div>
  );
}

export default CardAbout
