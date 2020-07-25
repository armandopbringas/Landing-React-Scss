import React, {useState} from 'react';
import logo from '../../Img/logo.png'
import Button from '../Button/Button';
import Modal from '../Form/Form';
import './Header.scss';

const Header = () => {

    const [open, setOpen] =useState(false);

    const showModal = () => {
        setOpen(!open)
    }

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
                <button
                    type='button'
                    onClick={showModal}
                    className='headerNav-button'
                >
                    Early acces
                </button>
            </nav>
            <div 
                className={`modalContainer modalShowing-${open}`}
            >
                <Modal />
            </div>
            <Button />
        </header>
    );
};

export default Header;
