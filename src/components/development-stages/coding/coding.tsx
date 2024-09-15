import React from 'react'
import {motion} from 'framer-motion'

const Coding = () => {
  return (
    <div className='w-full h-full'>
      <div className='flex flex-col items-center gap-7'>
        <h3 className='text-3xl font-bold'>
          Desenvolvimento Tecnológico: <span className='text-[#FFC700]'>Construindo</span> Funcionalidades
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
              src='https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              width={300}
              height={300}
              className='clip-box rounded-l-[8px]'
            />
            <h3 className='font-bold text-xl'>Configuração</h3>
            <p className='text-sm text-[#FFC700] font-light'>Saiba mais</p>
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className='flex flex-col gap-2 items-center -ml-[13px]'
          >
            <img
              src='https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              width={300}
              height={300}
              className='clip-box-left'
            />
            <h3 className='font-bold text-xl'>Desenvolvimento</h3>
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
              src='https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              width={300}
              height={300}
              className='clip-box-inward-left rounded-r-[8px]'
            />
            <h3 className='font-bold text-xl'>Testes</h3>
            <p className='text-sm text-[#FFC700] font-light'>Saiba mais</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Coding
