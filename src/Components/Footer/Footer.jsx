import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className='footer container'>
            <p>
                Copyright© {new Date().getFullYear()}, <span>Armando Bringas</span>
            </p>
        </div>
    );
};

export default Footer;
