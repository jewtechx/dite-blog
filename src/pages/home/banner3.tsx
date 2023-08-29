import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner3() {
  return (
    <div className='mt-10 w-full md:h-[90vh] overflow-hidden relative'>
        {/* overlay */}
        <div className="w-full h-full absolute bg-slate-900/50"></div>
        <div className="flex flex-col absolute left-8 justify-center w-full h-full">
            <h1 className='text-3xl tracking-wide text-slate-50 '>A masterpiece for <br /> every <span className='h-full w-full font-[700] text-4xl underline underline-offset-8 '>Body Type</span>
            </h1>

            <p className='text-xl font-[600] w-90 mt-6 text-slate-100'>Explore the latest trends in women’s wear
specially curated for you.</p>

            <div className="flex gap-2 mt-4">
                <Link to='/women' className='p-4 rounded-sm bg-pink-950 text-slate-50 font-[600]'>COLLECTION</Link>
                <Link to='/shop' className='p-4 rounded-sm border-4 border-slate-50 hover:bg-slate-50 hover:text-slate-800 text-slate-50 font-[600]'>VISIT SHOP</Link>
            </div>
        </div>
       <img src='/src/assets/images/heroImg3.jpg'/>
    </div>
  )
}
