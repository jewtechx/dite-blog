import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Autoplay,EffectFade, Navigation, Pagination } from 'swiper/modules';
import heroImg1 from "../../assets/images/heroImg1.jpg";
import heroImg2 from "../../assets/images/heroImg2.jpg";
import heroImg3 from "../../assets/images/heroImg4.jpg";
import { Link } from 'react-router-dom';

export default function Hero() {
  const OverlayDesign = (text1:string,text2:string,buttonlink:string) => {
    return (
      <div className='fixed z-10 w-full h-full flex flex-col items-center justify-center'>
        <h1 className='text-[80px] md:text-[140px] text-slate-50/50 font-[700]'>{text1}</h1>
        <div className='flex flex-col items-center justify-between p-2 border-[15px] border-slate-50/50 w-2/3 md:w-1/3 h-2/3 absolute -z-10'>
          <h2 className='text-slate-50/90 font-[700]'>{text2}</h2>
          <div className="flex gap-6 ">
            <Link to='/store' className='p-4 bg-red-200 rounded-sm font-[500] text-xs'>OPEN SHOP</Link>
            <Link to={buttonlink} className='p-4 text-slate-100 underline underline-offset-4 text-xs font-[600] decoration-red-200'>VIEW MORE</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='w-full me-auto h-contain '>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Autoplay,EffectFade, Navigation, Pagination]}
        className="mySwiper h-[80vh] md:h-[100vh]"
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
      >

        <SwiperSlide className="swiper-slide">
          <>
          {OverlayDesign("FASHION", "ESCALATE YOUR CONFIDENCE", "/store")}
          <img src={heroImg1} alt='swiper1' className='h-[190vh] w-full fixed'/>
          </>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
           <>
           {OverlayDesign("IMPRESSIONS", "LIVE IT,LOVE IT!", "/women")}
          <img src={heroImg2} alt='swiper2' className='h-[190vh] w-full fixed'/>
           </>
        </SwiperSlide>
        

        <SwiperSlide className="swiper-slide">
          <>
          {OverlayDesign("COLLECTION", "NEW COLLECTION FOR MEN", "/men")}
          <img src={heroImg3} alt='swiper3' className='h-[190vh] w-full fixed'/>
          </>
        </SwiperSlide>

        
      </Swiper>
    </div>
  );
}
