import React from 'react'
import {motion} from 'framer-motion'

const Design = () => {
  return (
    <div className='w-full h-full'>
      <div className='flex flex-col items-center gap-7'>
        <h3 className='text-3xl font-bold'>
          Criação Visual: <span className='text-[#FFC700]'>Transformando</span> Ideias em Realidade
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
              src='https://plus.unsplash.com/premium_photo-1661510884617-232a2ba30dc2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              width={300}
              height={300}
              className='clip-box rounded-l-[8px]'
            />
            <h3 className='font-bold text-xl'>Criação de Wireframes</h3>
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
              src='https://images.unsplash.com/photo-1612556810513-617a5a892418?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb3RvdGlwYWdlbXxlbnwwfHwwfHx8MA%3D%3Dhttps://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              width={300}
              height={300}
              className='clip-box-left'
            />
            <h3 className='font-bold text-xl'>Prototipagem</h3>
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
              src='https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              width={300}
              height={300}
              className='clip-box-inward-left rounded-r-[8px]'
            />
            <h3 className='font-bold text-xl'>Revisão e Aprovação</h3>
            <p className='text-sm text-[#FFC700] font-light'>Saiba mais</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Design
