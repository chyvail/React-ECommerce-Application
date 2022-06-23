import React from 'react'
import Link from 'next/link';

import { urlFor, urlfor } from '../lib/client';

// destructuring 

const HeroBanner = ({ HeroBanner : {
  smallText, midText, largeText1, image, buttonText, desc
}}) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{ smallText }</p>
        <h3>{ midText } </h3>
        <h1>{ largeText1 } </h1>
        <img src={urlFor(image)} alt='headphones' className='hero-banner-image'/>
      </div>
      <div>
        <Link href={"/product/${HeroBanner.product}"} >
          <button type='button'>{buttonText}</button>
        </Link>
        <div className='desc'>
          <h5>Description</h5>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner