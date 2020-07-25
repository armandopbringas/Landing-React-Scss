import React from 'react';
import './Form.scss';

const Form = () => {

  return (
      <div
        className='formContainer'
      >
        <button
          type='button'
          className='formButton-close'
        >
          x
        </button>
        <form 
          action=""
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