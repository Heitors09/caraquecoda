import {  Facebook, Instagram, Linkedin, PaperclipIcon, Twitter, } from 'lucide-react'
import React from 'react'
import { WavyBackground } from '../ui/wavy-background'

const ContactForm = () => {
  return (
    <div id="section-6" className="relative h-screen mt-24 w-full">
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
      <p className="  opacity-70">Redes sociais</p>
      <div className="gap-5 flex opacity-70">
        <Linkedin/>
        <Instagram/>
        <Facebook/>
        <Twitter/>
      </div>
      <h3 className='mt-4'>Direto do site:</h3>
      <form className="flex flex-col gap-8 text-sm">
        <input className="w-[483px] border-white border-opacity-70 border-b bg-transparent py-2 outline-none" placeholder="Seu Nome"/>
        <input className="w-[483px] border-white border-opacity-70 border-b bg-transparent py-2 outline-none" placeholder="Seu Email"/>
        <textarea className="w-[483px] mt-3 resize-none border-white border-opacity-70 border bg-transparent px-2 rounded-[8px] py-2 outline-none"  placeholder="Conte sobre seu projeto"/>
      <div className="my-5 flex justify-between items-center gap-5">
        <p className="flex gap-3 "><PaperclipIcon/>Adicione anexo</p>
        <button type='submit' className="bg-[#FFC700] w-[170px]  text-black px-6 py-2 rounded-[8px] ">Enviar</button>
      </div>
      </form>
    </div>
   </div>
  </WavyBackground>
 </div>
  )
}

export default ContactForm
