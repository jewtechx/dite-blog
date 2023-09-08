import React from 'react'

export default function VisitOnIG() {
  return (
    <div className='w-full animate-pulse bg-slate-100 h-[90vh] flex flex-col items-center justify-center mt-20'>
          <div className='w-full flex flex-col mb-24 items-center'>
              <h2 className='text-xl font-[500] text-slate-700'>MORE FROM US</h2>
              <div className="w-full mt-10 flex flex-col justify-center items-center relative">
                  <h1 className='text-2xl mt-4 font-[600] text-slate-8 absolute -bottom-4 bg-slate-100 z-10 px-4 left-[50%-]'>VISIT OUR INSTAGRAM PAGE</h1>
                  <div className="absolute w-full h-[0.1px] border-[0.1px]"></div>
              </div>
           </div>

      <div className="shadow-md animate-pulse py-20 px-0 flex flex-col items-center text-center rounded-md p-4">
        <h1 className='text-2xl font-[500] text-slate-600'>INSTAGRAM</h1>
        <p className='text-lg mt-2 font-[600] text-slate-900/50'>@TOUCHLILY_</p>
        <p className='text-lg mt-2 w-2/3 font-[500] text-slate-900/40'>Follow us on Instagram for more updates on sales and special offers!</p>
      </div>
    </div>
  )
}
