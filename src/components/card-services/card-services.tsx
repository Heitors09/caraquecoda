'use client'

import React, { useEffect, useState } from 'react'
import ShineBorder from '../magicui/shine-border'
import {  BarChart,  Cloud,  Cpu, Database,  ServerCog, ShieldAlert,  Smartphone,  Webhook, Zap } from 'lucide-react'
import "keen-slider/keen-slider.min.css"



const CardServices = () => {
  return (
    <div id='section-3' className="h-auto w-full my-16 md:my-32 gap-12 flex flex-col">
      <div className='mx-32 flex flex-col gap-7'>
        <h3 className='text-white text-3xl md:text-5xl font-bold'>Soluções <span className="text-[#FFC700]">Diversas</span> para Todas as Suas Necessidades</h3>
        <p className='text-white opacity-70 max-w-[900px] text-xs md:text-lg font-light'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita molestias rerum delectus ea atque dolores. Magni optio, officiis eius alias iusto quisquam perspiciatis, modi repudiandae eligendi quaerat repellendus eos sed modi repudiandae eligendi quaerat 
        </p>
      </div>
      <div className='mx-32 flex flex-col gap-12'>
         <h3 className='text-3xl md:text-3xl font-bold text-white flex gap-2'>Destaques</h3>
         <div className="w-full gap-5 grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
         <ShineBorder color={["#FFF9C4", "#FFB74D", "#795548"]} className="bg-[#0D0D0D] light-box px-5 py-7 items-start flex flex-col gap-4 w-full h-full rounded-[8px] text-white">
      <Database className="size-12 bg-[#FFC700] rounded-[8px] p-2" />
      <h3 className="text-lg md:text-xl">Gerenciamento de Bancos de Dados</h3>
      <p className="text-xs opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <p className="text-[#FFC700] text-xs">Saiba mais</p>
    </ShineBorder>

    <ShineBorder color={["#FFF9C4", "#FFB74D", "#795548"]} className="bg-[#0D0D0D] light-box px-5 py-7 items-start flex flex-col gap-4 w-full h-full rounded-[8px] text-white">
      <ShieldAlert className="size-12 bg-[#FFC700] rounded-[8px] p-2" />
      <h3 className="text-lg md:text-xl">Segurança da Informação</h3>
      <p className="text-xs opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <p className="text-[#FFC700] text-xs">Saiba mais</p>
    </ShineBorder>

    <ShineBorder color={["#FFF9C4", "#FFB74D", "#795548"]} className="bg-[#0D0D0D] light-box px-5 py-7 items-start flex flex-col gap-4 w-full h-full rounded-[8px] text-white">
      <Cloud className="size-12 bg-[#FFC700] rounded-[8px] p-2" />
      <h3 className="text-lg md:text-xl">Arquitetura em Nuvem</h3>
      <p className="text-xs opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <p className="text-[#FFC700] text-xs">Saiba mais</p>
    </ShineBorder>
         </div>
      </div>
  <div className="flex flex-col mx-8 md:mx-32">
    <h3 className="text-3xl md:text-3xl font-bold text-white flex gap-2">
      Serviços<span className="text-[#FFC700]">disponíveis</span>
    </h3>
  </div>
  
  <div className="w-full gap-5 grid px-8 md:px-32 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    <ShineBorder color={["#FFF9C4", "#FFB74D", "#795548"]} className="bg-[#0D0D0D] duration-[0.3s] hover:-translate-y-3 px-5 py-7 items-start flex flex-col gap-4 w-full h-full rounded-[8px] text-white">
      <Webhook className="size-12 bg-[#FFC700] rounded-[8px] p-2" />
      <h3 className="text-lg md:text-xl">Desenvolvimento Web</h3>
      <p className="text-xs opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <p className="text-[#FFC700] text-xs">Saiba mais</p>
    </ShineBorder>

    <ShineBorder color={["#FFF9C4", "#FFB74D", "#795548"]} className="bg-[#0D0D0D] duration-[0.3s] hover:-translate-y-3 px-5 py-7 items-start flex flex-col gap-4 w-full h-full rounded-[8px] text-white">
      <BarChart className="size-12 bg-[#FFC700] rounded-[8px] p-2" />
      <h3 className="text-lg md:text-xl">Análise de Dados e Visualização</h3>
      <p className="text-xs opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <p className="text-[#FFC700] text-xs">Saiba mais</p>
    </ShineBorder>

    <ShineBorder color={["#FFF9C4", "#FFB74D", "#795548"]} className="bg-[#0D0D0D] duration-[0.3s] hover:-translate-y-3 px-5 py-7 items-start flex flex-col gap-4 w-full h-full rounded-[8px] text-white">
      <ServerCog className="size-12 bg-[#FFC700] rounded-[8px] p-2" />
      <h3 className="text-lg md:text-xl">DevOps e Automação de Infraestrutura</h3>
      <p className="text-xs opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <p className="text-[#FFC700] text-xs">Saiba mais</p>
    </ShineBorder>

    <ShineBorder color={["#FFF9C4", "#FFB74D", "#795548"]} className="bg-[#0D0D0D] duration-[0.3s] hover:-translate-y-3 px-5 py-7 items-start flex flex-col gap-4 w-full h-full rounded-[8px] text-white">
      <Database className="size-12 bg-[#FFC700] rounded-[8px] p-2" />
      <h3 className="text-lg md:text-xl">Gerenciamento de Bancos de Dados</h3>
      <p className="text-xs opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <p className="text-[#FFC700] text-xs">Saiba mais</p>
    </ShineBorder>

    <ShineBorder color={["#FFF9C4", "#FFB74D", "#795548"]} className="bg-[#0D0D0D] duration-[0.3s] hover:-translate-y-3 px-5 py-7 items-start flex flex-col gap-4 w-full h-full rounded-[8px] text-white">
      <ShieldAlert className="size-12 bg-[#FFC700] rounded-[8px] p-2" />
      <h3 className="text-lg md:text-xl">Segurança da Informação</h3>
      <p className="text-xs opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <p className="text-[#FFC700] text-xs">Saiba mais</p>
    </ShineBorder>

    <ShineBorder color={["#FFF9C4", "#FFB74D", "#795548"]} className="bg-[#0D0D0D] duration-[0.3s] hover:-translate-y-3 px-5 py-7 items-start flex flex-col gap-4 w-full h-full rounded-[8px] text-white">
      <Cloud className="size-12 bg-[#FFC700] rounded-[8px] p-2" />
      <h3 className="text-lg md:text-xl">Arquitetura em Nuvem</h3>
      <p className="text-xs opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <p className="text-[#FFC700] text-xs">Saiba mais</p>
    </ShineBorder>

    <ShineBorder color={["#FFF9C4", "#FFB74D", "#795548"]} className="bg-[#0D0D0D] duration-[0.3s] hover:-translate-y-3 px-5 py-7 items-start flex flex-col gap-4 w-full h-full rounded-[8px] text-white">
      <Cpu className="size-12 bg-[#FFC700] rounded-[8px] p-2" />
      <h3 className="text-lg md:text-xl">Desenvolvimento de Sistemas Embutidos</h3>
      <p className="text-xs opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <p className="text-[#FFC700] text-xs">Saiba mais</p>
    </ShineBorder>

    <ShineBorder color={["#FFF9C4", "#FFB74D", "#795548"]} className="bg-[#0D0D0D] duration-[0.3s] hover:-translate-y-3 px-5 py-7 items-start flex flex-col gap-4 w-full h-full rounded-[8px] text-white">
      <Zap className="size-12 bg-[#FFC700] rounded-[8px] p-2" />
      <h3 className="text-lg md:text-xl">Automação de Processos de Negócio</h3>
      <p className="text-xs opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <p className="text-[#FFC700] text-xs">Saiba mais</p>
    </ShineBorder>
    <ShineBorder color={["#FFF9C4", "#FFB74D", "#795548"]} className="bg-[#0D0D0D] duration-[0.3s] hover:-translate-y-3 px-5 py-7 items-start flex flex-col gap-4 w-full h-full rounded-[8px] text-white">
      <Smartphone className="size-12 bg-[#FFC700] rounded-[8px] p-2" />
      <h3 className="text-lg md:text-xl">Desenvolvimento Mobile</h3>
      <p className="text-xs opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <p className="text-[#FFC700] text-xs">Saiba mais</p>
    </ShineBorder>
  </div>
</div>
  )
}

export default CardServices
