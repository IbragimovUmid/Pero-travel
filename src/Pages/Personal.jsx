import React from 'react'
import Navbar from '../components/Navbars/Navbars'
import PersonalAr from '../components/PersonalAr/PersonalAr';
import Personalpage from '../components/Personalpage/Personalpage'

const Personal = () => {
  return (
    <div className='per-area'>
      <div className="container">
        <Navbar />
        <Personalpage />
        <PersonalAr/>
      </div>
    </div>
  );
}

export default Personal