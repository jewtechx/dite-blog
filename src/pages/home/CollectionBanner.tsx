import React from 'react'
import CollectionBannerComponent from '../../components/collectionBanner'

export default function CollectionBanner() {
  return (
    <div className='container w-full flex flex-col md:flex-row gap-4'>
      <CollectionBannerComponent text1='FEATURED SHOP' text2='Strong Bull' link='men' image='/src/assets/images/banner2.jpg' gender='men'/>

      <CollectionBannerComponent text1='OUR COLLECTION' text2='For Women' link='women' image='/src/assets/images/banner1.jpg' gender='women'/>
    </div>
  )
}
