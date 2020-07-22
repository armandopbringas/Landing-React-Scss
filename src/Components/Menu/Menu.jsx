import React from 'react';
import './Menu.scss';

const Menu = () => {
    return (
        <nav className='menuNav'>
            <ul className='menuNav-list'>
                <li className='menuNav-item'>
                    <a 
                        target='_blank' 
                        rel='noopener noreferrer'
                        className='menuNav-link'
                        href='https://cv-portfolio.netlify.app/'
                    >
                        One
                    </a>
                </li>
                <li className='menuNav-item'>
                    <a
                        target='_blank' 
                        rel='noopener noreferrer'
                        className='menuNav-link'
                        href='https://cv-portfolio.netlify.app/'
                    >
                        Two
                    </a>
                </li>
                <li className='menuNav-item'>
                    <a
                        target='_blank' 
                        rel='noopener noreferrer'
                        className='menuNav-link'
                        href='https://cv-portfolio.netlify.app/'
                    >
                        Three
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
