import {  PaperclipIcon, } from 'lucide-react'
import React from 'react'
import { WavyBackground } from '../ui/wavy-background'

const ContactForm = () => {
  return (
    <div id="section-4" className="relative h-screen mt-24 w-full">
    <WavyBackground className="ring-1 ring-zinc-900 relative flex flex-wrap w-full  h-screen justify-center items-center ">
   <div className=" text-white h-[557px] flex flex-col justify-between  w-[50%] pl-12">
   <img
   src='/caraquecoda-logo.png'
   alt='caraquecoda-logo'
   width={200}
   height={100}
   className='mr-7'
 />
     <h3 className="text-5xl font-bold leading-relaxed">Tem um projeto? Adorariamos <span className='text-[#FFC700] '>ajudar</span></h3>
     <p className="opacity-70">exmeplo@gmail.com</p>
   </div>
   <div className=" h-[557px]  bg-[#0D0D0D] mr-9 rounded-xl shadow-lg  w-[563px]">
    <div className="relative z-10 gap-5 flex flex-col px-8 py-8 text-white">
      <h2 className=" font-bold text-[#FFC700] text-xl">Contate-nos</h2>
      <p className="  opacity-70">Tenho interesse em...</p>
      <div className="gap-4 flex flex-wrap font-light   max-w-[383px]">
        <button className="ring-1 ring-zinc-400 p-3 rounded-[8px] opacity-70 focus:opacity-100">UI/UX Design</button>
        <button className="ring-1 ring-zinc-400 p-3 rounded-[8px] opacity-70 focus:opacity-100">Website</button>
        <button className="ring-1 ring-zinc-400 p-3 rounded-[8px] opacity-70 focus:opacity-100">Branding</button>
        <button className="ring-1 ring-zinc-400 p-3 rounded-[8px] opacity-70 focus:opacity-100">Design System</button>
        <button className="ring-1 ring-zinc-400 p-3 rounded-[8px] opacity-70 focus:opacity-100" >Outro</button>
      </div>
      <div className="flex flex-col gap-8 text-sm">
        <input className="w-[483px] border-white border-opacity-70 border-b bg-transparent py-2 outline-none" placeholder="Seu Nome"/>
        <input className="w-[483px] border-white border-opacity-70 border-b bg-transparent py-2 outline-none" placeholder="Seu Email"/>
        <input className="w-[483px] border-white border-opacity-70 border-b bg-transparent py-2 outline-none"  placeholder="Conte sobre seu projeto"/>
      </div>
      <div className="my-5 flex justify-between items-center gap-5">
        <p className="flex gap-3 "><PaperclipIcon/>Adicione anexo</p>
        <button className="bg-[#FFC700] w-[170px]  text-black px-6 py-2 rounded-[8px] ">Enviar</button>
      </div>
    </div>
   </div>
  </WavyBackground>
 </div>
  )
}

export default ContactForm
