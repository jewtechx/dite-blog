import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner2() {
  return (
    <div className='container w-full md:p-12 flex flex-col xl:flex-row -gap-2 justify-between'>
       <div className='flex gap-4 w-full justify-center mt-4'>
          <img src='/src/assets/images/banner3.jpg' className='w-2/5 md:w-2/5 h-3/4' alt='banner3'/>
          <img src='/src/assets/images/banner4.jpg' className='w-2/5 mt-10 md:w-2/5 h-3/4' alt='banner3'/>
       </div>

       <div className='mt-10 px-4 text-left xl:w-full'>
            <h1 className='text-3xl text-slate-700 mb-[0.5rem] font-[600]'>Editor's Pick</h1>

            <div className="flex items-center gap-1">
              <h1 className='text-4xl font-[700] underline underline-offset-4'>Summer</h1>
              <h1 className='text-3xl -mb-2'>2023</h1>
            </div>

            <p className='text-lg leading-[32px] mt-6 text-slate-700'>Resounding worldwide, the chant 'BLACK LIVES MATTER!' echoes in response to the unjust killing of an individual based on their skin color. Amidst global protests honoring George Floyd, Touchlily stands united by pledging 10% of all sales to the Black Lives Matter Movement. Our unwavering commitment supports justice and equality for all, transcending racial barriers.</p>

            <div className="flex gap-4 mt-6">
              <Link to={''} className='p-[0.7rem] rounded-sm bg-pink-950 text-slate-100 font-[600]'>VISIT BLOG</Link>
              <Link to={'about'} className='p-[0.7rem] rounded-sm bg-slate-100 text-slate-700 font-[600]'>ABOUT US</Link>
            </div>
      </div>
    </div>
  )
}
