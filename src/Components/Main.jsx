import React from 'react'
import About from './About'
import Contact from './Contact'
import Facts from './Facts'
import Portfolio from './Portfolio'
import Resume from './Resume'
import Services from './Services'
import Skill from './Skills'
import Testimonial from './Testimonial'

function Main() {
  return (
  <>
    <About/>
    {/* <Facts/> */}
    <Skill/>
    <Resume/>
    <Portfolio/>
    {/* <Services/>
    <Testimonial/> */}
    <Contact/>

  </>
  )
}

export default Main