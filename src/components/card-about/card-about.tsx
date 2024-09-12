'use client'

import React, { useEffect, useState } from 'react'
import ShineBorder from '../magicui/shine-border'
import { BadgeCheck, Brush, ChevronDown, ChevronLeft, ChevronRight, Code, Database, Globe, Layout, Monitor, PenTool, Search, Server, Smartphone, Webhook } from 'lucide-react'
import { TypewriterEffect } from '../ui/typewriter-effect'
import "keen-slider/keen-slider.min.css"
import { useKeenSlider, TrackDetails } from "keen-slider/react"
import BlurFade from '../magicui/blur-fade'
import { CheckBadgeIcon } from '@heroicons/react/24/outline'



const CardAbout = () => {
  const [details, setDetails] = useState<TrackDetails | null>(null)
  const [showDiv, setShowDiv] = useState(false);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    detailsChanged(s) {
      setDetails(s.track.details)
    },
    initial: 2,
  })
  
  useEffect(() => {
    function timer(){ setTimeout(() => {
      setShowDiv(true); 
    }, 1000);}
     
    timer()
    
   
  })
  


  function scaleStyle(idx: number) {
    if (!details) return {}
    const slide = details.slides[idx]
    const scale_size = 0.7
    const scale = 1 - (scale_size - scale_size * slide.portion)
    return {
      transform: `scale(${scale})`,
      WebkitTransform: `scale(${scale})`,
    }
  }

  const carouselItems = [
    {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: 'Desenvolvimento web',
      icon: Webhook,
    },
    {
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: 'Desenvolvimento de Aplicações Mobile',
      icon: Smartphone,
    },
    {
      src: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: 'Desenvolvimento de Software',
      icon: Code,
    },
    {
      src: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: 'Design de Interface de Usuário (UI)',
      icon: Layout,
    },
    {
      src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: 'Design de Experiência de Usuário (UX)',
      icon: Brush,
    },
    {
      src: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: 'Otimização para Motores de Busca (SEO)',
      icon: Search,
    },
    {
      src: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: 'Desenvolvimento Front-End',
      icon: Monitor,
    },
    {
      src: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: 'Desenvolvimento Back-End',
      icon: Server,
    },
    {
      src: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: 'Manutenção de Sites',
      icon: PenTool,
    },
    {
      src: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: 'Administração de Banco de Dados',
      icon: Database,
    },
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: 'Desenvolvimento de E-commerce',
      icon: Globe,
    },
  ];



  return (
    <div id='section-2' className="w-full flex items-center justify-center  h-screen">
       <ShineBorder color={["#FFF9C4", "#FFB74D", "#795548"]} className="bg-[#0D0D0D] min-w-[800px] w-[1270px] pt-8 flex  gap-7 items-start text-zinc-300 rounded-xl  h-auto">
         <div className="flex flex-col items-start gap-4 ml-1 w-[50%] py-2 px-7">
           <h2 className="text-4xl font-bold">Bem-vindo</h2>
           <p className=" opacity-70 text-sm">A Caraquecoda é uma empresa especializada em serviços de desenvolvimento freelancer, atendendo a uma ampla variedade de demandas no mundo digital. Lorem ipsum dolot </p>
           <ul className='flex flex-col gap-4'>
            <li className='text-sm flex gap-2 items-center'><BadgeCheck className='text-[#FFC700]'/>Atendimento Personalizado</li>
            <li className='text-sm flex gap-2 items-center'><BadgeCheck className='text-[#FFC700]'/>Qualidade Garantida</li>
            <li className='text-sm flex gap-2 items-center'><BadgeCheck className='text-[#FFC700]'/>Soluções Inovadoras</li>
            <li className='text-sm flex gap-2 items-center'><BadgeCheck className='text-[#FFC700]'/>Tecnologia de Ponta</li>
           </ul>

         
         
         </div>
        <div  className='w-[50%] flex flex-col items-end my-3 mx-3 gap-5'>
          { showDiv ? (<div ref={sliderRef} className="keen-slider zoom-out ">
           {carouselItems.map(({src, icon: Icon, title}, idx) => (
          <div key={idx}  className="keen-slider__slide zoom-out__slide  rounded-[8px] bg-[#1A1A1A] shadow-md ring-1 ring-[#1a1a1a]">
            <div style={scaleStyle(idx)}>
              <div className='p-7 flex flex-col items-start gap-5'>
              <div className='  flex flex-col gap-3 '><Icon className='bg-[#FFC700] text-white size-14 rounded-[8px] p-3'/><p className='font-bold text-xl'>{title}</p></div>
              <p className=' text-sm opacity-70'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has</p>
              <p className='text-[#FFC700] text-sm'>Saiba mais</p>
              </div>
            </div>
        </div>
      ))}
    </div>):(
        <div className='rounded-[8px] animate-pulse h-[312px] w-[535px] bg-[#0D0D0D] ring-1 ring-[#1a1a1a]'/>
   
    )}
    <div className="flex cursor-pointer gap-4 justify-end  w-full ">
         <ChevronLeft onClick={()=> slider.current?.prev()}  className="size-10 ring-1 ring-[#1a1a1a] hover:bg-muted bg-[#0D0D0D] rounded-[8px]  opacity-75 p-1" />
         <ChevronRight onClick={()=> slider.current?.next()} className="size-10 ring-1 ring-[#1a1a1a] hover:bg-muted bg-[#0D0D0D] rounded-[8px]  opacity-75 p-1" />
       </div>
        </div> 
       </ShineBorder>
    </div>
  )
}

export default CardAbout
