'use client'

import React, { useState } from 'react'
import ShineBorder from '../magicui/shine-border'
import Contacts from './contacts/contacts'
import Analysis from './analysis/analysis'
import Design from './design/design'
import Coding from './coding/coding'
import Delivery from './delivery/delivery'

const DevelopmentStages = () => {
  const[ layout , setLayout ] = useState<'Contato' | 'Análise' | 'Design' | 'Coding' | 'Entrega'>('Contato')
  const contentByLayout : Record<typeof layout , JSX.Element> = {
    Contato : (
     <Contacts/>
    ),
    Análise : ((
      <Analysis/>
    )),
    Design : ((
      <Design/>
    )),

    Coding : ((
      <Coding/>
    )),
    Entrega : ((
     <Delivery/>
    ))
  }



  return (
    <div  className="text-white w-full min-h-screen px-6 md:px-32 lg:px-32 py-32">
  <div className="flex flex-col gap-7 text-sm">
    <h3 className="text-3xl md:text-5xl font-bold max-w-full md:max-w-[900px]">
      Conheça nossas <span className="text-[#FFC700]">etapas</span> de desenvolvimento
    </h3>
    <p className="opacity-70 max-w-full  text-lg font-light ">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard 
    </p>
  </div>

  <div className="bg-[#0D0D0D] shadow-lg w-full p-5 flex flex-col gap-2 rounded-[8px] mt-7">
    <p>Etapas</p>
    <div className="h-[1px] w-full bg-zinc-700" />
    
    <div className="flex gap-2 flex-nowrap overflow-x-auto">
      {layout === 'Contato' ? (
        <div onClick={() => setLayout('Contato')} className="min-w-[150px] md:min-w-[180px] lg:min-w-[200px] border-b border-[#FFC700] cursor-pointer clip-box rounded-l-[8px] h-12 bg-zinc-800 flex items-center justify-center gap-1">
          <p className="text-[#FFC700] font-bold">01.</p>
          <p>Contato</p>
        </div>
      ) : (
        <div onClick={() => setLayout('Contato')} className="min-w-[150px]  md:min-w-[180px] lg:min-w-[200px] cursor-pointer clip-box rounded-l-[8px] h-12 bg-zinc-800 flex items-center justify-center gap-1">
          <p className="font-bold">01.</p>
          <p>Contato</p>
        </div>
      )}

      {layout === 'Análise' ? (
        <div onClick={() => setLayout('Análise')} className="min-w-[150px] md:min-w-[180px] lg:min-w-[200px] border-b border-[#FFC700] cursor-pointer clip-box-left flex items-center justify-center h-12 bg-zinc-800 gap-1 shadow-lg">
          <p className="text-[#FFC700] font-bold">02.</p>
          <p>Análise</p>
        </div>
      ) : (
        <div onClick={() => setLayout('Análise')} className="min-w-[150px] md:min-w-[180px] lg:min-w-[200px] cursor-pointer clip-box-left flex items-center justify-center h-12 bg-zinc-800 gap-1 shadow-lg">
          <p className="font-bold">02.</p>
          <p>Análise</p>
        </div>
      )}

      {layout === 'Design' ? (
        <div onClick={() => setLayout('Design')} className="min-w-[150px] md:min-w-[180px] lg:min-w-[200px] border-b border-[#FFC700] cursor-pointer clip-box-left flex items-center justify-center h-12 bg-zinc-800 gap-1 shadow-lg">
          <p className="text-[#FFC700] font-bold">03.</p>
          <p>Design</p>
        </div>
      ) : (
        <div onClick={() => setLayout('Design')} className="min-w-[150px] md:min-w-[180px] lg:min-w-[200px] cursor-pointer clip-box-left flex items-center justify-center h-12 bg-zinc-800 gap-1 shadow-lg">
          <p className="font-bold">03.</p>
          <p>Design</p>
        </div>
      )}

      {layout === 'Coding' ? (
        <div onClick={() => setLayout('Coding')} className="min-w-[150px] md:min-w-[180px] lg:min-w-[200px] border-b border-[#FFC700] cursor-pointer clip-box-left flex items-center justify-center h-12 bg-zinc-800 gap-1 shadow-lg">
          <p className="text-[#FFC700] font-bold">04.</p>
          <p>Coding</p>
        </div>
      ) : (
        <div onClick={() => setLayout('Coding')} className="min-w-[150px] md:min-w-[180px] lg:min-w-[200px] cursor-pointer clip-box-left flex items-center justify-center h-12 bg-zinc-800 gap-1 shadow-lg">
          <p className="font-bold">04.</p>
          <p>Coding</p>
        </div>
      )}

      {layout === 'Entrega' ? (
        <div onClick={() => setLayout('Entrega')} className="min-w-[150px] md:min-w-[180px] lg:min-w-[200px] border-b border-[#FFC700] cursor-pointer clip-box-inward-left rounded-r-[8px] flex items-center justify-center h-12 bg-zinc-800 gap-1 shadow-lg">
          <p className="text-[#FFC700] font-bold">05.</p>
          <p>Entrega</p>
        </div>
      ) : (
        <div onClick={() => setLayout('Entrega')} className="min-w-[150px] mr-4 md:min-w-[180px] lg:min-w-[200px] cursor-pointer clip-box-inward-left rounded-r-[8px] flex items-center justify-center h-12 bg-zinc-800 gap-1 shadow-lg">
          <p className="font-bold">05.</p>
          <p>Entrega</p>
        </div>
      )}
    </div>
  </div>

  <div className="bg-[#0D0D0D] shadow-lg w-full h-auto p-5 flex flex-col gap-2 rounded-[8px] mt-7">
    {contentByLayout[layout]}
  </div>
</div>
  )
}

export default DevelopmentStages
