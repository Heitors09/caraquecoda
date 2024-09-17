import React from 'react'
import { motion } from "framer-motion"

const Contacts = () => {
  return (
    <div className='w-full h-full '>
    <div className='flex flex-col items-center gap-7'>
     <h3 className='text-3xl font-bold'>Primeiros Passos: Alinhando <span className='text-[#FFC700]'>Expectativas</span></h3>
     <div className=' w-full flex justify-center'>
      <motion.div initial={{ x: -100, opacity: 0 }} 
      whileInView={{ x: 0, opacity: 1 }} 
      transition={{ duration: 0.5 }} 
      viewport={{ once: true }}  
      className='flex flex-col gap-2 items-center'>
       <img
       src='https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        width={300}
        height={300}
        className='clip-box rounded-l-[8px]'
       />
       <h3 className='font-bold text-xl'>Reunião Inicial</h3>
       <p className='text-sm text-[#FFC700] font-light'>Saiba mais</p>
       </motion.div> 
       <motion.div
       initial={{ x: -100, opacity: 0 }}
       whileInView={{ x: 0, opacity: 1 }}
       transition={{ duration: 0.5, delay: 0.3 }} 
       viewport={{ once: true }}
       className='flex flex-col gap-2 items-center '>
       <img
       src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        width={300}
        height={300}
        className='clip-box-left '
       />
       <h3 className='font-bold text-xl'>Definição de Escopo</h3>
       <p className='text-sm text-[#FFC700] font-light'>Saiba mais</p>
       </motion.div> 
       <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }} 
        viewport={{ once: true }}
       className='flex flex-col gap-2 items-center'>
       <img
       src='https://plus.unsplash.com/premium_photo-1664300162579-6a4f1084dd63?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        width={300}
        height={300}
        className='clip-box-inward-left rounded-r-[8px]'
       />
       <h3 className='font-bold text-xl'>Proposta de Projeto</h3>
       <p className='text-sm text-[#FFC700] font-light'>Saiba mais</p>
       </motion.div> 
     </div>
     </div> 
   </div>
  )
}

export default Contacts
