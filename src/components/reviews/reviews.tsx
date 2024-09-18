import { PlayCircle, StarIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import ShineBorder from '../magicui/shine-border'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const Reviews = () => {
  return (
    <div id="section-4" className=" w-full h-auto px-32 flex flex-col  items-center gap-12">
      <div className="text-white flex flex-col gap-6  items-center">
        <p className="opacity-70 text-sm sm:text-base md:text-lg">Trabalhos e avaliações</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">Transformamos visões em <span className="text-[#FFC700]">resultados</span></h2>
        <p className="w-full sm:w-[500px] md:w-[700px] text-center text-sm sm:text-base md:text-xl opacity-70 font-light">
      Transformando Visões em Realidade Digital Através de Soluções Inovadoras e Sob Medida.
    </p>
      </div>
      <Swiper
      className='w-full h-[400px] my-12 relative'
      spaceBetween={10}
      slidesPerView={3}
      navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
    >
      <SwiperSlide className='p-5 w-[400px] hover:bg-[#0D0D0D] duration-200 rounded-[8px]'>
        <Dialog>
          <DialogTrigger className='outline-none'>
            <div className='flex flex-col items-start'>
              <img
                src='https://cdn.dribbble.com/users/427857/screenshots/6456237/mi_fashion_-_freebie_-_free_sketch_template_-_tranmautritam_2x_4x.png'
                className='rounded-[8px]'
              />
              <div className='text-white mt-3 flex flex-col gap-2'>
                <h3 className='text-2xl font-bold'>EcoWear Collective</h3>
                <p className='text-sm text-start opacity-70'>Desenvolvimento web</p>
                <p className='text-sm text-start '>Out - 23</p>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className='w-[800px] h-[500px] border-none bg-[#0D0D0D] flex'>
            <div className=' relative w-[400px]  h-full'>
             <img
                src='https://cdn.dribbble.com/users/427857/screenshots/6456237/mi_fashion_-_freebie_-_free_sketch_template_-_tranmautritam_2x_4x.png'
                className='rounded-[8px] opacity-70'
              />

               <PlayCircle className='absolute top-28 text-white left-[42%] size-16'/>
               <div className=' w-[400px] bg-zinc-800 hover:bg-zinc-700 duration-150 h-[140px] mt-4 rounded-[8px] p-3'>
                  <p className='text-[10px] flex text-white'>
                    <span className="text-[#FFC700]">
                       "
                    </span>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. At suscipit aliquam et, natus mollitia architecto quam dolorem nesciunt voluptate rem, consequatur sit unde facere reprehenderit cumque id dolorum, fugit possimus.
                    <span className="text-[#FFC700]">
                      "
                    </span>
                  </p>
                  <div className=' w-full mt-5 gap-3 flex items-center'>
                  <div className="w-8 h-8 overflow-hidden flex  ml-2 rounded-full">
                        <img
                           src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                           alt="Avatar"
                           className="w-full h-full object-cover"
                          />
                   </div>
                   <div className="flex flex-col">
            <h3 className="text-white font-bold text-[11px]">David Patel</h3>
            <p className="opacity-70 text-white text-[11px]">Project Manager</p>
            
          </div>

                  </div>
               </div>
            </div>
            <div className="text-white text-2xl font-bold w-[300px] flex flex-col gap-5">
              <h3>EcoWear Collective</h3>    
              <p className='text-xs font-normal opacity-70'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatibus culpa, eaque alias porro deleniti consequuntur quae voluptates repellendus sed ut, aliquid blanditiis id doloribus! Natus qui neque blanditiis provident?</p>       
              <p className='text-base'>Sobre</p> 
              <p className='text-xs font-normal opacity-70'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatibus culpa, eaque alias porro deleniti consequuntur quae voluptates, alias porro deleniti consequuntur quae voluptates.</p>
              <p className='text-base'>Desafios</p> 
              <p className='text-xs font-normal opacity-70'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatibus culpa, eaque alias porro deleniti consequuntur quae voluptates, alias porro deleniti consequuntur quae voluptates.</p>
              
            </div>
          </DialogContent>
        </Dialog>
      </SwiperSlide>

      <SwiperSlide className='p-5 w-[400px] hover:bg-[#0D0D0D] rounded-[8px]'>
        <Dialog>
          <DialogTrigger>
            <div className='flex flex-col items-start'>
              <img
                src='https://cdn.dribbble.com/users/427857/screenshots/6543376/fox_-_layout-exploration_-_tranmautritam_-_dribbble_-_2019_4x.png'
                className='rounded-[8px]'
              />
              <div className='text-white mt-3 flex flex-col gap-2'>
                <h3 className='text-2xl font-bold text-start'>FoxNetwork</h3>
                <p className='text-sm text-start opacity-70'>Desenvolvimento web</p>
                <p className='text-sm text-start '>Jul - 24</p>
              </div>
            </div>
          </DialogTrigger>
        </Dialog>
      </SwiperSlide>

      <SwiperSlide className='p-5 w-[400px] hover:bg-[#0D0D0D] rounded-[8px]'>
        <Dialog>
          <DialogTrigger>
            <div className='flex flex-col items-start'>
              <img
                src='https://cdn.dribbble.com/users/757683/screenshots/6555182/ass_1_dribb_2x_4x.jpg'
                className='rounded-[8px]'
              />
              <div className='text-white mt-3 flex flex-col gap-2'>
                <h3 className='text-2xl font-bold'>Swiftpay</h3>
                <p className='text-sm text-start opacity-70'>Redesign</p>
                <p className='text-sm text-start '>Jan - 23</p>
              </div>
            </div>
          </DialogTrigger>
        </Dialog>
      </SwiperSlide>

      <SwiperSlide className='p-5 w-[400px] hover:bg-[#0D0D0D] rounded-[8px]'>
        <Dialog>
          <DialogTrigger>
            <div className='flex flex-col items-start'>
              <img
                src='https://cdn.dribbble.com/users/2168386/screenshots/6556204/weather_4x.png'
                className='rounded-[8px]'
              />
              <div className='text-white mt-3 flex flex-col gap-2'>
                <h3 className='text-2xl font-bold'>Weather forecast</h3>
                <p className='text-sm text-start opacity-70'>Desenvolvimento mobile</p>
                <p className='text-sm text-start '>Out - 23</p>
              </div>
            </div>
          </DialogTrigger>
        </Dialog>
      </SwiperSlide>

      <SwiperSlide className='p-5 w-[400px] hover:bg-[#0D0D0D] rounded-[8px]'>
        <Dialog>
          <DialogTrigger>
            <div className='flex flex-col items-start'>
              <img
                src='https://cdn.dribbble.com/users/1776998/screenshots/6555774/artboard_2_copy_15_2x_4x.png'
                className='rounded-[8px]'
              />
              <div className='text-white mt-3 flex flex-col gap-2'>
                <h3 className='text-2xl font-bold'>Share Travel App</h3>
                <p className='text-sm text-start opacity-70'>Desenvolvimento mobile</p>
                <p className='text-sm text-start '>Ago - 22</p>
              </div>
            </div>
          </DialogTrigger>
        </Dialog>
      </SwiperSlide>
    </Swiper>
    

     </div>
  )
}

export default Reviews
