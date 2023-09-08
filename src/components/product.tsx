import React from 'react'
import { ShoppingCartIcon,HeartIcon} from '@heroicons/react/24/outline'
import { SearchNormal1,Shuffle} from "iconsax-react";

export default function Product({ products }: any) {
  function handleIcons() {
    
  }
  return (
    <div className='w-3/4 h-full shadow-sm rounded-sm mb-10'>
      <div className='p-[0.7rem] mt-2 rounded-full bg-red-600 w-max text-center text-slate-100 '>HOT</div>
        <div className="w-full h-full flex flex-col items-center relative">
            <img src={products.image} className='w-full h-full object-fill'/>
        
               <div className="bg-white flex gap-2 p-2 w-contain rounded-lg text-md shadow-md absolute bottom-2 z-[99]">
                <button onClick={() => handleIcons()}><ShoppingCartIcon className='w-8 text-slate-900/50 cursor-pointer' />
                </button>
                <button onClick={() => handleIcons()}>
                  <SearchNormal1 className='w-8 text-slate-900/50 cursor-pointer'/>
                </button>
                <button onClick={() => handleIcons()}>
                  <Shuffle className='w-8 text-slate-900/50 cursor-pointer'/>
                </button>
                <button onClick={() => handleIcons()}><HeartIcon className='w-8 text-slate-900/50 cursor-pointer' />
                </button>
              </div>
        </div>

        <div className='flex flex-col gap-2 w-full items-center'>
            <p className='text-red-950/90 font-[600] text-lg leading-[20px] md:text-xl'>{products.name}</p>
            <p className='text-pink-900/50 font-[600] text-md md:text-lg'>{products.price}</p>
        </div>
    </div>
  )
}
