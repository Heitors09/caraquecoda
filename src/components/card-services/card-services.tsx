'use client'

import React, { useEffect, useState } from 'react'
import ShineBorder from '../magicui/shine-border'
import {  BarChart,  Cloud,  Cpu, Database,  ServerCog, ShieldAlert,  Webhook, Zap } from 'lucide-react'
import "keen-slider/keen-slider.min.css"



const CardServices = () => {
  


  return (
    <div id='section-3' className=" h-screen w-full my-32 gap-7 flex flex-col">
    <div className="flex flex-col mx-32">
      <h3 className="text-5xl font-bold text-white my-5 flex gap-2">Serviços<span className="text-[#FFC700]">disponiveis</span></h3>
       <p className='text-white opacity-70 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita molestias rerum delectus ea atque dolores. Magni optio, officiis eius alias iusto quisquam perspiciatis, modi repudiandae eligendi quaerat repellendus eos sed  modi repudiandae eligendi quaerat repellendus eos sed  modi repudiandae eligendi quaerat repellendus eos sed</p>
    </div>
    <div className=" w-full gap-5 grid px-32 grid-cols-3 my-5">
       <ShineBorder color={["#FFF9C4", "#FFB74D", "#795548"]} className="bg-[#0D0D0D] px-5 py-7 items-start flex flex-col gap-4 w-full h-full rounded-2xl text-white">
         <Webhook className="size-12 bg-[#FFC700] rounded-[8px] p-2"/>
         <h3 className="text-xl">Desenvolvimento Web</h3>
         <p className="text-xs opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
         <p className="text-[#FFC700] text-xs">Saiba mais</p>
       </ShineBorder>
       <ShineBorder color={["#FFF9C4", "#FFB74D", "#795548"]} className="bg-[#0D0D0D] px-5 py-7 items-start flex flex-col gap-4 w-full h-full rounded-2xl text-white">
<BarChart className="size-12 bg-[#FFC700] rounded-[8px] p-2" />
<h3 className="text-xl">Análise de Dados e Visualização</h3>
<p className="text-xs opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
<p className="text-[#FFC700] text-xs">Saiba mais</p>
</ShineBorder>

       <ShineBorder color={["#FFF9C4", "#FFB74D", "#795548"]} className="bg-[#0D0D0D] px-5 py-7 items-start flex flex-col gap-4 w-full h-full rounded-2xl text-white">
<ServerCog className="size-12 bg-[#FFC700] rounded-[8px] p-2" />
<h3 className="text-xl">DevOps e Automação de Infraestrutura</h3>
<p className="text-xs opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
<p className="text-[#FFC700] text-xs">Saiba mais</p>
</ShineBorder>

<ShineBorder color={["#FFF9C4", "#FFB74D", "#795548"]} className="bg-[#0D0D0D] px-5 py-7 items-start flex flex-col gap-4 w-full h-full rounded-2xl text-white">
<Database className="size-12 bg-[#FFC700] rounded-[8px] p-2" />
<h3 className="text-xl">Gerenciamento de Bancos de Dados</h3>
<p className="text-xs opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
<p className="text-[#FFC700] text-xs">Saiba mais</p>
</ShineBorder>

<ShineBorder color={["#FFF9C4", "#FFB74D", "#795548"]} className="bg-[#0D0D0D] px-5 py-7 items-start flex flex-col gap-4 w-full h-full rounded-2xl text-white">
<ShieldAlert className="size-12 bg-[#FFC700] rounded-[8px] p-2" />
<h3 className="text-xl">Segurança da Informação</h3>
<p className="text-xs opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
<p className="text-[#FFC700] text-xs">Saiba mais</p>
</ShineBorder>

<ShineBorder color={["#FFF9C4", "#FFB74D", "#795548"]} className="bg-[#0D0D0D] px-5 py-7 items-start flex flex-col gap-4 w-full h-full rounded-2xl text-white">
<Cloud className="size-12 bg-[#FFC700] rounded-[8px] p-2" />
<h3 className="text-xl">Arquitetura em Nuvem</h3>
<p className="text-xs opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
<p className="text-[#FFC700] text-xs">Saiba mais</p>
</ShineBorder>

<ShineBorder color={["#FFF9C4", "#FFB74D", "#795548"]} className="bg-[#0D0D0D] px-5 py-7 items-start flex flex-col gap-4 w-full h-full rounded-2xl text-white">
<Cpu className="size-12 bg-[#FFC700] rounded-[8px] p-2" />
<h3 className="text-xl">Desenvolvimento de Sistemas Embutidos</h3>
<p className="text-xs opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
<p className="text-[#FFC700] text-xs">Saiba mais</p>
</ShineBorder>

<ShineBorder color={["#FFF9C4", "#FFB74D", "#795548"]} className="bg-[#0D0D0D] px-5 py-7 items-start flex flex-col gap-4 w-full h-full rounded-2xl text-white">
<Zap className="size-12 bg-[#FFC700] rounded-[8px] p-2" />
<h3 className="text-xl">Automação de Processos de Negócio</h3>
<p className="text-xs opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
<p className="text-[#FFC700] text-xs">Saiba mais</p>
</ShineBorder>
<ShineBorder color={["#FFF9C4", "#FFB74D", "#795548"]} className="bg-[#0D0D0D] px-5 py-7 items-start flex flex-col gap-4 w-full h-full rounded-2xl text-white">
<Zap className="size-12 bg-[#FFC700] rounded-[8px] p-2" />
<h3 className="text-xl">Automação de Processos de Negócio</h3>
<p className="text-xs opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
<p className="text-[#FFC700] text-xs">Saiba mais</p>
</ShineBorder>
    </div>
   </div>
  )
}

export default CardServices
