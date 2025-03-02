import React from 'react'
import Testimonial from '../slider/Testimonial'
import { testimonials } from '../../data/home'

export const Section14 = () => {
  return (
    <div className=''>
      <Testimonial testimonials={testimonials}/>
    </div>
  )
}

export default Section14
