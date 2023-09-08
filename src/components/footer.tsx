import React from 'react'
import { footerNavigation as navigation } from '../navigation/navigation' 

export default function Footer() {
    const date = new Date()
  const year = date.getFullYear()
  
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className=" xl:grid xl:grid-cols-3 xl:gap-8">
          
          <div className=" xl:w-[150%] mt-16 grid grid-cols-2 gap-20 xl:col-span-2 xl:mt-0">
            <div className=" md:grid md:grid-cols-2 md:gap-16 justify-between">
              <div>
                <h3 className="text-lg font-bold leading-6 text-gray-900/90">CUSTOMER INFO</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.customer_info.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-md leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-lg font-bold leading-6 text-gray-900/90">ORDERS</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.orders.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-md leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-lg font-bold leading-6 text-gray-900/90">OUR SITE</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.our_site.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-md leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-lg font-bold leading-6 text-gray-900/90">USEFUL LINKS</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.useful_links.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-md leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 flex sm:flex-row flex-col justify-between items-center">
          <p className="text-sm leading-5 text-gray-500">&copy; Touchlily {year}. A Wester Interdigital Initiative.</p>
          <div className='flex justify-center gap-1'>
            <p className='text-slate-600'>Payments made via</p>
            <img src='/src/assets/images/slydepay-logo-blue.png' alt='payment-logo' className='w-40' />
          </div>
        </div>
      </div>
    </footer>
  )
}