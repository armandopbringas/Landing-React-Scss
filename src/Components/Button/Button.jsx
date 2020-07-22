import React, { useState } from 'react';
import Menu from '../Menu/Menu';
import '../Button/Button.scss';

const Button = () => {
    
    const [open, setOpen] = useState(false);

    const showMenu = () => {
        setOpen(!open);
    }

    return (
        <>
            <div 
                open={open}
                className='button'
                onClick={showMenu}
            >
                <div className='buttonlines'/>
                <div className='buttonlines'/>
                <div className='buttonlines'/>
            </div>
            <Menu 
                open={open}
                setOpen={setOpen} 
            />
        </>
    );
};

export default Button;
