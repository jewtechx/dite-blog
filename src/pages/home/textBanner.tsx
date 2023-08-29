import React from 'react'
import { Link } from 'react-router-dom'

export default function TextBanner() {
  return (
    <div className='mt-20 px-4'>
      <h1 className='text-3xl text-slate-700 mb-4 font-[600]'>Editor's Pick</h1>

      <div className="flex items-center gap-1">
        <h1 className='text-4xl font-[700] underline underline-offset-4'>Summer</h1>
        <h1 className='text-3xl -mb-2'>2023</h1>
      </div>

      <p className='text-xl leading-[32px] mt-6 text-slate-700'>Resounding worldwide, the chant 'BLACK LIVES MATTER!' echoes in response to the unjust killing of an individual based on their skin color. Amidst global protests honoring George Floyd, Touchlily stands united by pledging 10% of all sales to the Black Lives Matter Movement. Our unwavering commitment supports justice and equality for all, transcending racial barriers.</p>

      <div className="flex gap-4 mt-6">
        <Link to={''} className='p-[0.7rem] rounded-sm bg-pink-950 text-slate-100 font-[600]'>VISIT BLOG</Link>
        <Link to={'about'} className='p-[0.7rem] rounded-sm bg-slate-100 text-slate-700 font-[600]'>ABOUT US</Link>
      </div>
    </div>
  )
}
