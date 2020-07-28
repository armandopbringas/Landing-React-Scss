import React from 'react';
import './Modal.scss';

const Form = ({ showModal }) => {

  return (
      <div
        className='formContainer'
      >
        <div className='modalButton-container'>
          <button
            type='button'
            className='modalButton-close'
            onClick={showModal}
          >
            x
          </button>
        </div>
        <form 
          action=''
          className='formContent'
        >
          <p>Name</p>
          <input 
            type='text' 
            placeholder='name'
          />
          <p>E-mail</p>
          <input 
            type='text' 
            placeholder='e-mail'
          />
        </form>
      </div>
  );
};

export default Form;