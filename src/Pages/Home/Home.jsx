import React from 'react'
import Banner from './Banner'
import AboutUs from './AboutUs'
import Services from './Services'

const Home = () => {
  return (
    <div>
        {/* <h2 className='text-6xl text-center'>This is Home</h2> */}
        <Banner></Banner>
        <AboutUs></AboutUs>
        <Services></Services>
    </div>
  )
}

export default Home