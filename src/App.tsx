import React from 'react';

import './App.css';
import Navbar from './Components/Navbar';
import HeroPage from './Components/HeroPage';
import RatingComponemt from './Components/RatingComponemt';
import Featurecomponent from './Components/Featurecomponent';
import FeatureComponent1 from './Components/FeatureComponent1';
import RliableAndSecure from './Components/RliableAndSecure';
import EnturprinarshipComponent from './Components/EnturprinarshipComponent';
import Footer from './Components/Footer';
import GetInTouch from './Components/GetInTouch';
import GalleryComponent from './Components/GalleryComponent';
import GalleryComponent1 from './Components/GalleryComponent1';

function App() {
  return (
    <>
    <div className='overflow-x-hidden'>
   <Navbar/>
   <HeroPage/>
   <RatingComponemt/>
   <Featurecomponent/>
   <GalleryComponent/>
   <RliableAndSecure/>
   <GalleryComponent1/>
   <FeatureComponent1/>
   <EnturprinarshipComponent/>
   <GetInTouch/>
   <Footer/>
   </div>
  </>
  );
}

export default App;
