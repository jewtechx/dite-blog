import React from 'react'
import { Link } from 'react-router-dom';

interface props {
    text1:string,
    text2:string,
    link:string,
    image:string,
    gender:string,
}
export default function CollectionBannerComponent({text1,text2,link,image,gender}:props) {
        return (
          <div className='w-[100%] h-[60vh] relative overflow-hidden mb-20'>
            <div className={`absolute z-10 h-full flex flex-col justify-center  ${gender === 'men' ? 'left-4' : 'right-4 text-right'}`}>
              <h2 className='text-slate-50 font-[500]'>{text1}</h2>
              <h1 className='text-slate-50 text-4xl font-[600]'>{text2}</h1>
              <Link to={link} className={`p-2 w-24 mt-2 text-sm font-[600] bg-slate-50 right-1 ${gender === 'women' ? 'ml-40':''}`}>VIEW MORE</Link>
            </div>
            <img
              src={image}
              alt='women'
              className=' w-full h-full object-cover transition-transform duration-200 transform hover:scale-110'
            />
          </div>
        );
      }

