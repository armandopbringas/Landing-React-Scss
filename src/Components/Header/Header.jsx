import React, { useEffect } from 'react';
import logo from '../../Img/logo.png'
import Button from '../Button/Button';
import './Header.scss';

const Header = () => {

    // same but for keypresses
    // if the esc key is pressed close the menu toggle
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
        if (keyCode !== 27) return;
        setOpen(false);
        };
        document.addEventListener('keydown', keyHandler);

        return () => document.removeEventListener('keydown', keyHandler);
    });

    return (
        <header className='header container'>
            <div className='headerLogo'>
                <img src={logo} alt='logo' />
            </div>
            <nav className='headerNav'>
                <ul className='headerNav-list'>
                    <li className='headerNav-item'>
                        <a 
                            target='_blank' 
                            rel='noopener noreferrer'
                            className='headerNav-link'
                            href='https://cv-portfolio.netlify.app/'
                        >
                            One
                        </a>
                    </li>
                    <li className='headerNav-item'>
                        <a
                            target='_blank' 
                            rel='noopener noreferrer'
                            className='headerNav-link'
                            href='https://cv-portfolio.netlify.app/'
                        >
                            Two
                        </a>
                    </li>
                    <li className='headerNav-item'>
                        <a
                            target='_blank' 
                            rel='noopener noreferrer'
                            className='headerNav-link'
                            href='https://cv-portfolio.netlify.app/'
                        >
                            Three
                        </a>
                    </li>
                </ul>
            </nav>
            <Button />
        </header>
    );
};

export default Header;
