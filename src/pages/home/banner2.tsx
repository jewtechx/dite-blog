import React from 'react'

export default function Banner2() {
  return (
    <div className='w-full p-14 md:p-12 flex flex-col md:flex-row gap-8 justify-between'>
       <img src='/src/assets/images/banner3.jpg' className='w-full md:w-2/5 h-2/4' alt='banner3'/>
       <img src='/src/assets/images/banner4.jpg' className='w-full mt-10 md:w-2/5 h-2/4' alt='banner3'/>
    </div>
  )
}
