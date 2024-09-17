import {  Facebook, Instagram, Linkedin, PaperclipIcon, Twitter, } from 'lucide-react'
import React from 'react'
import { WavyBackground } from '../ui/wavy-background'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';


const formSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório!"),
  email: z.string().email("Email inválido!").nonempty("Email é obrigatório!"),
  about: z.string().min(1, "Mensagem é obrigatória!"),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {


  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });


  const handleFormSend = (data: FormValues) =>{
    console.log(data.email)
  }



  
  return (
    <div id="section-6" className="relative overflow-hidden  h-screen my-24 w-full">
    <WavyBackground className="ring-1 ring-zinc-900 relative max-w-full flex flex-wrap   h-screen justify-center items-center ">
   <div className=" text-white h-[550px] flex flex-col justify-between  w-[50%] pl-12">
   <img
   src='/caraquecoda-logo.png'
   alt='caraquecoda-logo'
   width={200}
   height={100}
   className='mr-7'
 />
     <h3 className="text-5xl font-bold leading-relaxed">Tem um projeto? Adorariamos ajudar</h3>
     <p className="opacity-70">exmeplo@gmail.com</p>
   </div>
   <div className=" h-[550px]  bg-[#0D0D0D] rounded-xl shadow-lg  w-[563px]">
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
      <form className="flex flex-col gap-9 text-sm relative" onSubmit={ handleSubmit(handleFormSend)}>
        
        <input  {...register('name')} className="w-[483px] border-white border-opacity-70 border-b bg-transparent py-2 outline-none" placeholder='Seu Nome'/>
        {errors.name && <p className="text-red-500 absolute top-12">{errors.name.message}</p>}
        <input {...register('email')} className="w-[483px] border-white border-opacity-70 border-b bg-transparent py-2 outline-none" placeholder="Seu Email"/>
        {errors.email && <p className="text-red-500 absolute top-[120px]">{errors.email.message}</p>}
        <textarea {...register('about')} className="w-[483px] mt-3 resize-none border-white border-opacity-70 border bg-transparent px-2 rounded-[8px] py-2 outline-none"  placeholder="Conte sobre seu projeto"/>
        {errors.about && <p className="text-red-500 absolute top-56">{errors.about.message}</p>}
      <div className="my-5 flex justify-between items-center ">
        <p className="flex gap-3 "><PaperclipIcon/>Adicione anexo</p>
        <button type='submit' className="bg-[#FFC700] w-[170px]  text-black px-6 py-2 rounded-[8px] mr-4">Enviar</button>
      </div>
      </form>
    </div>
   </div>
  </WavyBackground>
 </div>
  )
}

export default ContactForm
