import React, { useState } from 'react';
import './Modal.scss';

const Form = ({ showhideModal }) => {

  // State para validar el envío de datos
  const [ send, setSend ] = useState({
    name: '',
    email: ''
  }); 

  // State para mostrat error en caso de informacíon no válida o incompleta.
  const [ error, setError ] = useState(false);

  // Destructuración de valores (values).
  const { name, email } = send;

  // Función que genera el evento de envío de datos 
  const handleInputChange = e => {
    setSend({
      ...send,
      [e.target.name] : e.target.value
    });
  };

  // Función dque envía y valída informacion.
  const sendData = e => {
    e.preventDefault();
    if(name.trim() === '' || email.trim() === '') {
      setError(true);
      return;
    }
    setError(false)
    // Reset al state para limpiar el fomrulario una vez enviados los datos:
    setSend({
      name: '',
      email: ''
    });
    // Cerrar el modal despues del submit.
    setTimeout(() => {
      showhideModal()
    }, 1000)
  }

  return (
      <div
        className='formContainer'
      >
        <div className='modalButton-container'>
          <h1>Sign up</h1>
          <button
            type='button'
            onClick={showhideModal}
            className='modalButton-close'
          >
            x
          </button>
        </div>
        <form 
          onSubmit={sendData}
          className='formContent'
        >
          <p>Name</p>
          <input
            name='name' 
            type='text'
            value={name} 
            placeholder='name'
            onChange={handleInputChange}
          />
          <p>E-mail</p>
          <input 
            name='email'
            type='text' 
            value={email}
            placeholder='e-mail'
            onChange={handleInputChange}
          />
          <button 
            type='submit'
            className='submitButton'
          >
            Send
          </button>
          {
            error ? 
              <span className='textAlert'>
                All the fields are requierd *
              </span> 
            : null
          }
        </form>
      </div>
  );
};

export default Form;