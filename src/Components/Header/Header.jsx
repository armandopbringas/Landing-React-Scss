import React from 'react';
import logo from '../../Img/logo.png'
import './Header.scss';
import '../Button/Button'
import Button from '../Button/Button';

const Header = () => {
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

export default Header
