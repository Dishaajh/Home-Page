import React from 'react'
import Header from './components/Header'
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Creative from './components/section1/Creative';
import CityWise from './components/section2/Citywise';
import Reviews from './components/section3/Reviews';
import Environment from './components/section4/Environment';
import Properties from './components/section5/Properties';
const App = () => {
  const images = [
    "/images/real-estate/building1.jpg",
    "/images/real-estate/building2.jpg",
    "/images/real-estate/building3.jpg",
  ];
  return (
    <div>
      <Header />
      <Carousel items={images} />
      <Creative />
      <CityWise />
      <Properties />
      <Environment />
      <Reviews />
      <Footer />
    </div>
  )
}

export default App
