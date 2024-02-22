import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components
import Home from '../screen/public/Home';
import AboutUs from '../screen/public/AboutUs';
import ContactUs from '../screen/public/ContactUs';
import PhotoGallery from '../screen/public/PhotoGallery';
import Amentities from '../screen/public/Amentities';
import VirtualTour from '../screen/public/VirtualTour';
import UserProfile from '../screen/private/UserProfile';
import OurProperties from '../screen/private/OurProperties';
import PropertyDetails from '../screen/private/PropertyDetails';

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/amentities' element={<Amentities />} />
        <Route path='/photo-gallery' element={<PhotoGallery />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/virtualtour' element={<VirtualTour />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/properties' element={<OurProperties />} />
        <Route path='/property/:id' element={<PropertyDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;