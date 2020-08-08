import React, { useState } from 'react';
import phone from '../../Img/phone.png';
import Modal from '../Modal/Modal';
import SliceButton from '../SliceButton/SliceButton';
import './Banner.scss';

const Banner = () => {

    const [open, setOpen] =useState(false);

    const showhideModal = () => {
        setOpen(!open)
    }

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
                    <button
                        type='button'
                        onClick={showhideModal}
                        className='headerNav-button'
                    >
                        Early acces
                    </button>
                </div>
                <div className='maskImage-container'>
                    <img 
                        src={phone} 
                        alt='phone' 
                        className='maskImage'
                    />
                </div>
            </div>
            <div
                className={`modalContainer modalShowing-${open}`}
            >
                <Modal 
                    showhideModal={showhideModal}
                />
            </div>
            <SliceButton />
        </>
    );
};

export default Banner;
