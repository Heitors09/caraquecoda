import React from 'react'

const Reviews = () => {
  return (
    <div id='section-5' className="h-[700px] w-full flex flex-col gap-7 py-32 px-4 md:px-8 lg:px-16 xl:px-32">
  <div className="flex flex-col gap-7">
    <h3 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl">
      O que nossos clientes dizem <span className="text-[#FFC700]">sobre</span> nós
    </h3>
    <p className="text-white opacity-70 text-lg w-[900px] font-light">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto amet eveniet dolor labore! Vero autem consequatur, vitae voluptatum
    </p>
  </div> 

  <div className="flex flex-wrap gap-6 ">
    {[1, 2, 3].map((_, index) => (
      <div key={index} className="bg-[#0D0D0D] w-full sm:w-[300px] rounded-lg shadow-lg flex flex-col h-auto p-5 md:p-7">
        <p className="text-white text-sm md:text-base">
          <span className="text-[#FFC700] text-lg">&quot;</span>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, fuga quisquam consectetur architecto quo quis rem maiores eveniet pariatur distinctio natus cum doloribus! Quae, id. Magnam odio voluptatem consequatur numquam</p>
          <span className="text-[#FFC700] text-lg">&quot;</span>
        </p>
        <div className="flex items-center gap-4 mt-4">
          <div className="w-12 h-12 overflow-hidden bg-green-500 rounded-full">
            <img
              src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-white font-bold text-sm md:text-base">David Patel</h3>
            <p className="opacity-70 text-white text-xs md:text-sm">Project Manager</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  )
}

export default Reviews
