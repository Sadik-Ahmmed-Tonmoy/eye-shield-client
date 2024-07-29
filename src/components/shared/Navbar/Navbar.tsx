import React from 'react';
import PCNavBar from './PCNavBar/PCNavBar';
import MobileNavBar from './MobileNavBar/MobileNavBar';

const Navbar = () => {
  return (
    <div >
    <div className='hidden md:block'>  <PCNavBar/></div>
    <div className='block md:hidden'>  <MobileNavBar/></div>
    </div>
  );
};

export default Navbar;