'use client'

import { BriefcaseIcon, HomeIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useState, useEffect } from 'react'
import BlurFade from '../magicui/blur-fade'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { CheckCircle, ChevronDown, ChevronsLeftRight,  Compass,  Contact2, Star, StarIcon } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'


const Navbar = () => {

 


  return (
  <BlurFade xOffset={0} className="h-16 gap-12 hidden md:flex fixed  text-white w-full  border-r   justify-center max-sm:hidden border-[#1A1A1A] z-20 top-0   items-center py-5 bg-[#0D0D0D] ">
    <div className='flex   gap-5'>
    <Link className='hover:bg-zinc-800 px-3 py-2 rounded-[8px] flex gap-2 items-center duration-150 text-sm' href="/">
    <img
      src="/caraquecoda-mini-logo.png"
      alt='caraquecoda-mini-logo'
      className="size-6"
      /><p className='text-regular'>Inicio</p>
    </Link>
    <a className='hover:bg-zinc-800 px-3 py-2 rounded-[8px] duration-150 gap-2 flex  items-center text-sm'  href="/#section-2" >
      <InformationCircleIcon className="size-6"/><p className='text-regular'>Sobre </p>
    </a>
    <DropdownMenu>
      <DropdownMenuTrigger className='hover:bg-zinc-800 px-3 py-2 rounded-[8px] duration-150 gap-2 flex  items-center text-sm'>
        <Compass className="size-5"/>Explore<ChevronDown className='size-4'/>    
      </DropdownMenuTrigger>
       <DropdownMenuContent className="bg-[#0D0D0D] w-[300px]  shadow-lg ml-52 border-none  rounded-[8px]">
         <DropdownMenuItem >
         <Link href='/#section-3' className='flex flex-col group  hover:bg-zinc-800 hover:cursor-pointer py-4 pl-4 rounded-[8px] items-start gap-1'>
         <div  className='  text-white  duration-150 gap-2 flex  items-center text-sm'   >
            <BriefcaseIcon className="size-5 group-hover:text-[#FFC700]"/><p className='text-regular'>Serviços</p>
          </div>
          <p className='text-white text-xs opacity-70 ml-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Link> 
         </DropdownMenuItem>
         <DropdownMenuItem>
         <Link href='/#section-4' className='flex group rounded-[8px] hover:bg-zinc-800 hover:cursor-pointer py-4 pl-4   flex-col items-start gap-1'>
         <div className='  text-white  duration-150 gap-2 flex  items-center text-sm'   >
            <StarIcon className="size-5 group-hover:text-[#FFC700]"/><p className='text-regular'>Trabalhos e avaliações</p>
          </div>
          <p className='text-white text-xs opacity-70 ml-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Link> 
         </DropdownMenuItem>
         <DropdownMenuItem >
         <Link href='/process' className='flex group hover:bg-zinc-800 hover:cursor-pointer py-4 pl-4  rounded-[8px] flex-col items-start gap-1'>
         <div className='  text-white  duration-150 gap-2 flex  items-center text-sm'   >
            <ChevronsLeftRight className="size-5 group-hover:text-[#FFC700]"/><p className='text-regular'>Etapas</p>
          </div>
          <p className='text-white text-xs opacity-70 ml-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Link> 
         </DropdownMenuItem>
        

       </DropdownMenuContent>
    </DropdownMenu>
    <a className='hover:bg-zinc-800 px-3 py-2 rounded-[8px] duration-150 flex gap-2 items-center text-sm'  href="/#section-6">
      <Contact2 className="size-5"/><p>Contato</p>
    </a>
    </div>
 </BlurFade>
  )
}

export default Navbar
