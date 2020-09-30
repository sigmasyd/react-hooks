import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  const { name, email } = formState;

  // useEffect, permite ejecutar un efecto secundario cuando algo suceda en los componentes
  useEffect(() => {
    //console.log('hey');
    // retorna una funcion de limpieza
  }, []);
  useEffect(() => {
    //console.log('formstate cambio');
  }, [formState]);
  useEffect(() => {
    //console.log('email cambio');
  }, [email]);
  const handleInputChange = ({ target }) => {
    //console.log(target.name);
    //console.log(target.value);
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };
  return (
    <>
      <h1>UseEffect</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="email@domain.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      {name === '123' && <Message />}
    </>
  );
};
