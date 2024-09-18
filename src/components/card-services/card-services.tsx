'use client'

import React, { useEffect, useState } from 'react'
import ShineBorder from '../magicui/shine-border'
import {  BarChart,  CheckCheck,  ChevronRight,  Cloud,  Cpu, Database,  ServerCog, ShieldAlert,  Smartphone,  Webhook, Zap } from 'lucide-react'
import "keen-slider/keen-slider.min.css"
import { Button } from '../ui/button'



const CardServices = () => {
  return (
    <div id='section-3' className="h-auto w-full px-32 my-16 md:my-32 gap-12 flex flex-col">
   
      <div className='  flex flex-col  items-center gap-7'>
        <p className="opacity-70 text-base text-white md:text-lg text-center">Serviços</p>
        <h3 className='text-white text-3xl md:text-5xl  w-[900px] font-bold text-center'>Soluções <span className="text-[#FFC700]">Diversas</span> para as suas necessidades</h3>
        <p className='text-white opacity-70 w-[750px] text-center text-xs md:text-xl font-light'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita molestias rerum delectus dolores. 
        </p>
        <div className='bg-[#0D0D0D] w-full rounded-[8px] h- mt-7'>
          <div className=' flex h-[500px] p-10 w-full gap-5 justify-between '>
             <div className='flex flex-col h-[400px]  justify-between text-white'>
                 <p className='text-[#FFC700] text-sm ring-1 rounded-full w-[200px] ring-[#FFC700] flex items-center justify-center p-1'>Tecnologia que Conecta</p>
                 <h3 className='text-5xl  font-bold'>Desenvolvimento <span className="text-[#FFC700]">web</span></h3>
                 <p className=' text-xs'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, qui. Illum blanditiis sed facilis accusantium reprehenderit eum quidem dolorum delectus, id voluptatem aliquam aliquid, placeat.</p>
                 <div className='flex flex-col gap-4'>
                   <p className='flex items-center gap-2 text-sm'><CheckCheck className='text-[#FFC700]'/>lorem ipsum </p>
                   <p className='flex items-center gap-2 text-sm'><CheckCheck className='text-[#FFC700]'/>lorem ipsum</p>
                   <p className='flex items-center gap-2 text-sm'><CheckCheck className='text-[#FFC700]'/>lorem ipsum</p>

                 </div>
                 <Button className='bg-[#FFC700] w-[200px] flex items-center gap-2 text-black'>
                   Saiba mais
                   <ChevronRight className='size-3'/>
                 </Button>
             </div>
             <img
             src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
             className='w-[50%] h-[400px]  rounded-[8px] opacity-70'
             />
          </div>
          <div className=' flex h-[500px] p-10 gap-5 w-full  justify-between '>
             <img
             src='https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
             className='w-[50%] h-[400px]  rounded-[8px] opacity-70'
             />
             <div className='flex flex-col h-[400px] justify-between text-white'>
                 <p className='text-[#FFC700] text-sm ring-1 rounded-full w-[200px] ring-[#FFC700] flex items-center justify-center p-1'> Experiências dinâmicas</p>
                 <h3 className='text-5xl  font-bold'>Desenvolvimento <span className="text-[#FFC700]">mobile</span></h3>
                 <p className=' text-xs'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, qui. Illum blanditiis sed facilis accusantium reprehenderit eum quidem dolorum delectus, id voluptatem aliquam aliquid, placeat.</p>
                 <div className='flex flex-col gap-4'>
                   <p className='flex items-center gap-2 text-sm'><CheckCheck className='text-[#FFC700]'/>lorem ipsum </p>
                   <p className='flex items-center gap-2 text-sm'><CheckCheck className='text-[#FFC700]'/>lorem ipsum</p>
                   <p className='flex items-center gap-2 text-sm'><CheckCheck className='text-[#FFC700]'/>lorem ipsum</p>

                 </div>
                 <Button className='bg-[#FFC700] w-[200px] flex items-center gap-2 text-black'>
                   Saiba mais
                   <ChevronRight className='size-3'/>
                 </Button>
             </div>
          </div>
          <div className=' flex h-[500px] p-10 w-full gap-5 justify-between '>
             <div className='flex flex-col h-[400px]  justify-between text-white'>
                 <p className='text-[#FFC700] text-sm ring-1 rounded-full w-[200px] ring-[#FFC700] flex items-center justify-center p-1'>Design Inteligente</p>
                 <h3 className='text-5xl  font-bold'>UI/UX <span className="text-[#FFC700]">Design</span></h3>
                 <p className=' text-xs'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, qui. Illum blanditiis sed facilis accusantium reprehenderit eum quidem dolorum delectus, id voluptatem aliquam aliquid, placeat.</p>
                 <div className='flex flex-col gap-4'>
                   <p className='flex items-center gap-2 text-sm'><CheckCheck className='text-[#FFC700]'/>lorem ipsum </p>
                   <p className='flex items-center gap-2 text-sm'><CheckCheck className='text-[#FFC700]'/>lorem ipsum</p>
                   <p className='flex items-center gap-2 text-sm'><CheckCheck className='text-[#FFC700]'/>lorem ipsum</p>

                 </div>
                 <Button className='bg-[#FFC700] w-[200px] flex items-center gap-2 text-black'>
                   Saiba mais
                   <ChevronRight className='size-3'/>
                 </Button>
             </div>
             <img
             src='https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFVJJTJGVVglMjBERVNJR058ZW58MHx8MHx8fDA%3D'
             className='w-[50%] h-[400px]  rounded-[8px] opacity-70'
             />
          </div>
        </div>
      </div>
    
</div>
  )
}

export default CardServices
