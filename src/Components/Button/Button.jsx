import React, { useState, useEffect } from 'react';
import Menu from '../Menu/Menu';
import '../Button/Button.scss';

const Button = ({ id }) => {
      
    // set the state of the toggle
    // initially closed
    const [open, setOpen] = useState(false);
    
    // Function wich change the state to open (true)
    const showMenu = () => {
        setOpen(!open);
    }

   // monitor the state of the toggle
  // add/remove click event handler to the document
  useEffect(() => {
    const clickHandler = ({ target }) => {
      const container = document.getElementById(`container-${id}`);
      if (container.contains(target)) return;
      setOpen(false);
    };

    document.addEventListener('click' , clickHandler);

    // these functions clean up the event listeners
    return () => document.removeEventListener('click' , clickHandler);
  });

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
        <div
            id={`container-${id}`}
            className='buttonContainer'
        >
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
