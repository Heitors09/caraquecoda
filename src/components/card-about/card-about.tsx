import { ChevronDown } from 'lucide-react'
import React from 'react'

const CardAbout = () => {
  return (
    <div id='section-2' className="h-screen flex w-full text-white">
    <div className="flex flex-col gap-12 w-[70%] p-32 ">
      <p className="opacity-70 text-lg">Sobre nós</p>
      <h3 className="text-6xl font-bold w-[900px]">Somos <span className="text-[#FFC700]">criadores</span> de experiências únicas.</h3>
      <img
     src="/caraquecoda-logo.png"
     alt='caraquecoda-logo'
     width={300}
     height={200}
     />
     <p className="text-sm opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
     <a href="#section-3" className="hover:bg-zinc-900 w-32 h-12 p-3 rounded-[8px] flex items-center gap-2">Descubra<ChevronDown className="size-4"/></a>
     </div> 
    </div>
  )
}

export default CardAbout
