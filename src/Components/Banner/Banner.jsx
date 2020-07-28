import React from 'react';
import { Link } from 'react-scroll';
import phone from '../../Img/phone.png';
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
                <button
                    className='buttonSlice'
                >
                    <Link
                        to='list'
                        smooth={true}
                        duration={1000}
                        className='buttonLink'
                    >
                        Go Down
                    </Link>
                </button>
            </div>
        </>
    );
};

export default Banner;
