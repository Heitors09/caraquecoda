import { Award, ChevronDown, ChevronRight, Cloud, Code, Database, ShieldAlert, Terminal } from 'lucide-react'
import Link from 'next/link';
import React from 'react'
import ShineBorder from '../magicui/shine-border';
const CardAbout = () => {
  return (
    <div id='section-2' className="h-auto flex w-full justify-center my-24 text-white">
  <div className="flex flex-col items-center mx-4 sm:mx-8 lg:mx-32 bg-[#0D0D0D] h-full rounded-[8px] gap-6 md:gap-7 w-full max-w-7xl p-4 md:p-8">
    <p className="opacity-70 text-sm sm:text-base md:text-lg">Sobre nós</p>
    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
      Somos <span className="text-[#FFC700]">criadores</span> de experiências únicas e personalizadas.
    </h3>
    <p className="w-full sm:w-[500px] md:w-[700px] text-center text-sm sm:text-base md:text-xl opacity-70 font-light">
      Transformando Visões em Realidade Digital Através de Soluções Inovadoras e Sob Medida.
    </p>
    <img
      src="/caraquecoda-logo.png"
      alt="caraquecoda-logo"
      className="w-[150px] sm:w-[200px] h-auto my-7"
    />
    <div className="w-full gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <ShineBorder color={["#FFF9C4", "#FFB74D", "#795548"]} className="bg-[#0D0D0D] light-box px-5 py-7 items-start flex flex-col gap-4 w-full h-full rounded-[8px] text-white">
        <Code className="size-12 bg-[#FFC700] rounded-[8px] p-2" />
        <h3 className="text-lg md:text-xl">Eficiência</h3>
        <p className="text-xs opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p className="text-[#FFC700] text-xs">Saiba mais</p>
      </ShineBorder>

      <ShineBorder color={["#FFF9C4", "#FFB74D", "#795548"]} className="bg-[#0D0D0D] light-box px-5 py-7 items-start flex flex-col gap-4 w-full h-full rounded-[8px] text-white">
        <Terminal className="size-12 bg-[#FFC700] rounded-[8px] p-2" />
        <h3 className="text-lg md:text-xl">Capacidade técnica</h3>
        <p className="text-xs opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p className="text-[#FFC700] text-xs">Saiba mais</p>
      </ShineBorder>

      <ShineBorder color={["#FFF9C4", "#FFB74D", "#795548"]} className="bg-[#0D0D0D] light-box px-5 py-7 items-start flex flex-col gap-4 w-full h-full rounded-[8px] text-white">
        <Award className="size-12 bg-[#FFC700] rounded-[8px] p-2" />
        <h3 className="text-lg md:text-xl">Experiência</h3>
        <p className="text-xs opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p className="text-[#FFC700] text-xs">Saiba mais</p>
      </ShineBorder>
    </div>
    <Link href="/#section-3" className="group text-white w-28 sm:w-32 h-10 md:h-12 p-2 md:p-3 rounded-[8px] flex items-center gap-2 justify-center">
      Descubra
      <ChevronDown className="size-4 group" />
    </Link>
  </div>
</div>
  );
}

export default CardAbout
