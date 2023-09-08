import React from 'react'
import Product from '../../components/product'
import { perfumesList } from '../../mockdata/products'
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowLeft,ArrowRight } from 'iconsax-react'

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import {Autoplay, Navigation, Pagination } from 'swiper/modules';



export default function QuickChekout() {


        //products
        const firstSwipe = perfumesList.slice(0,5).map(product => (
          <div key={product.name} className="w-full justify-between">
              <Product products={product}/>
          </div>
        ))
        const secondSwipe = perfumesList.slice(5,10).map(product => (
          <div key={product.name} className="w-full justify-between">
              <Product products={product}/>
          </div>
        ))
  
        //swipe 
        const navigationPrevRef = React.useRef(null)
        const navigationNextRef = React.useRef(null)
    
        const swipe = (products1:any,products2:any) => (
            <Swiper spaceBetween={30}
            modules={[Autoplay,Navigation, Pagination]}
            className="mySwiper h-contain relative py-20 text-center w-full"
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
           onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
           }} 
          >
            <SwiperSlide>
              <div className="grid gap-16 grid-cols-2 lg:grid-cols-5 P-4 items-center justify-center h-contain w-full ">
                  {products1}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid gap-16 grid-cols-2 lg:grid-cols-5 P-4 items-center justify-center h-contain w-full ">
                  {products2}
              </div>
            </SwiperSlide>
            <div className='w-full  h-40 absolute bottom-1 cursor-pointer flex justify-between items-center'>
              <div ref={navigationPrevRef} className='p-4 bg-slate-100  z-20 rounded-full shadow-md'>
                <ArrowLeft />
              </div>
              <div ref={navigationNextRef} className='p-4 bg-slate-100  z-10  rounded-full shadow-md'>
                <ArrowRight />
              </div>
            </div>
          </Swiper>
        )
  
  

  return (
    <div className='container w-full h-contain mt-24'>
      <div className='w-full flex flex-col items-center'>
            <h2 className='text-xl font-[500] text-slate-700'>FRAGRANCES & COSMETICS</h2>
            <div className="w-full mt-10 flex flex-col justify-center items-center relative">
                <h1 className='text-2xl mt-4 font-[600] text-slate-8 absolute -bottom-4 bg-slate-50 z-10 px-4 left-[50%-]'>QUICK CHECKOUT AVAILABLE</h1>
                <div className="absolute w-full h-[0.1px] border-[0.1px]"></div>
            </div>
      </div>

      <div className="mt-10 mb-10 pb-4 h-max">
      {swipe(firstSwipe,secondSwipe)}
      </div>
    </div>
  )
}
