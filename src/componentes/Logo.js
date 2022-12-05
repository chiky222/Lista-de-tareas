import React from 'react';
import freeCodeCampLogo from '../imagenes/escudo.jpg';

const Logo = () => {
  return (
    <div className='freecodecamp-logo-contenedor'>
        <img 
          alt="logo"
          src={freeCodeCampLogo} 
          className='freecodecamp-logo' />
    </div>
  )
};

export default Logo;