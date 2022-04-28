import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { FaRegEnvelope } from "react-icons/fa";

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email:'', message:''});
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    setFormState({...formState, name: e.target.value })
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      } 
    } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }

      if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
      }  
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section className='contact'>
      <h1 className="form">Contact me</h1>
      <div className='center'>
        <a href='mailto:glen.luersman@gmail.com'>
          <span className="label"><FaRegEnvelope /></span>
        </a>
      </div>
      <h2>glen.luersman@gmail.com</h2>
      <form id="contact-form" onSubmit={handleSubmit} className="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" defaultValue={name} onChange={handleChange} name="name" />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" defaultValue={email} onChange={handleChange} name="email"  />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" defaultValue={message} onChange={handleChange} rows="5"  />
        </div>
        {errorMessage && (
          <div>
            <p className='error-text'>{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default ContactForm;