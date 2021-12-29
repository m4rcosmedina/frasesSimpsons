import React from 'react';
import logo from '../img/logo.png';

const Logo = () => {
    return (
        <div className='text-center my-5 .col-12'>
            <img src={logo} alt="logo" className='w-100 logo' />
        </div>
    );
};

export default Logo;