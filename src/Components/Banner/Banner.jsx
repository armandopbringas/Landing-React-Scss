import React from 'react';
import phone from '../../Img/phone.png';
import SliceButton from '../SliceButton/SliceButton';
import './Banner.scss';

const Banner = () => {
    return (
        <>
            <div className='mask'>
                <div className='maskDecription' >
                    <h1 className='maskDescription-title'>
                        All your money, one account
                    </h1>
                    <h2 className='maskDescription-about'>
                        We're building next generation personal finance tools.
                    </h2>
                    <p>Sign up to get early access.</p>
                </div>
                <div className='maskImage-container'>
                    <img 
                        src={phone} 
                        alt='phone' 
                        className='maskImage'
                    />
                </div>
            </div>
            <SliceButton />
        </>
    );
};

export default Banner;
