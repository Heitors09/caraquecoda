import { ChevronDown, ChevronRight } from 'lucide-react'
import Link from 'next/link';
import React from 'react'
const CardAbout = () => {
  return (
    <div id='section-2' className="h-screen flex w-full mb-36 text-white">
      <div className="flex flex-col gap-6 md:gap-12 w-full md:w-[70%] p-8 md:p-32">
        <p className="opacity-70 text-base md:text-lg">Sobre nós</p>
        <h3 className="text-3xl md:text-6xl font-bold w-full md:w-[900px]">
          Somos <span className="text-[#FFC700]">criadores</span> de experiências únicas.
        </h3>
        <img
          src="/caraquecoda-logo.png"
          alt="caraquecoda-logo"
          className="w-[200px]  h-auto"
        />
        <p className="text-xs md:text-xl font-light opacity-70">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s
        </p>
        <Link href="/services" className="bg-[#FFC700] group  text-black  w-32 h-10 md:h-12  md:p-3 rounded-[8px] flex items-center gap-2">
          Serviços<ChevronRight className="size-4  group" />
        </Link>
      </div>
    </div>
  );
}

export default CardAbout
