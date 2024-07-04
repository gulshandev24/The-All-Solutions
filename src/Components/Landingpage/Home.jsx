import React from 'react'
import Navbar from '../Header/Navbar'
import Hero from '../Herosections/Hero'
import Workwithus from '../Workwithuspage/Workwithus'
import Services from './Services/Services'
function Home() {
  return (
    <div className=''>
      {/* <Navbar/> */}
      <Hero className="mt-84"/>
      <Workwithus/>
      <Services/>
    </div>
  )
}

export default Home
