import React from 'react';
import { Link } from 'react-scroll';
import './SliceButton.scss';

const SliceButton = () => {
    return (
        <div>
            <button
                    className='buttonSlice'
                >
                    <Link
                        to='list'
                        smooth={true}
                        duration={1000}
                        className='buttonLink'
                    >
                        Go Down
                    </Link>
                </button>
        </div>
    );
};

export default SliceButton;
