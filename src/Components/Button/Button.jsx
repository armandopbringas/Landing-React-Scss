import React, { useState } from 'react';
import Menu from '../Menu/Menu';
import '../Button/Button.scss';

const Button = () => {
    
    const [open, setOpen] = useState(false);

    const showMenu = () => {
        setOpen(!open);
    }

    return (
        <div className='buttonContainer'>
            <button
                type='button'
                open={open}
                className='button'
                onClick={showMenu}
            >
                <div className='buttonlines'/>
                <div className='buttonlines'/>
                <div className='buttonlines'/>
            </button>
            <Menu 
                open={open}
                setOpen={setOpen} 
            />
        </div>
    );
};

export default Button;
