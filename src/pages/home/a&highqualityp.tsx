import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Autoplay,EffectFade, Navigation, Pagination } from 'swiper/modules';
import image1 from '/src/assets/images/hq1.jpg'
import image2 from '/src/assets/images/hq2.jpg'
import image3 from '/src/assets/images/hq3.jpg'
import { Link } from 'react-router-dom';


export default function AahighqualityP() {
    const ProductImgs = (image1:string,image2:string,image3:string) => {
        return (
            <div className='w-full hidden md:flex flex-col md:flex-row justify-between p-8 '>
                <img src={image1} className='w-40 h-40'/>
                <img src={image2} className='w-40 h-40'/>
                <img src={image3} className='w-40 h-40'/>
            </div>
        )
    }
  return (
    <div className='w-full h-max flex md:flex-col px-16 mt-[160px]'>
      <div className="hidden md:flex md:flex-row flex-col justify-between">
        <img src='/src/assets/images/banner5.jpg' className='w-2/5 h-1/3' alt='banner5'/>
        <img src='/src/assets/images/banner6.jpg' className='w-2/5 h-1/3 mt-8' alt='banne6'/>
      </div>


      <div className="flex flex-col gap-2 mt-10">
        <h1 className='text-slate-800 text-4xl'>Best Selection of <br /><span className='text-slate-950 font-[700] underline underline-offset-8 '>High-Quality</span> products</h1>
        <p className='mt-8 text-slate-700/80 text-xl tracking-normal font-[450] w-80 md:w-full'>To achieve this, we have partnered with retailers all over the country to list their products online. Browse through our store for products from your favorite stores. </p>


        <Swiper
        spaceBetween={30}
        effect={'fade'}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Autoplay,EffectFade, Navigation, Pagination]}
        className="mySwiper w-full"
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>{ProductImgs(image1,image2,image3)}</SwiperSlide>
        <SwiperSlide>{ProductImgs(image3,image2,image1)}</SwiperSlide>
        <SwiperSlide>{ProductImgs(image2,image3,image1)}</SwiperSlide>
        
      </Swiper>
       

       <div className="flex gap-2 mt-6">
          <Link to={'contact'} className='p-4 rounded-sm font-[600] bg-pink-950 text-slate-50'>CONTACT US</Link>
          <Link to={'health-beauty'} className='p-4 rounded-sm font-[600] bg-slate-100'>HEALTH & BEAUTY</Link>
       </div>
      </div>
    </div>
  )
}
