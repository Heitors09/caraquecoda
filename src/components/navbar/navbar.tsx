'use client'

import { BriefcaseIcon, HomeIcon } from '@heroicons/react/24/outline'
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline'
import { LinkIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useState, useEffect } from 'react'
import BlurFade from '../magicui/blur-fade'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { ChevronsLeftRight, Contact, Contact2, Star } from 'lucide-react'


const Navbar = () => {
  const[activeSection, setActiveSection] = useState('')

 


  return (
  <BlurFade xOffset={0} className="h-16 gap-12 hidden md:flex fixed  text-white w-full  border-r gap-20  justify-center max-sm:hidden border-[#1A1A1A] z-20 top-0   items-center py-5 bg-[#0D0D0D] ">
    <div className='flex   gap-5'>
    <a className='hover:bg-zinc-800 px-3 py-2 rounded-[8px] flex gap-2 items-center duration-150 text-sm' href="#section-1">
    <img
      src="/caraquecoda-mini-logo.png"
      alt='caraquecoda-mini-logo'
      className="size-6"
      /><p className='text-regular'>Inicio</p>
    </a>
    <a className='hover:bg-zinc-800 px-3 py-2 rounded-[8px] duration-150 gap-2 flex  items-center text-sm'  href="#section-2" >
      <InformationCircleIcon className="size-6"/><p className='text-regular'>Sobre </p>
    </a>
    <a className='hover:bg-zinc-800 px-3 py-2 rounded-[8px] duration-150 gap-2 flex  items-center text-sm'  href="#section-3" >
      <BriefcaseIcon className="size-6"/><p className='text-regular'>Serviços </p>
    </a>
    <a className='hover:bg-zinc-800 px-3 py-2 rounded-[8px] duration-150 gap-2 flex  items-center text-sm'  href="#section-4" >
      <ChevronsLeftRight className="size-6"/><p className='text-regular'>Processo</p>
    </a>
    <a className='hover:bg-zinc-800 px-3 py-2 rounded-[8px] duration-150 gap-2 flex  items-center text-sm'  href="#section-5" >
      <Star className="size-5"/><p className='text-regular'>Avaliações </p>
    </a>
    <a className='hover:bg-zinc-800 px-3 py-2 rounded-[8px] duration-150 flex gap-2 items-center text-sm'  href="#section-6">
      <Contact2 className="size-5"/><p>Contato</p>
    </a>
    </div>
 </BlurFade>
  )
}

export default Navbar
