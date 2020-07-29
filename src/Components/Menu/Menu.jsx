import React from 'react';
import Modal from '../Modal/Modal';
import './Menu.scss';

const Menu = ({ open, showModal }) => {

    return (
        <nav 
            id='menuNav'
            open={open}
            className={ open ? '' : 'show' }
        >
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
