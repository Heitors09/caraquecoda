import React from 'react'
import {motion} from 'framer-motion'

const Delivery = () => {
  return (
    <div className='w-full h-full'>
    <div className='flex flex-col items-center gap-7'>
      <h3 className='text-3xl font-bold'>
        Lançamento e Suporte: <span className='text-[#FFC700]'>A Caminho</span> do Sucesso
      </h3>
      <div className='w-full flex justify-center'>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='flex flex-col gap-2 items-center'
        >
          <img
            src='https://images.unsplash.com/photo-1579389082947-e54d8e911928?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            width={300}
            height={300}
            className='clip-box rounded-l-[8px]'
          />
          <h3 className='font-bold text-xl'>Revisão Final e Ajustes</h3>
          <p className='text-sm text-[#FFC700] font-light'>Saiba mais</p>
        </motion.div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className='flex flex-col gap-2 items-center'
        >
          <img
            src='https://images.unsplash.com/photo-1426024120108-99cc76989c71?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            width={300}
            height={300}
            className='clip-box-left'
          />
          <h3 className='font-bold text-xl'>Implementação</h3>
          <p className='text-sm text-[#FFC700] font-light'>Saiba mais</p>
        </motion.div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className='flex flex-col gap-2 items-center'
        >
          <img
            src='https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            width={300}
            height={300}
            className='clip-box-inward-left rounded-r-[8px]'
          />
          <h3 className='font-bold text-xl'>Treinamento e Suporte</h3>
          <p className='text-sm text-[#FFC700] font-light'>Saiba mais</p>
        </motion.div>
      </div>
    </div>
  </div>
  )
}

export default Delivery
