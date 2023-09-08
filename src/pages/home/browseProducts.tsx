import React,{useRef} from 'react'
import { Tab } from '@headlessui/react'
import { ArrowLeft,ArrowRight } from 'iconsax-react'
import classNames from '../../helpers/classNames'
import Product from '../../components/product'
import { productsList } from '../../mockdata/products'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import {Autoplay, Navigation, Pagination } from 'swiper/modules';



export default function BrowseProducts() {

    //classes of the nav tabs
    const tabClasses = (selected:any) => classNames(
        "px-6 py-2 font-[600] w-50 xl:text-lg tracking-wide bg-slate-300/10",
        selected
          ? 'bg-white shadow border-b-[3px] outline-none border-slate-500'
          : 'text-slate-500 hover:bg-white/[0.12] hover:text-slate-300'
      )

      //products
      const firstSwipe = productsList.slice(0,4).map(product => (
        <div className="w-full flex-col sm:flex-row justify-between">
            <Product products={product}/>
        </div>
      ))
      const secondSwipe = productsList.slice(4,8).map(product => (
        <div className="w-full justify-between">
            <Product products={product}/>
        </div>
      ))

      //swipe 

      const navigationPrevRef = React.useRef(null)
      const navigationNextRef = React.useRef(null)
  
      const swipe = (products1:any,products2:any) => (
          <Swiper spaceBetween={30}
          modules={[Autoplay,Navigation, Pagination]}
          className="mySwiper relative h-max w-full text-center"
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
            <div className="grid gap-16 items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 P-4 w-full justify-between">
                {products1}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid gap-16 items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 P-4 w-full justify-between">
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
    <div className='container w-full mb-20'>
       <div className="text-center w-full flex flex-col gap-2 mb-10">
         <h1 className='text-3xl font-[600] text-red-950'>Browse Our Collection</h1>
         <h3 className='font-[500] text-slate-900/70'>New Products Added Daily</h3>
       </div>

       <Tab.Group>
                <Tab.List className='flex'>
                  <Tab 
                  className={({ selected }) => tabClasses(selected)
                }
                   >FEATURED</Tab>
                  <Tab 
                    className={({ selected }) => tabClasses(selected)
                  }
                  >NEW ARRIVALS</Tab>
                  <Tab 
                    className={({ selected }) => tabClasses(selected)
                  }
                  >SALE</Tab>
                </Tab.List>
                <Tab.Panels>
                  <Tab.Panel>{swipe(firstSwipe,secondSwipe)}</Tab.Panel>
                  <Tab.Panel>{swipe(secondSwipe,firstSwipe)}</Tab.Panel>
                  <Tab.Panel>{swipe(firstSwipe,secondSwipe)}</Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
    </div>
  )
}
