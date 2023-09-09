import React from 'react';
import { ArrowUp } from 'iconsax-react';
import ScrollToTop from 'react-scroll-up'


export default function BackToTop() {

  return (
    <div className={` fixed w-full text-right z-20 cursor-pointer`}>
      <div
        className=" animate-bounce fixed right-10 bottom-10 z-40 shadow-md rounded-full w-14 h-14 flex items-center justify-center bg-slate-50 border-[0.2px] border-blue-100 text-center text-lg font-[600]"
        onClick={() => {
          window.scrollTo(0,0);
          alert(scrollY)
        }}   
      >
        <ArrowUp />
      </div>
    </div>
  );
}
