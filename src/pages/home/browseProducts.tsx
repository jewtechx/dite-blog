import React from 'react'
import { Tab } from '@headlessui/react'
import classNames from '../../helpers/classNames'
import { Outlet } from 'react-router-dom'

export default function BrowseProducts() {

    //classes of the nav tabs
    const tabClasses = (selected:any) => classNames(
        "px-6 py-2 font-[600] w-50 text-lg tracking-wide bg-slate-300/10",
        selected
          ? 'bg-white shadow border-b-[3px] outline-none border-slate-500'
          : 'text-slate-500 hover:bg-white/[0.12] hover:text-slate-300'
      )

  return (
    <div className='w-full'>
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
                  <Tab.Panel></Tab.Panel>
                  <Tab.Panel></Tab.Panel>
                  <Tab.Panel></Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
    </div>
  )
}
